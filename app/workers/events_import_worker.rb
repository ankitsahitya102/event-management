class EventsImportWorker
  include Sidekiq::Worker

  def perform(events)
    events_import_service = EventsImportService.new(events)
    events_import_service.process
  end
end
