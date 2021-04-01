class CreateFoodTables < ActiveRecord::Migration[6.1]
  def change
    create_table :food_tracker do |t|
      t.string :food_name
      t.string :calories

      t.timestamps
    end
  end
end
