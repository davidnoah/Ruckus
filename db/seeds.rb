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
                uploader_id: 1,
                num_played: 0,
                playing: false
                )
Track.create!(
              title: "Bob Moses - Tearing me up",
              image_url: "http://res.cloudinary.com/davidnoah/image/upload/v1462236526/Bob-Moses-tearing_me_up_xbctoq.jpg",
              audio_url: "https://s3-us-west-1.amazonaws.com/ruckus-music/Bob+Moses+-+Tearing+me+up.mp3",
              uploader_id: 4,
              num_played: 0,
              playing: false
              )
Track.create!(
              title: "Incubus - Hilikus",
              image_url: "http://res.cloudinary.com/davidnoah/image/upload/v1462236493/Incubus_-_Hilikus_s7xd0e.jpg",
              audio_url: "https://s3-us-west-1.amazonaws.com/ruckus-music/INCUBUS+-+Hilikus.mp3",
              uploader_id: 4,
              num_played: 0,
              playing: false
              )
Track.create!(
              title: "A Tribe Called Quest - Luck of Lucien",
              image_url: "http://res.cloudinary.com/davidnoah/image/upload/v1462236489/A_Tribe_Called_Quest_-_Luck_of_Lucien_wm998s.jpg",
              audio_url: "https://s3-us-west-1.amazonaws.com/ruckus-music/Luck+of+Lucien+by.+A+Tribe+Called+Quest.mp3",
              uploader_id: 4,
              num_played: 0,
              playing: false
              )
Track.create!(
              title: "Shook - Hold Tight",
              image_url: "http://res.cloudinary.com/davidnoah/image/upload/v1462236523/Hold-Tight_Album_kpemzz.jpg",
              audio_url: "https://s3-us-west-1.amazonaws.com/ruckus-music/Shook+-+Hold+Tight.mp3",
              uploader_id: 1,
              num_played: 0,
              playing: false
              )
Track.create!(
              title: "Vulfpeck - It Gets Funkier II",
              image_url: "http://res.cloudinary.com/davidnoah/image/upload/v1462236497/Vulfpeck_-_It_Gets_Funkier_II_oadg4a.png",
              audio_url: "https://s3-us-west-1.amazonaws.com/ruckus-music/VULFPECK+---+It+Gets+Funkier+II.mp3",
              uploader_id: 4,
              num_played: 0,
              playing: false
              )
Track.create!(
              title: "Santana - Black Magic Woman",
              image_url: "http://res.cloudinary.com/davidnoah/image/upload/v1462236501/Santana_qmu4fy.jpg",
              audio_url: "https://s3-us-west-1.amazonaws.com/ruckus-music/santana-+black+magic+woman.mp3",
              uploader_id: 4,
              num_played: 0,
              playing: false
              )
Track.create!(
              title: "Leon Bridges - Twistin' and Groovin'",
              image_url: "http://res.cloudinary.com/davidnoah/image/upload/v1462238067/LEON_BRIDGES_dffzcf.jpg",
              audio_url: "https://s3-us-west-1.amazonaws.com/ruckus-music/Leon+Bridges+-+Twistin%27+%26+Groovin%27+-+Coming+Home.mp3",
              uploader_id: 1,
              num_played: 0,
              playing: false
              )
Track.create!(
              title: "Turkuaz - Zynth",
              image_url: "http://res.cloudinary.com/davidnoah/image/upload/v1462238482/turkuaz-digitonium_wrctk7.jpg",
              audio_url: "https://s3-us-west-1.amazonaws.com/ruckus-music/Zynth.mp3",
              uploader_id: 4,
              num_played: 0,
              playing: false
              )
  Track.create!(
                title: "123 - The Motet",
                image_url: "http://res.cloudinary.com/davidnoah/image/upload/v1462240349/The_Motet-Dig_Deep_b_mj4ass.jpg",
                audio_url: "https://s3-us-west-1.amazonaws.com/ruckus-music/%27123%27+-+Track+2+from+the+album+The+Motet.mp3",
                uploader_id: 4,
                num_played: 0,
                playing: false
                )
Track.create!(
              title: "One Self - Bluebird",
              image_url: "http://res.cloudinary.com/davidnoah/image/upload/v1462241108/bluebird-main_eowqfe.jpg",
              audio_url: "https://s3-us-west-1.amazonaws.com/ruckus-music/One+Self+-+Bluebird.mp3",
              uploader_id: 1,
              num_played: 0,
              playing: false
              )
Track.create!(
              title: "James Brown - The Boss",
              image_url: "http://res.cloudinary.com/davidnoah/image/upload/v1462241295/The_Boss_album_artwork_c4jov5.jpg",
              audio_url: "https://s3-us-west-1.amazonaws.com/ruckus-music/James+Brown+-+The+Boss.mp3",
              uploader_id: 4,
              num_played: 0,
              playing: false
              )
Track.create!(
              title: "Billy Stewart - Summertime",
              image_url: "http://res.cloudinary.com/davidnoah/image/upload/v1462241435/billy-stewart-summertime_qe9xut.jpg",
              audio_url: "https://s3-us-west-1.amazonaws.com/ruckus-music/Billy+Stewart+-+Summertime.mp3",
              uploader_id: 4,
              num_played: 0,
              playing: false
              )


User.create!(
              username: "DavidNoah",
              password: "password",
              email: "david.t.noah@gmail.com",
              picture: "http://res.cloudinary.com/davidnoah/image/upload/v1462317980/11112216_10155701957995483_491753383287939197_n_kwmx1u.jpg",
              description: "feelin' funky"
)
