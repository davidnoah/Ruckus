class Api::SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
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

end
