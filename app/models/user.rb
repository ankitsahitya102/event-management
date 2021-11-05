class User < ApplicationRecord
  has_many :attendees
  has_many :events, through: :attendees

  validates :username, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :phone, uniqueness: true, allow_nil: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
