class ManagerUserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :business, :profile_image
end
