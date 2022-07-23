class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :destroy]

    def create
        user = User.create!(user_sign_up_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private

    def user_sign_up_params
        params.permit(:id, :full_name, :email, :password, :account_name)
    end
end