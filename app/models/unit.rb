class Unit < ApplicationRecord
    belongs_to :property
    has_many :inspections, dependent: :destroy
    has_many :items, through: :inspections

    def total_square_feet
        self.all.sum(:square_feet)
    end
end
