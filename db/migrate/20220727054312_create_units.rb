class CreateUnits < ActiveRecord::Migration[6.1]
  def change
    create_table :units do |t|
      t.string :number
      t.string :square_feet
      t.belongs_to :property, null: false, foreign_key: true

      t.timestamps
    end
  end
end
