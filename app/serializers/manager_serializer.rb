class ManagerSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :phone, :business, :profile_img, :password_digest
end
