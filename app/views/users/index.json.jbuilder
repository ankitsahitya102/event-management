json.users(@users) do |user|
  json.partial! "users/user.json.jbuilder", user: user
end