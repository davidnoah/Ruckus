class CreatePlaylistTracks < ActiveRecord::Migration
  def change
    create_table :playlist_tracks do |t|
      t.integer :track_id, null: false
      t.integer :playlist_id, null: false
    end

    add_index :playlist_tracks, :track_id
    add_index :playlist_tracks, :playlist_id
  end
end
