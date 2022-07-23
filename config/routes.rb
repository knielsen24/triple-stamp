Rails.application.routes.draw do

  resources :users

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  patch "/users/:id", to: "users#update"
  delete "/users/:id", to: "users#destroy"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }




end
