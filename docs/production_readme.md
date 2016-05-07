# Ruckus

[Ruckus Live][heroku]

[heroku]: http://www.ruckusmusic.herokuapp.com

Ruckus is a full-stack web-application inspired by SoundCloud. It boasts a thorough back-end built with Ruby on Rails and single-page rendering powered by React.js.

## Features & Implementation

1. Allows a user to stream single songs that persists through the entire website.
2. Ruckus maintains a direct connection to Amazon S3. This promotes quick uploads of audio/image files and      instantaneous playback via a public url. The uploads use a one time only "pre-signed url" to upload tracks securely to Amazon's cloud.
3. Once logged in, a user has access to all the tracks uploaded by other users, along with the ability to organize their own music within playlists.


### Single-Page App

Ruckus was built using React.js and is truly a single page app. React has the ability to surgically render various "components" during a state change as opposed to re-rendering an entire page. A good example is the persisted stream bar when a song is being played. Since that component is listening to the play store, it only renders when there is a song playing.

# Screenshots!

## Splash Page

![splash]

## Track Listing

![tracks]

## Profile Page

![profile]

## User Playlists

![playlists]

[splash]: ./screenshots/splash.png
[tracks]: ./screenshots/track_list.png
[profile]: ./screenshots/user_profile.png
[playlists]: ./screenshots/user_playlists.png

## Notable Code

In order to allow for instantaneous playback and to steer clear from using Cloudinary, I was able to implement integration with Amazon S3. This was an interesting process. When a user makes an upload request, the file name and path prefix travels to my Rails backend and is validated using the AWS SDK gem. This will then, on success, respond with a one-time use "pre-signed URL". Ruckus then uses the pre-signed URL to make an XMLHTTPRequest to Amazon to ultimately upload the file.

## Creates Pre-Signed URL

```ruby
class Upload < ActiveRecord::Base
  def self.presign(prefix, filename, limit: limit)
    extname = File.extname(filename)
    filename = "#{SecureRandom.uuid}#{extname}"
    upload_key = Pathname.new(prefix).join(filename).to_s

    creds = Aws::Credentials.new(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY'])
    s3 = Aws::S3::Resource.new(region: 'us-west-1', credentials: creds)
    obj = s3.bucket('ruckus-music').object(upload_key)

    params = { acl: 'public-read' }
    params[:content_length] = limit if limit

    {
      presigned_url: obj.presigned_url(:put, params),
      public_url: obj.public_url
    }
  end
end
```
## Direct Upload to Amazon S3

```javascript
uploadToS3: function(file, url) {
  var presignedUrl = url.presigned_url;
  var publicUrl = url.public_url;
  var filetype = file.type;

  var xhr = new XMLHttpRequest();

  xhr.open('PUT', presignedUrl, true);
  xhr.setRequestHeader("Content-Type", filetype);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (file.type.match(/^audio.*$/) !== null) {
        TrackActions.receivePublicAudioUrl(publicUrl);
      } else {
        TrackActions.receivePublicImageUrl(publicUrl);
      }
    }
  };
  xhr.send(file);
},
```
