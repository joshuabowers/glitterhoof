json.(@chronicle, :dynasty, :started_in)
json.events @chronicle.events do |event|
  json.id event.id.to_s
  json.(event, :year, :text, :category)
end
