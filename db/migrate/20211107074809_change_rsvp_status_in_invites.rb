class ChangeRsvpStatusInInvites < ActiveRecord::Migration[5.2]
  def up
    change_column :invites, :rsvp_status, :integer, default: 2, null: false
  end

  def down
    change_column :invites, :rsvp_status, :integer, default: 0, null: false
  end
end
