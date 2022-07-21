class ManagerSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :account_name, :phone, :profile_img
end
