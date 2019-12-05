Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :user, :article
  get '/auth/user', to: 'application#authorize_request'
  post '/auth/login', to: 'user_auth#login'

  get '/users', to: 'user#index'
  post '/users', to: 'user#create'
  get '/users/:id', to: 'user#show'
  post '/user_search', to: 'user#find_user_by_email'

  get '/articles', to: 'article#index'
  post '/articles', to: 'article#create'
  get '/articles/:id', to: 'article#show'
  put '/articles/:id', to: 'article#update'
  delete '/articles/:id', to: 'article#destroy'
end
