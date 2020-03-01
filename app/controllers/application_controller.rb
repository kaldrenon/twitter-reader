class ApplicationController < ActionController::Base
  include TwitterHelper

  def index
    @client = twitter_client
    @tweets = @client.home_timeline
    @lists = List.all
  end
end
