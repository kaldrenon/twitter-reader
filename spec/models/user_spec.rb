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
require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
