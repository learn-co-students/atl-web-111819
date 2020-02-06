class SessionsController < ApplicationController

  def create
    @user = User.find_by(username: login_params[:username])

    if @user && @user.authenticate(login_params[:password])
      token = JWT.encode({user_id: @user.id}, ENV['SECRET'])
      render :json => { :token => token }
    else
      render :json => { :msg => "Login failed.." }
    end
  end

  private
  def login_params
    params.require(:user).permit(:username,:password)
  end

end
