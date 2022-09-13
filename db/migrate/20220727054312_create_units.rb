class CreateUnits < ActiveRecord::Migration[6.1]
  def change
    create_table :units do |t|
      t.string :number, default: ""
      t.integer :square_feet, default: ""
      t.string :label, default: ""
      t.belongs_to :property, null: false, foreign_key: true

      t.timestamps
    end
  end
end
