class PropertiesController < ApplicationController
    skip_before_action :authorize

    def index
        if params[:user_id]
            user = User.find(params[:user_id])
            render json: user.properties.order(:name)
        end
    end

    def show
        property = Property.find(params[:id])
        render json: property
    end

    def create
        if params[:user_id]
            user = User.find(params[:user_id])
            property = user.properties.create!(create_property_params)
            render json: property, status: :created
        end
    end

    def update
        property = Property.find(params[:id])
        property.update!(update_property_params)
        render json: property, status: :accepted
    end

    def destroy
        property = Property.find(params[:id])
        property.destroy
        head :no_content
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
