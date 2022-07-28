class UnitSerializer < ActiveModel::Serializer
    attributes :id, :number, :square_feet, :label, :property_id
    belongs_to :property
end
