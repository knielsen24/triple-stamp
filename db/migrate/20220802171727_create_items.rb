class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :item_name, default: ""
      t.string :category, default: ""
      t.string :condition, default: ""
      t.text :comments, default: ""
      t.belongs_to :inspection, null: false, foreign_key: true

      t.timestamps
    end
  end
end
