class CreateGoals < ActiveRecord::Migration[6.1]
  def change
    create_table :goals do |t|
      t.string :category
      t.string :description
      t.datetime :deadline
      t.boolean :achieved
      t.integer :student_id
      t.timestamps
    end
  end
end
