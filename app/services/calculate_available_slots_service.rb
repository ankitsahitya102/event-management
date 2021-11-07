class CalculateAvailableSlotsService
  def initialize(user, params)
    @user = user
    @start_date = Date.parse(params[:start_date])
    @end_date = Date.parse(params[:end_date])
  end

  def process
    available_slots = []
    slot_start_time = @start_date.beginning_of_day
    slot_end_time = @end_date.end_of_day

    while slot_start_time < slot_end_time
      unless @user.invites.overlapping(slot_start_time, slot_start_time + 2.hours).yes.present?
        available_slots << slot_start_time
      end
      slot_start_time = slot_start_time + 2.hours
    end

    available_slots
  end
end
