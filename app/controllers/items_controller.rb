class ItemsController < ApplicationController
    skip_before_action :authorize

    def index
        if params[:inspection_id]
            inspection = Inspection.find(params[:inspection_id])
            render json: inspection.items.order(:category)
        # elsif params[:unit_id]
        #     unit = Unit.find(params[:unit_id])
        #     render json: unit.inspections.order(:scheduled_date).reverse_order
        end
    end
end
