class ChangeDefaultImage < ActiveRecord::Migration
  def change
    remove_column :tracks, :image_url
    add_column :tracks, :image_url, :string, default: "http://res.cloudinary.com/davidnoah/image/upload/c_scale,w_150/v1461518868/cassette_default_qem6y3.png"
  end
end
