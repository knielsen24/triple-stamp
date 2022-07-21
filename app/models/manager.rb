class Manager < ApplicationRecord
    has_secure_password

    validates :full_name, :email, :full_name, :account_name, presence: true
    validates :email, uniqueness: true
end
