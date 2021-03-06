class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title
      t.datetime :start_time
      t.datetime :end_time
      t.string :description
      t.boolean :all_day, default: false, null: false

      t.timestamps
    end
  end
end
