class Inspection < ApplicationRecord
    belongs_to :unit
    has_many :items, dependent: :destroy
end
