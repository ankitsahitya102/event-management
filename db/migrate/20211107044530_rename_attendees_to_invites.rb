class RenameAttendeesToInvites < ActiveRecord::Migration[5.2]
  def change
    rename_table :attendees, :invites
  end
end
