class UsersController < ApplicationController

  def index
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      render :json => { :msg => "User creation was successful.." }
    else
      render :json => { :msg => "User creation failed.." }
    end
  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

end
