json.events(@events) do |event|
  json.partial! "events/event.json.jbuilder", event: event, with_invites: false
end