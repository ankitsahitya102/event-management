json.(event, :id, :title, :start_time, :end_time, :description, :all_day, :completed)

if with_invites
  json.invites(event.invites) do |invite|
    json.partial! "invites/invite.json.jbuilder", invite: invite
  end
end