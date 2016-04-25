class Changecolumn < ActiveRecord::Migration
  def change
    remove_column :users, :password_disgest
    add_column :users, :password_digest, :string, null: false
  end
end
