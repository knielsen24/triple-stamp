class UserWithPropertiesSerializer < ActiveModel::Serializer
    attributes :id, :full_name, :email, :phone, :account_name, :image, :business

    has_many :properties
end
