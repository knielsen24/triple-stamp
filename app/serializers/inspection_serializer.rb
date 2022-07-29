class InspectionSerializer < ActiveModel::Serializer
  attributes :id, :type
  has_one :unit
end
