json.array! @chronicles do |chronicle|
  json.id chronicle.id.to_s
  json.dynasty chronicle.dynasty
  json.startedIn chronicle.started_in
  json.endedIn chronicle.ended_in
end
