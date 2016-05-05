json.array!(@playlists) do |playlist|
  json.extract! playlist, :id, :name, :creator_id
end
