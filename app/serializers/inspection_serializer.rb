class InspectionSerializer < ActiveModel::Serializer
    attributes :id, :title, :type_name, :status, :unit_id, :scheduled_date
    # :unit_number
    has_one :unit

    # def unit_number
    #     self.unit.number
    # end
end
