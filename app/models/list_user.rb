# == Schema Information
#
# Table name: list_users
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  list_id    :integer
#  user_id    :integer
#
class ListUser < ApplicationRecord
  belongs_to :list
  belongs_to :user
end
