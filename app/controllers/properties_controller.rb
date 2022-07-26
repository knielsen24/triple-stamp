class PropertiesController < ApplicationController
    skip_before_action :authorize, except: :index


    def create
        property = Property.create!(property_params)
        render json: @current_user.properties, status: :created
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
