module ApplicationHelper
  def render_tweet(tweet)
    return <<-TWEET.html_safe
    <div class="tweet">
      <div class="user">
        #{tweet.user.name}
      </div>
      <div class="message">#{tweet.full_text}
      </div>
      <div class="bottom-bar">
        <a class="timestamp" href="#{tweet.uri}">#{tweet.created_at}</a>
      </div>
    </div>
    TWEET
  end
end
