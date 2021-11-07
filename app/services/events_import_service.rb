class EventsImportService < ApplicationService

  def process
    parsed_events = []
    @params.each do |event|
      event["start_time"] = DateTime.parse(event["start_time"])
      event["end_time"] = DateTime.parse(event["end_time"])
      event["invites_attributes"] = format_invites_attributes(event["invites_attributes"])
      parsed_events << event if Event.new(event).valid?
    end

    Event.create(parsed_events)
  end

  private

  def format_invites_attributes invites_data
    unless invites_data.present?
      return []
    end
    
    invites = invites_data.split(';')
    invites.map {|invite| { user_id: User.find_by(username: invite.split('#').first).id, rsvp_status: invite.split('#').last } }
  end

end