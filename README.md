Tables used: users, events, invites<br />
Used sidekiq for parallel async processing of jobs<br />
Used SmarterCSV gem to load large csv as chunks of rows in memory<br />
<br />
For seeding data from csv first the file is loaded in small chunks of rows then a async job is created for each chunk. Sidekiq run those jobs.

# Setup: 
 ## Clone git repo
  use command 
  ```
  git clone https://github.com/ankitsahitya102/event-management.git
  ```
 ## Setup Credentials file
 open credentials edit
 ```
 EDITOR=vim rails credentials:edit
 ```
 view credentials.yml.sample file for sample credentials
 ## Setup database.yml file
 create config/database.yml<br />
 view database.yml.sample file for sample credentials

 ## Install gems
 ```
 bundle install
 ```

 ## Setup database
 ```
 rails db:create
 rails db:migrate
 ```

 ## start sidekiq
 ```
 bundle exec sidekiq
 ```

  ## run seeds
 ```
  rake seed:import_users_data_via_csv
  rake seed:import_events_data_via_csv
 ```
 ## Install packages
 ```
 yarn install
 ```

  ## setup cronjob
  ```
  whenever --update-crontab
  ```
  used whenever to schedule a job that mark all completed events every hour

  ## run server
  ```
  rails s
  ```
  open ```http://localhost:3000```
  created ui in React.js

