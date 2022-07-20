class AddPasswordToManagerUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :manager_users, :password_digest, :string
  end
end
