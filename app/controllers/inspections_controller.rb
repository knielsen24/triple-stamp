class InspectionsController < ApplicationController
    # skip_before_action :authorize, except: :units_index

    def index
        if params[:property_id]
            property = Property.find(params[:property_id])
            render json: property.inspections
        elsif params[:unit_id]
            unit = Unit.find(params[:unit_id])
            render json: unit.inspections
        end
    end

end
