class Track < ActiveRecord::Base
  belongs_to :user, primary_key: :id, foreign_key: :uploader_id

  has_many :playlist_tracks

  has_many :playlists, through: :playlist_tracks

end
