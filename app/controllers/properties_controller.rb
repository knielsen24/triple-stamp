class PropertiesController < ApplicationController
    skip_before_action :authorize, except: :index


    def create
        property = Property.create!(property_params)
        render json: property, status: :created
    end

    def destroy
        property = Property.find(params[:id])
        property.delete
        head  :no_content
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
