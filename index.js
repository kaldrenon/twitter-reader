var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'asq5gMUn0Ufzu0rXtL2Fm2lzZ',
  consumer_secret: 'EPt57hPmSTjQVKfwVCzBhCTkvh8Kn29OvDZn5kLXVnDMrumGTk',
  access_token_key: '631663116-VYUeeeTLS9NPudwlZPqEUYBY5UI9JUTnU2B29IfI',
  access_token_secret: 'r7F2rhpoOPEhqOsSPCUW5KlFpTARuriJxd1koz4G8qrcf'
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
    console.log('### ' + topic);
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
      tweets.forEach(function(tweet) {
        console.log("  " + tweet.user.name + " (" + tweet.user.screen_name + ")");
        console.log("\t" + tweet.text);
      });
    } else {
      console.log("No results for " + params.q);
    }
  });
}

searchAll(topics);
