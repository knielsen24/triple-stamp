class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :name, null: false
      t.string :address, default: ""
      t.string :city, default: ""
      t.string :state, default: ""
      t.string :postal_code, default: ""
      t.string :country, default: ""
      t.string :image, default: ""
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
