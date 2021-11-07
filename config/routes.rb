Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'

  root 'home#dashboard_redirect'
  get '/dashboard/*path', to: 'home#index'
  get '/dashboard', to: 'home#index'

  resources :events, only: %i[create, index]
  resources :invites, only: %i[update]
  resources :users, only: %i[index]
  get 'users/:id/available_slots' => 'users#available_slots'
end
