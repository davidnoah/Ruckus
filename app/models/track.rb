class Track < ActiveRecord::Base

  belongs_to :user, primary_key: :id, foreign_key: :uploader_id


end
