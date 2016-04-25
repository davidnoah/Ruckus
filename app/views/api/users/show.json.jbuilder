if logged_in?
  json.extract! @user, :id, :username, :email, :password_digest, :picture, :description
else
  json.array! (@user.errors.full_messages) do |message|
    json.message message
  end
end
