class UnitSerializer < ActiveModel::Serializer
  attributes :id, :number, :square_feet, :label, :property_id
  # has_one :property
end
