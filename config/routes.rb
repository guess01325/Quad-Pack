Rails.application.routes.draw do
  # post '/users', to: 'users#create'
  resources :users, only: :create
  resources :luggages
  resources :events
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end