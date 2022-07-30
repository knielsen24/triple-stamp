class InspectionSerializer < ActiveModel::Serializer
    attributes :id, :title, :type_name, :status, :unit_id, :scheduled_date
    # has_one :unit
end
