class Unit < ApplicationRecord
    belongs_to :property
    has_many :inspections, dependent: :destroy
    has_many :items, through: :inspections
end
