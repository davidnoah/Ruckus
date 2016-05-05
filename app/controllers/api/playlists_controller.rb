class Api::PlaylistsController < ApplicationController
  def new
    @playlist = Playlist.new
  end

  def create
    @playlist = Playlist.new(track_params)

    if @playlist.save!
      render :show
    else
      render :errors
    end
  end

  def show
    @palylist = Playlist.find(params[:id])
  end

  def index
    @playlists = Playlist.all
  end

  def update
    @playlist = Playlist.find(params[:id])

    if @playlist.update_attributes(playlist_params)
      render :show
    else
      render :errors
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render :new
  end

  private
  def playlist_params
    params.require(:playlist).permit(:title, :creator_id)
  end
end
