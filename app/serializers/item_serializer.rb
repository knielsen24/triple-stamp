class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :category, :condition, :comments
  has_one :inspection
end
