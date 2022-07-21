class AddColumnToManagers < ActiveRecord::Migration[6.1]
  def change
    add_column :managers, :account_name, :string
  end
end
