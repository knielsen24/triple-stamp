class CreateInspections < ActiveRecord::Migration[6.1]
  def change
    create_table :inspections do |t|
      t.string :title, default: ""
      t.string :type_name, default: ""
      t.date :scheduled_date
      t.string :status, default: ""
      t.belongs_to :unit, null: false, foreign_key: true

      t.timestamps
    end
  end
end
