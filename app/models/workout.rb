class Workout < ApplicationRecord
  has_many :user_workout_joins
  has_many :users, through: :user_workout_joins
end
