class UnitSerializer < ActiveModel::Serializer
  attributes :id, :number, :square_feet, :name
  # has_one :property
end
