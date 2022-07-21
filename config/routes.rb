Rails.application.routes.draw do

  resources :managers

  post "/signup", to: "managers#create"
  get "/me", to: "managers#show"
  patch "/managers/:id", to: "managers#update"
  delete "/managers/:id", to: "managers#destroy"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }




end
