puts "🌱 double stamping..."
# 10.times do
#     full_name = Faker::Name.first_name
#     account_name = Faker::Name.last_name
#     email = Faker::Internet.email
#     password = Faker::Internet.password
#     image = Faker::Avatar.image

#     User.create(
#         full_name: full_name,
#         account_name: account_name,
#         email: email,
#         password_digest: password,
#         image: image,
#     )
# end

10.times do
    name = Faker::Address.community
    address = Faker::Address.street_address
    city = Faker::Address.city
    state = Faker::Address.state
    postal_code = Faker::Address.postcode
    country = Faker::Address.country
    units = rand(1..50)
    image = Faker::LoremFlickr.image(search_terms: ['business'])
    user_id = 1

    Property.create(
        name: name,
        address: address,
        city: city,
        state: state,
        postal_code: postal_code,
        country: country,
        image: image,
        user_id: user_id,
    )
end

labelsArray = ["office 1", "office 2", "office 3", "restaurante 1", "restaurante 2", "restaurante 3", "apartment 1", "apartment 2", "apartment 3"]

Property.all.each do |property|
    10.times do
        id = property.id
        number = rand(1..100)
        label = labelsArray.sample
        square_feet = rand(200..5000)

        Unit.create(
            property_id: id,
            number: number,
            label: label,
            square_feet: square_feet,
        )
    end
end

typeArrays = ["move-in", "move-out", "annual", "semiannual", "quarterly", "monthly"]
statusArray = ["upcoming", "completed", "in progress"]

Unit.all.each do |unit|
    5.times do
        # title = unit.number + " " + unit.label,
        title = "#{unit.number} #{unit.label}"
        type_name = typeArrays.sample
        scheduled_date = Date.today
        status = statusArray.sample
        unit_id = unit.id

        Inspection.create(
            title: title,
            type_name: type_name,
            scheduled_date: scheduled_date,
            status: status,
            unit_id: unit_id
        )
    end
end


puts "🌱 triple stamping..."
puts "✅✅✅ You can't triple stamp a double stamp! Lloyd! Lloyd! Lloyd!"
