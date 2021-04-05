class AddUserToFoodTracker < ActiveRecord::Migration[6.1]
  def change
    rename_table :food_tracker, :food
    add_reference :food, :user, null: false, foreign_key: true
  end
end
