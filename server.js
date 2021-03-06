/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Initialize Twitter client
var Twitter = require('twitter');
var twitterKeys = JSON.parse(fs.readFileSync(path.join(__dirname, 'twitter.json')));
var twitterClient = new Twitter(twitterKeys);

var COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.set('port', (process.env.PORT || 3001));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/comments', function(req, res) {
  console.log('/api/comments');
  twitterClient.get('search/tweets', params, function(error, results, response) {
    var tweets = results.statuses;
    tweets = tweets.map(function(tweet) {
      return {
        author: "  " + tweet.user.name + " (" + tweet.user.screen_name + ")",
        message: tweet.text,
        key: tweet.id
      }
    });
    res.json(tweets);
  });
});

app.post('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newComment = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text,
    };
    comments.push(newComment);
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(comments);
    });
  });
});


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

var topics = [
  '#MissionTech',
  'Kingdom Builders',
  'Church Technology',
  'god and gaming',
  'faith and technology'
]

function searchAll(topic_list) {
  topic_list.forEach(function(topic) {
    search(topic);
  });
}

function search(query) {
  var params = {q: query};

  twitterClient.get('search/tweets', params, function(error, results, response) {
    var tweets = results.statuses;

    if (error) {
      console.log(error);
      return;
    }

    if (tweets.length > 0) {
      console.log("\n###");
      console.log("### " + params.q);
      console.log("###");
      tweets.forEach(function(tweet) {
        console.log(tweet);
        console.log("  " + tweet.user.name + " (" + tweet.user.screen_name + ")");
        console.log("    " + tweet.text.replace("\n", "\n    "));
        console.log();
      });
    } else {
      console.log("No results for " + params.q);
    }
  });
}

