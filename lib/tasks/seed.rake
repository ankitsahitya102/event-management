require 'csv'

namespace :seed do
  desc 'Import csv data'
  task import_users_data_via_csv: :environment do
    SmarterCSV.process(Rails.application.credentials[:USERS_CSV_FILE_PATH], { chunk_size: 10 }) do |chunk|
      UsersImportWorker.perform_async(chunk)
    end
  end

  task import_events_data_via_csv: :environment do
    key_mapping = { 
      starttime: :start_time,
      endtime: :end_time,
      allday: :all_day,
      "users#rsvp": :attendees_attributes
    }

    SmarterCSV.process(Rails.application.credentials[:EVENTS_CSV_FILE_PATH], { chunk_size: 10, key_mapping: key_mapping }) do |chunk|
      EventsImportWorker.perform_async(chunk)
    end
  end
end