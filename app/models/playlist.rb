class Playlist < ActiveRecord::Base

  belongs_to :user, primary_key: :id, foreign_key: :creator_id

  has_many :playlist_tracks

  has_many :tracks, through: :playlist_tracks

end
