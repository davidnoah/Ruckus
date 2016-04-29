class Api::UploadsController < ApplicationController
  def upload
    render json: Upload.presign(params[:prefix], params[:filename], limit: 15.megabyte)
  end

end
