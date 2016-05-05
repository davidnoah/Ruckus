class Api::PlaylistTracksController < ApplicationController
  def index
    @playlist_tracks = Playlist.find(params[:id]).tracks
  end

  def create
    @playlist_track = PlaylistTrack.new({track_id: playlist_track_params[:track_id], playlist_id: playlist_track_params[:playlist_id]})
    if @playlist_track.save
      render json: @playlist_track
    else
      render json: {errors: @playlist_track.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    @playlist_track = PlaylistTrack.find(params[:id])
    @playlist_track.destroy
    render json: @playlist_track
  end

  private
  def playlist_track_params
    params.require(:playlist_track).permit(:track_id, :playlist_id)
  end
end
