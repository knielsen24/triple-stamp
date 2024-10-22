# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_02_171727) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "inspections", force: :cascade do |t|
    t.string "title", default: ""
    t.string "type_name", default: ""
    t.date "scheduled_date"
    t.string "status", default: ""
    t.bigint "unit_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["unit_id"], name: "index_inspections_on_unit_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "item_name", default: ""
    t.string "category", default: ""
    t.string "condition", default: ""
    t.text "comments", default: ""
    t.bigint "inspection_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["inspection_id"], name: "index_items_on_inspection_id"
  end

  create_table "properties", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", default: ""
    t.string "city", default: ""
    t.string "state", default: ""
    t.string "postal_code", default: ""
    t.string "country", default: ""
    t.string "image", default: ""
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_properties_on_user_id"
  end

  create_table "units", force: :cascade do |t|
    t.string "number", default: ""
    t.integer "square_feet"
    t.string "label", default: ""
    t.bigint "property_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["property_id"], name: "index_units_on_property_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "full_name", null: false
    t.string "email", null: false
    t.string "phone", default: ""
    t.string "account_name", null: false
    t.string "image", default: ""
    t.string "business", default: ""
    t.string "password_digest", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "inspections", "units"
  add_foreign_key "items", "inspections"
  add_foreign_key "properties", "users"
  add_foreign_key "units", "properties"
end
