class SessionsController < ApplicationController

    def create
        user = Manager.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def destroy
        @current_user = nil
        session.delete :user_id
        head :no_content
    end
    
end
