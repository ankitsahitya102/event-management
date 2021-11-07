class Invite < ApplicationRecord
  enum rsvp_status: %i[yes no maybe]

  belongs_to :user
  belongs_to :event

  validates :user_id, presence: true
  validates :user_id, uniqueness: { scope: :event_id }

  before_validation :set_default
  before_save :update_overlapping_events_rsvp

  scope :overlapping, -> (start_time, end_time) {
    joins(:event).where("events.start_time < ? AND ? < events.end_time", end_time, start_time)
  }

  private

  def set_default
    rsvp_status = 'yes' unless rsvp_status.present?
  end

  def update_overlapping_events_rsvp
    if rsvp_status == 'yes'
      invites = user.invites.overlapping(event.start_time, event.end_time).yes
      invites.update_all(rsvp_status: :no)
    end
  end 

end
