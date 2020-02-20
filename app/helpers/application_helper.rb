module ApplicationHelper
  def render_tweet(tweet)
    return <<-TWEET.html_safe
    <div class="tweet">
      <div class="user">
        #{tweet.user.name}
      </div><div class="message">#{tweet.text}</div></div>
    TWEET
  end
end
