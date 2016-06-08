require 'csv'

CSV.foreach(Rails.root.join('lib', 'seeds', 'businesses.csv')) do |row|
  next if row[0] == "business_id"

  Business.create!(name: row[1], address: row[2])
end
