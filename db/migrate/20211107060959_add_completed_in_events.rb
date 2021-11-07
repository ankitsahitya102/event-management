class AddCompletedInEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :completed, :boolean, default: false, null: false
  end
end
