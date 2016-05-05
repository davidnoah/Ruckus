json.array!(@playlist_tracks) do |playlist_track|
  json.extract! playlist_track, :id, :title, :audio_url, :image_url, :num_played, :uploader_id
end
