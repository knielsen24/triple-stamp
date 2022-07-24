class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.string :postal_code
      t.string :country
      t.string :image
      t.integer :units
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
