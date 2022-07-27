class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :postal_code, :country, :image, :user_id
  has_many :units
end
