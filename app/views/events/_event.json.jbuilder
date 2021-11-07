json.(event, :id, :title, :start_time, :end_time, :description, :all_day)
json.invites(event.invites) do |invite|
  json.partial! "invites/invite.json.jbuilder", invite: invite
end