# Schema Information

## tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
image_url   | string    | not_null
audio_url   | string    | not_null
uploader_id | integer   | not null, foreign key (references users), indexed
num_played  | integer   | not null, default: 0
playing     | boolean   | not null, default: false

## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
creator_id  | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## playlistings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | not null, foreign key (references tracks), indexed
playlist_id | integer   | not null, foreign key (references playlists), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null
picture         | string    | 
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
