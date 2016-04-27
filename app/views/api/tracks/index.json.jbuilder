json.array!(@tracks) do |track|
  json.extract! track, :id, :title, :audio_url, :image_url, :num_played
end
