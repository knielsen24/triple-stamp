class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :postal_code, :country, :image, :units, :user_id
  belongs_to :user
end
