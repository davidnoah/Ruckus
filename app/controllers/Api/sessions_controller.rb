class Api::SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )

    if @user.nil?
      flash.now[:errors] = ['Invalid Username and/or Password']
      render :new
    else
      login_user!(@user)
      render :show
    end

  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
    logout_user!
    render :new
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
