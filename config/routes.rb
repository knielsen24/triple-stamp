Rails.application.routes.draw do

  resources :items
    resources :users do
        resources :properties
    end

    resources :properties do
        resources :units
    end

    resources :units do
        resources :inspections
    end

    resources :inspections do
        resources :items
    end



# SESSION #
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

# USER #
    post "/users", to: "users#create"
    get "/me", to: "users#show"
    # get "/currentuser", to: "users#show"
    patch "/users/:id", to: "users#update"
    delete "/users/:id", to: "users#destroy"

# PROPERTY #
    get "/users/:user_id/properties", to: "properties#index"
    get "/property/:id", to: "properties#show"
    post "/users/:user_id/properties", to: "properties#create"
    patch "/properties/:id", to: "properties#update"
    delete "/properties/:id", to: "properties#destroy"


# UNIT #
    get "/properties/:property_id/units", to: "units#index"
    post "/properties/:property_id/units", to: "units#create"
    patch "/units/:id", to: "units#update"
    delete "/units/:id", to: "units#destroy"

# INSPECTION #
    get "/units/:unit_id/inspections", to: "inspections#index"
    get "/properties/:property_id/inspections", to: "inspections#index"
    post "/units/:unit_id/inspections", to: "inspections#create"
    post "/properties/:property_id/inspections", to: "inspections#create"
    patch "/inspections/:id", to: "inspections#update"
    delete "/inspections/:id", to: "inspections#destroy"

# ITEM #
    get "/inspections/:inspection_id/items", to: "items#index"
    post "/inspections/:inspection_id/items", to: "items#create"
    patch "/items/:id", to: "items#update"
    patch "/items/:id", to: "items#destroy"

# Leave this here to help deploy your app later!
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
