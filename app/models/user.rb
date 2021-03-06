# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string
#  nickname        :string
#  notes           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  twitter_user_id :integer
#
class User < ApplicationRecord
  has_many :list_users
  has_many :lists, through: :list_users
end
