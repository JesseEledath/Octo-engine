class User < ApplicationRecord
  has_many :foods
  has_many :user_workout_joins
  has_many :workouts, through: :user_workout_joins
  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }, confirmation: true
end
