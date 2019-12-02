Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :user
  post '/auth/login', to: 'user_auth#login'

  get '/users', to: 'user#index'
  post '/users', to: 'user#create'
  get '/users/:id', to: 'user#show'

  get '/*a', to: 'application#not_found'
end
