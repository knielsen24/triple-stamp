class UnitSerializer < ActiveModel::Serializer
  attributes :id, :number, :square_feet
  has_one :property
end
