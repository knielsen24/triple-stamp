class User < ApplicationRecord
    has_many :properties
    has_many :units, through: :properties
    has_secure_password

    validates :full_name, :email, :full_name, :account_name, presence: true
    validates :email, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

    validates :password, length: { in: 4..12 }, if: -> {id.blank?}
    # validate :password_uppercase, if: -> {id.blank?}
    # validate :password_special_char, if: -> {id.blank?}
    # validate :password_contains_number, if: -> {id.blank?}

    # def password_uppercase
    #     if password
    #         return if !!password.match(/\p{Upper}/)
    #         errors.add :password, ' must contain at least 1 uppercase '
    #     end
    # end

    # def password_special_char
    #     special = "?<>',?[]}{=-)(*&^%$#`~{}!"
    #     regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
    #     return if password =~ regex
    #     errors.add :password, ' must contain special character'
    # end

    # def password_contains_number
    #     if password
    #         return if password.count("0-9") > 0
    #         errors.add :password, ' must contain at least one number'
    #     end
    # end
end
