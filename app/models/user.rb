class User < ApplicationRecord
  validates :username, :email, presence: true
  validates :username, :email, :phone, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
