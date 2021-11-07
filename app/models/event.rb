class Event < ApplicationRecord
  has_many :invites
  has_many :users, through: :invites
  
  validates :title, :start_time, :end_time, presence: true
  validate :check_end_time

  before_validation :set_default

  accepts_nested_attributes_for :invites

  scope :overlapping, -> (start_date, end_date) {
    where("start_time < ? AND ? < end_time", end_date.end_of_day, start_date.beginning_of_day)
  }

  private

  def set_default
    if all_day?
      self.start_time = self.start_time.beginning_of_day
      self.end_time = self.end_time.end_of_day
    end
  end

  def check_end_time
    if end_time && start_time && end_time <= start_time
      errors.add(:end_time, "can't be before the start_time")
    end
  end
end
