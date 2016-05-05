class PlaylistTrack < ActiveRecord::Base
  belongs_to :track, primary_key: :id, foreign_key: :track_id

  belongs_to :playlist, primary_key: :id, foreign_key: :playlist_id

end
