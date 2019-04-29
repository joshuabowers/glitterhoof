json.id @chronicle.id.to_s
json.dynasty @chronicle.dynasty
json.startedIn @chronicle.started_in
json.endedIn @chronicle.ended_in
json.events @chronicle.events do |event|
  json.id event.id.to_s
  json.(event, :year, :text, :category)
end
json.eventCount @chronicle.events.unscoped.length
