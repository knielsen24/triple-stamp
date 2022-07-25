class PropertiesController < ApplicationController
    skip_before_action :authorize, except: :index

    def index
        render json:@current_user.properties
    end

    def create
        property = Property.create!(property_params)
        render json: property, status: :created
    end

    private

    def property_params
        params.permit(
            :id,
            :name,
            :address,
            :city,
            :state,
            :postal_code,
            :country,
            :image,
            :units,
            :user_id ,)
    end

end
