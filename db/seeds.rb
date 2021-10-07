# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Luggage.destroy_all
Event.destroy_all 
User.destroy_all


@otis = User.create!(username: "guess01325", firstname: "otis", lastname: "guess", email: "guess01@gmail.com", organization: "greenbay", password: "gue134859")

@event1 = Event.create!(date: "dec 12", venue: "gilletts", city: "foxboro", user: @otis )
@event2 = Event.create!(date: "dec 5", venue: "texas stadium", city: "irving texas", user: @otis )
@event3 = Event.create!(date: "dec 25", venue: "lambeau", city: "green bay", user: @otis )
@event4 = Event.create!(date: "jan 05", venue: "soldier field", city: "chicago", user: @otis )

@luggages1 = Luggage.create(name: "apple sauce", amount: 15, user: @otis, event: @event1)
@luggages2 = Luggage.create(name: "energy drink", amount: 20, user: @otis, event: @event1)

puts "#{User.count} users created!"
puts "#{Event.count} events created!"
puts "#{Luggage.count} luggage created "