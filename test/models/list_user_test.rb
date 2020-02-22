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
require 'test_helper'

class ListUserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
