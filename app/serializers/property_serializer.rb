class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :postal_code, :country, :image, :units, :user_id
  has_one :user
end
