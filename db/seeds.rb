# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Track.create!(title: "Thievery Corperation - Exile",
              audio_url: "http://res.cloudinary.com/davidnoah/video/upload/v1461730751/Exilio_-_Thievery_Corporation_im2cic.mp3",
              image_url: "http://res.cloudinary.com/davidnoah/image/upload/c_scale,w_150/v1461730612/the-richest-man-in-babylon-5296d2c4b3c51_pyj7je.jpg",
              uploader_id: 1,
              num_played: 0,
              playing: false)

Track.create!(
              title: "BoomBox - Midnight on the Run",
              audio_url: "http://res.cloudinary.com/davidnoah/video/upload/v1461731216/Midnight_On_The_Run_ernebk.mp3",
              image_url: "http://res.cloudinary.com/davidnoah/image/upload/c_scale,w_150/v1461731209/boombox_s348mv.jpg",
              uploader_id: 2,
              num_played: 0,
              playing: false
              )

  Track.create!(
                title: "Punch Brothers - Julep",
                image_url: "http://res.cloudinary.com/davidnoah/image/upload/c_scale,w_150/v1461731412/10440244_10152947525233729_6534460003081292977_n.png_xatvjc.jpg",
                audio_url: "http://res.cloudinary.com/davidnoah/video/upload/v1461731429/Punch_Brothers_-_-_hln6cx.mp3s",
                uploader_id: 3,
                num_played: 0,
                playing: false
                )

  Track.create!(
                title: "Emancipator - First Snow",
                image_url: "http://res.cloudinary.com/davidnoah/image/upload/c_scale,w_150/v1461732074/soon_it_will_be_cold_fwr3km.jpg",
                audio_url: "http://res.cloudinary.com/davidnoah/video/upload/v1461731818/Emancipator_-_03_First_Snow_x1ckkq.mp3",
                uploader_id: 4,
                num_played: 0,
                playing: false
                )
