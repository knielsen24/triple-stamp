puts "🌱 double stamping..."
# :name, :address, :city, :state, :postal_code, :country, :image, :units

# User.create(
#     full_name: "Kevin",
#     account_name: "mrmai2000",
#     email: "knielsen24@gmail.com",
#     password_digest: "1234",
#     profile_img: "",
# )

10.times do
    full_name = Faker::Name.first_name
    account_name = Faker::Name.last_name
    email = Faker::Internet.email
    password = Faker::Internet.password
    image = Faker::Avatar.image

    User.create(
        full_name: full_name,
        account_name: account_name,
        email: email,
        password_digest: password,
        image: image,
    )
end

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
        units: units,
        image: image,
        user_id: user_id,
    )
end

puts "🌱 triple stamping..."
puts "✅✅✅ You can't triple stamp a double stamp! Lloyd! Lloyd! Lloyd!"
