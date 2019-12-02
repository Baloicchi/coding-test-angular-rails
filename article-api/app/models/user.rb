class User < ApplicationRecord
  has_secure_password

  validates_presence_of :email
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates_uniqueness_of :email
  validates :password,
            length: { minimum: 5 },
            if: -> { new_record? || !password.nil? }
end
