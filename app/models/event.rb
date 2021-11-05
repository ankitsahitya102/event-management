class Event < ApplicationRecord
  validates :title, :start_time, :end_time, presence: true
  validate :check_end_time

  private

  def check_end_time
    if end_time && start_time && end_time <= start_time
      errors.add(:end_time, "can't be before the start_time")
    end
  end
end
