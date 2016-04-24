class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :image_url, null: false, default: "http://res.cloudinary.com/davidnoah/image/upload/v1461518868/cassette_default_qem6y3.png"
      t.string :audio_url, null: false
      t.integer :uploader_id, null: false
      t.integer :num_played, null: false, default: 0
      t.boolean :playing, null: false, default: false

      t.timestamps null: false
    end

    add_index :tracks, :uploader_id
    add_index :tracks, :audio_url
  end
end
