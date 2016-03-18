var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'KEY_HERE',
  consumer_secret: 'KEY_HERE',
  access_token_key: 'KEY_HERE',
  access_token_secret: 'KEY_HERE'
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

  client.get('search/tweets', params, function(error, results, response) {
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
        console.log("  " + tweet.user.name + " (" + tweet.user.screen_name + ")");
        console.log("    " + tweet.text.replace("\n", "\n    "));
        console.log();
      });
    } else {
      console.log("No results for " + params.q);
    }
  });
}

searchAll(topics);
