json.extract! user, :id, :name, :twitter_user_id, :nickname, :notes, :created_at, :updated_at
json.url user_url(user, format: :json)
