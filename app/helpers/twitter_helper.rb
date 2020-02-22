module TwitterHelper
  def twitter_client
    @client ||= Twitter::REST::Client.new do |config|
      config.consumer_key        = Settings.twitter.consumer_key
      config.consumer_secret     = Settings.twitter.consumer_secret
      config.access_token        = Settings.twitter.access_token_key
      config.access_token_secret = Settings.twitter.access_token_secret
    end
  end
end
