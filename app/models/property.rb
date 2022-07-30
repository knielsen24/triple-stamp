class Property < ApplicationRecord
  belongs_to :user
  has_many :units, dependent: :destroy
  has_many :inspections, through: :units

  validates :name, presence: true
end
