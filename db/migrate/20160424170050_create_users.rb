class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_disgest, null: false
      t.string :session_token, null: false
      t.string :email
      t.string :picture, default: "http://res.cloudinary.com/davidnoah/image/upload/v1461518475/batman_default_pq4bvl.jpg"

      t.timestamps null: false
    end

    add_index :users, :username
    add_index :users, :email
  end
end
