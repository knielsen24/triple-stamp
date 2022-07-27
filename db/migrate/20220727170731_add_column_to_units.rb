class AddColumnToUnits < ActiveRecord::Migration[6.1]
  def change
    add_column :units, :name, :string, default: ""
  end
end
