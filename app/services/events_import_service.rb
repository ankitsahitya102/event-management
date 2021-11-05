class EventsImportService
  def self.process! events
    new(events).process
  end

  def initialize events
    @events = events
  end

  def process
    parsed_events = []
    @events.each do |event|
      event["start_time"] = DateTime.parse(event["start_time"])
      event["end_time"] = DateTime.parse(event["end_time"])
      event["attendees_attributes"] = format_attendees_attributes(event["attendees_attributes"])
      parsed_events << event if Event.new(event).valid?
    end

    Event.create(parsed_events)
  end

  private

  def format_attendees_attributes attendees_data
    unless attendees_data.present?
      return []
    end
    
    attendees = attendees_data.split(';')
    attendees.map {|attendee| { user_id: User.find_by(username: attendee.split('#').first).id, rsvp_status: attendee.split('#').last } }
  end

end