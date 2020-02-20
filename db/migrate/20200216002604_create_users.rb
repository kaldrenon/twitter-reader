class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :twitter_user_id
      t.string :nickname
      t.string :notes

      t.timestamps
    end
  end
end
