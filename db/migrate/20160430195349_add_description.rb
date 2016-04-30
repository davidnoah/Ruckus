class AddDescription < ActiveRecord::Migration
  def change
    add_column :tracks, :description, :string
  end
end
