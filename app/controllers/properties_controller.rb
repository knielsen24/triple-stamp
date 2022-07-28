class PropertiesController < ApplicationController
    skip_before_action :authorize, except: :index


    def create
        property = Property.create!(create_property_params)
        render json: property, status: :created
    end

    def update
        property = Property.find(params[:id])
        property.update!(update_property_params)
        render json: property, status: :accepted
    end

    def destroy
        property = Property.find(params[:id])
        property.destroy
        head  :no_content
    end

    def units_index
        property = Property.find(params[:id])
        render json: property.units
    end

    private

    def create_property_params
        params.permit(
            :name,
            :address,
            :city,
            :state,
            :postal_code,
            :country,
            :image,
            :user_id
        )
    end

    def update_property_params
        params.permit(
            :id,
            :name,
            :address,
            :city,
            :state,
            :postal_code,
            :country,
            :image,
            :user_id
        )
    end

end
