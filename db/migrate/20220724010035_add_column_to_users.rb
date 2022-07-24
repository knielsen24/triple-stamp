class AddColumnToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :business, :string
  end
end
