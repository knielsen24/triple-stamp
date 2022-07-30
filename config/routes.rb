Rails.application.routes.draw do

    resources :users do
        resources :properties
    end

    resources :inspections
    resources :units
    resources :properties


# SESSION #
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

# USER #
    post "/users", to: "users#create"
    # get "/users/:id", to: "users#show"
    get "/currentuser", to: "users#show"
    patch "/users/:id", to: "users#update"
    delete "/users/:id", to: "users#destroy"

# PROPERTY #
    get "/users/:user_id/properties", to: "properties#index"
    post "/users/:user_id/properties", to: "properties#create"
    patch "/properties/:id", to: "properties#update"
    delete "/properties/:id", to: "properties#destroy"


# UNIT #
    get "/properties/:id/units", to: "properties#units_index"
    post "/properties/:id/units", to: "units#create"
    patch "/units/:id", to: "units#update"
    delete "/units/:id", to: "units#destroy"

# INSPECTION #
    get "/units/:id/inspections", to: "inspections#index"
    get "/properties/:property_id/inspections", to: "inspections#index"
    post "/units/:id/inspections", to: "inspections#create"
    patch "/inspections/:id", to: "inspections#update"
    delete "/inspections/:id", to: "inspections#destroy"

# Leave this here to help deploy your app later!
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
