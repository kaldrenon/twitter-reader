# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class List < ApplicationRecord
  has_many :list_users
  has_many :users, through: :list_users

  def twitter_user_ids
    users.map { |user| user.twitter_user_id }
  end

  def twitter_usernames
    users.map { |user| user.name }
  end
end
