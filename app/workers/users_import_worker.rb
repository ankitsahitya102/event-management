class UsersImportWorker
  include Sidekiq::Worker

  def perform(users)
    User.create(users)
  end
end
