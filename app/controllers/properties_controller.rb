class PropertiesController < ApplicationController
    skip_before_action :authorize, except: :index

    def index
        # user = User.find_by(id: session[:user_id])
        # render json: user.properties
        render json: @current_user.properties.all
    end

    def create
        property = Property.create!(property_params)
        render json: property, status: :created
    end

    private

    def property_params
        params.permit(
            :name,
            :address,
            :city,
            :state,
            :postal_code,
            :country,
            :image,
            :units,
            :user_id
        )
    end

end
