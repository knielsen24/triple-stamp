class UnitsController < ApplicationController
    skip_before_action :authorize

    def create
        unit = Unit.create!(unit_params)
        render json: unit, status: :created
    end

    private

    def unit_params
        params.permit(:number, :label, :square_feet, :property_id)
    end
end
