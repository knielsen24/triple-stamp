Rails.application.routes.draw do

  resources :units
    resources :properties
    resources :users

    # SESSION #
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    # USER #
    post "/signup", to: "users#create"
    get "/currentuser", to: "users#show"
    patch "/currentuser", to: "users#update"
    delete "/users/:id", to: "users#destroy"
    get "/currentuser/properties", to: "users#properties_index"

    # PROPERTY #
    # get "/properties/:id", to: "properties#show"
    post "/users/:id/properties", to: "properties#create"
    patch "/properties/:id", to: "properties#update"
    delete "/properties/:id", to: "properties#destroy"

    # Leave this here to help deploy your app later!
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
