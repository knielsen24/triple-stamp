class Unit < ApplicationRecord
    belongs_to :property
    has_many :inspections
end
