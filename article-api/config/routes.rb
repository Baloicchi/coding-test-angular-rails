Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :user, :article
  get '/auth/user', to: 'application#authorize_request'
  post '/auth/login', to: 'user_auth#login'

  get '/users', to: 'user#index'
  post '/users', to: 'user#create'
  get '/users/:id', to: 'user#show'

  get '/articles', to: 'article#index'
  post '/articles', to: 'article#create'
  get '/users/:id', to: 'article#show'
end
