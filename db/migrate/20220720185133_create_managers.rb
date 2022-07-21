class CreateManagers < ActiveRecord::Migration[6.1]
  def change
    create_table :managers do |t|
      t.string :full_name
      t.string :email
      t.string :phone
      t.string :account_name
      t.string :profile_img
      t.string :password_digest

      t.timestamps
    end
  end
end
