namespace :event do
  desc 'Mark complete status true for past events'
  task complete_past_events: :environment do
    Event.where("end_time < ?", DateTime.now).update_all(completed: true)
  end
end