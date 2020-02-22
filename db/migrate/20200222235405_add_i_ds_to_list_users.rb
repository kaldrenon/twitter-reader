class AddIDsToListUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :list_users, :user_id, :integer
    add_column :list_users, :list_id, :integer
  end
end
