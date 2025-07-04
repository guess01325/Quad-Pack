Rails.application.routes.draw do

   get '/ping', to: proc { [200, {}, ['pong']] }

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users, only: :create
  resources :events do
    resources :luggages, shallow: true
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
