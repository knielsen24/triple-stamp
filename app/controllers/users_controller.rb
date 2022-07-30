class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy, :propertyList]

    def create
        user = User.create!(user_sign_up_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # def show
    #     user = User.find(params[:id])
    #     render json: user
    # end

    def show
        render json: @current_user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    def update
        user = User.find(params[:id])
        user.update!(user_update_params)
        render json: user, status: :accepted
    end

    private

    def user_sign_up_params
        params.permit(:full_name, :email, :password, :account_name)
    end

    def user_update_params
        params.permit(:full_name, :phone, :business, :account_name, :image)
    end
end

# postman PATCH test successful with commented code
# user = User.find(params[:id])
        # user.update!(user_update_params)
        # render json: user, status: :accepted
