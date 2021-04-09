# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Workout.destroy_all
User.destroy_all
UserWorkoutJoin.destroy_all
Food.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')


@dumbbells = Workout.create!(content: 'Walking: 3.5 mph (17 min/mi)
Walk on a path with no incline', category: 'Aerobic', calories: 133, time: 30)
@dumbbells = Workout.create!(content: 'Walking: 3.5 mph (17 min/mi)
Walk on a path with no incline', category: 'Aerobic', calories: 133, time: 30)
@dumbbells = Workout.create!(content: 'Walking: 3.5 mph (17 min/mi)
Walk on a path with no incline', category: 'Aerobic', calories: 133, time: 30)
@dumbbells = Workout.create!(content: 'Walking: 3.5 mph (17 min/mi)
Walk on a path with no incline', category: 'Aerobic', calories: 133, time: 30)
@dumbbells = Workout.create!(content: 'Walking: 3.5 mph (17 min/mi)
Walk on a path with no incline', category: 'Aerobic', calories: 133, time: 30)
@dumbbells = Workout.create!(content: 'Walking: 3.5 mph (17 min/mi)
Walk on a path with no incline', category: 'Aerobic', calories: 133, time: 30)
@dumbbells = Workout.create!(content: 'Walking: 3.5 mph (17 min/mi)
Walk on a path with no incline', category: 'Aerobic', calories: 133, time: 30)
puts "#{Workout.count} workouts created"


puts "#{User.count} users created"

@alpha = Food.create!(food_name: 'Carrots', calories: 25, user_id: @admin.id)
puts "#{Food.count} Food created"