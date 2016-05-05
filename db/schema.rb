# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160504162405) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "playlist_tracks", force: :cascade do |t|
    t.integer "track_id",    null: false
    t.integer "playlist_id", null: false
  end

  add_index "playlist_tracks", ["playlist_id"], name: "index_playlist_tracks_on_playlist_id", using: :btree
  add_index "playlist_tracks", ["track_id"], name: "index_playlist_tracks_on_track_id", using: :btree

  create_table "playlists", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "creator_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "playlists", ["creator_id"], name: "index_playlists_on_creator_id", using: :btree

  create_table "tracks", force: :cascade do |t|
    t.string   "title",                                                                                                                          null: false
    t.string   "audio_url",                                                                                                                      null: false
    t.integer  "uploader_id",                                                                                                                    null: false
    t.integer  "num_played",  default: 0,                                                                                                        null: false
    t.boolean  "playing",     default: false,                                                                                                    null: false
    t.datetime "created_at",                                                                                                                     null: false
    t.datetime "updated_at",                                                                                                                     null: false
    t.string   "description"
    t.string   "image_url",   default: "http://res.cloudinary.com/davidnoah/image/upload/c_scale,w_150/v1461518868/cassette_default_qem6y3.png"
  end

  add_index "tracks", ["audio_url"], name: "index_tracks_on_audio_url", using: :btree
  add_index "tracks", ["uploader_id"], name: "index_tracks_on_uploader_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                           null: false
    t.string   "session_token",                                                                                                      null: false
    t.string   "email"
    t.string   "picture",         default: "http://res.cloudinary.com/davidnoah/image/upload/v1461518475/batman_default_pq4bvl.jpg"
    t.datetime "created_at",                                                                                                         null: false
    t.datetime "updated_at",                                                                                                         null: false
    t.string   "description"
    t.string   "password_digest",                                                                                                    null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
