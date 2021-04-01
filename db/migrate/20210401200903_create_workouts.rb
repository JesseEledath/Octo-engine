class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :content
      t.string :category
      t.integer :calories
      t.integer :time

      t.timestamps
    end
  end
end
