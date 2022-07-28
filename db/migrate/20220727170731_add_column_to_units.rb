class AddColumnToUnits < ActiveRecord::Migration[6.1]
  def change
    add_column :units, :label, :string, default: ""
  end
end
