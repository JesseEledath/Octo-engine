class ChangeFoodToFoods < ActiveRecord::Migration[6.1]
  def change
    rename_table :food, :foods
  end
end
