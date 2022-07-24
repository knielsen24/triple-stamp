puts "🌱 double stamping..."
# :name, :address, :city, :state, :postal_code, :country, :image, :units

200.times do
    Property.create(
        name: Faker::Address.community,
        address: Faker::Address.street_address,
        city: Faker::Address.city,
        postal_code: Faker::Address.postcode,
        country: Faker::Address.country,
        units: rand(1..50),
        image: Faker::LoremFlickr.image(search_terms: ['business']),
        user_id: rand(1..10),
    )
end

puts "🌱 triple stamping..."
puts "✅✅✅ You can't triple stamp a double stamp! Loyld!"
