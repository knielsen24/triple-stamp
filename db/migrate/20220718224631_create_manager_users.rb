class CreateManagerUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :manager_users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.string :business
      t.string :profile_image

      t.timestamps
    end
  end
end
