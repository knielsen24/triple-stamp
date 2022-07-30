class UnitsController < ApplicationController
    skip_before_action :authorize

    def index
        if params[:property_id]
            property = Property.find(params[:property_id])
            units = property.units
            render json: units
        end
    end

    def create
        if params[:property_id]
            property = Property.find(params[:property_id])
            unit = property.units.create!(unit_params)
            render json: unit, status: :created
        end
    end

    def update
        unit = Unit.find(params[:id])
        unit.update!(unit_params)
        render json: unit, status: :accepted
    end

    def destroy
        unit = Unit.find(params[:id])
        unit.destroy
        head :no_content
    end

    private

    def unit_params
        params.permit(:number, :label, :square_feet, :property_id)
    end
end
