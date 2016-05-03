# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Track.create!(title: "Thievery Corperation - Exile",
              audio_url: "https://s3-us-west-1.amazonaws.com/ruckus-music/Exilio+-+Thievery+Corporation.mp3",
              image_url: "http://res.cloudinary.com/davidnoah/image/upload/c_scale,w_230/v1461730612/the-richest-man-in-babylon-5296d2c4b3c51_pyj7je.jpg",
              uploader_id: 1,
              num_played: 0,
              playing: false)

Track.create!(
              title: "BoomBox - Midnight on the Run",
              audio_url: "https://s3-us-west-1.amazonaws.com/ruckus-music/Midnight+On+The+Run.mp3",
              image_url: "http://res.cloudinary.com/davidnoah/image/upload/c_scale,w_180/v1461731209/boombox_s348mv.jpg",
              uploader_id: 2,
              num_played: 0,
              playing: false
              )

  Track.create!(
                title: "Punch Brothers - Julep",
                image_url: "http://res.cloudinary.com/davidnoah/image/upload/c_scale,w_220/v1461731412/10440244_10152947525233729_6534460003081292977_n.png_xatvjc.jpg",
                audio_url: "https://s3-us-west-1.amazonaws.com/ruckus-music/Punch+Brothers+-+Julep.mp3",
                uploader_id: 3,
                num_played: 0,
                playing: false
                )

  Track.create!(
                title: "Emancipator - First Snow",
                image_url: "http://res.cloudinary.com/davidnoah/image/upload/c_scale,w_250/v1461732074/soon_it_will_be_cold_fwr3km.jpg",
                audio_url: "https://s3-us-west-1.amazonaws.com/ruckus-music/Emancipator+-+First+Snow.mp3",
                uploader_id: 4,
                num_played: 0,
                playing: false
                )
  User.create!(
                username: "davidnoah",
                password: "password",
                email: "david.t.noah@gmail.com"
  )
