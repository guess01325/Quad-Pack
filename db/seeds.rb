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


    @otis = User.create!(username: "guess01325", firstname: "Otis", lastname: "Guess", email: "guess01@gmail.com", organization: "Greenbay", password: "123456")

@event1 = Event.create!(date: "Dec 12", venue: "Gilletts", city: "Foxboro", user: @otis )
@event2 = Event.create!(date: "Dec 5", venue: "Texas stadium", city: "Irving", user: @otis )
@event3 = Event.create!(date: "Dec 25", venue: "Lambeau", city: "Green bay", user: @otis )
@event4 = Event.create!(date: "Jan 05", venue: "Soldier field", city: "Chicago", user: @otis )

@luggages1 = Luggage.create(name: "Apple sauce", amount: 15, user: @otis, event: @event1)
@luggages2 = Luggage.create(name: "Energy drink", amount: 20, user: @otis, event: @event1)


puts "#{User.count} users created!"
puts "#{Event.count} events created!"
puts "#{Luggage.count} luggage created!"
