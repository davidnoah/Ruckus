class Api::TracksController < ApplicationController
  def new
    @track = Track.new
  end

  def create
    debugger
    @track = Track.new(track_params)

    if @track.save!
      render :show
    else
      render :errors
    end
  end

  def show
    @track = Track.find(params[:id])
  end

  def index
    @tracks = Track.all
  end

  def update
    @track = Track.find(params[:id])

    if @track.update_attributes(track_params)
      render :show
    else
      render :errors
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render :new
  end

  private
  def track_params
    params.require(:track).permit(:title, :audio_url, :image_url, :audio_url)
  end
end
