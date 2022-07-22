class ManagersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :destroy]

    def create
        manager = Manager.create!(manager_sign_up_params)
        session[:user_id] = manager.id
        render json: manager, status: :created
    end

    def show
        render json: @current_user
    end

    def destroy
        user = Manager.find(params[:id])
        user.destroy
        head :no_content
    end

    private

    def manager_sign_up_params
        params.permit(:id, :full_name, :email, :password, :account_name)
    end

end
