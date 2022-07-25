Rails.application.routes.draw do

    resources :properties
    resources :users

    # SESSION #
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    # USER #
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    patch "/users/:id", to: "users#update"
    delete "/users/:id", to: "users#destroy"

    # PROPERTY #
    get "users/:id/properties", to: "properties#index"
    get "/properties/:id", to: "properties#show"
    post "users/:id/properties", to: "properties#create"
    patch "/properties/:id", to: "properties#update"
    delete "/properties/:id", to: "properties#destroy"

    # Leave this here to help deploy your app later!
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
