class EventsImportWorker
  include Sidekiq::Worker

  def perform(events)
    EventsImportService.process!(events)
  end
end
