class Property < ApplicationRecord
    belongs_to :user
    has_many :units, dependent: :destroy
    has_many :inspections, through: :units

    validates :name, presence: true

    def total_square_feet
        self.units.sum(:square_feet)
    end

end
