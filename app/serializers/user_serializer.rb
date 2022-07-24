class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :phone, :account_name, :profile_img, :business
end
