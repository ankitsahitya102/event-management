class Attendee < ApplicationRecord
  enum rsvp_status: %i[yes no maybe]

  belongs_to :user
  belongs_to :event

  validates :user_id, presence: true
  validates :user_id, uniqueness: { scope: :event_id }
end
