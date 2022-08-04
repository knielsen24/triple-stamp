class PropertySerializer < ActiveModel::Serializer
    attributes :id, :name, :address, :city, :state, :postal_code, :country, :image, :user_id
    # , :total_square_footage
    has_many :units

    # def total_square_footage
    #     Object.units.all.sum(:square_feet)
    # end

end
