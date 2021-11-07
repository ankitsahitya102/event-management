class EventsImportWorker
  include Sidekiq::Worker

  def perform(events)
    eventsImportService = EventsImportService.new(events)
    eventsImportService.process
  end
end
