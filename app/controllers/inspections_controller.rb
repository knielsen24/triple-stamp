class InspectionsController < ApplicationController
    skip_before_action :authorize

    def index
        if params[:property_id]
            property = Property.find(params[:property_id])
            render json: property.inspections
        elsif params[:unit_id]
            unit = Unit.find(params[:unit_id])
            render json: unit.inspections
        end
    end

    def update
        inspection = Inspection.find(params[:id])
        inspection.update!(inspection_params)
        render json: inspection, status: :accepted
    end

    def destroy
        inspection = Inspection.find(params[:id])
        inspection.destroy
        head :no_content
    end

    private

    def inspection_params
        params.permit(:title, :type_name, :status, :scheduled_date, :unit_id)
    end

end
