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
        property.delete
        head  :no_content
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
