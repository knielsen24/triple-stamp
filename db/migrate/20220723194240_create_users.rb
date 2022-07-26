class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :full_name, null: false
      t.string :email, null: false
      t.string :phone, default: ""
      t.string :account_name, null: false
      t.string :image, default: ""
      t.string :business, default: ""
      t.string :password_digest, null: false

      t.timestamps
    end
  end
end
