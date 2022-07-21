class ManagersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :destroy]

    def create
        manager = Manager.create!(manager_sign_up_params)
        sessions[:user_id] = manager.id
        render json: manager, status: :created
    end

    private

    def manager_sign_up_params
        params.permit(:id, :full_name, :email, :password)
    end

end
