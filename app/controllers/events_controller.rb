class EventsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @event = Event.new(event_params)
    respond_to do |format|
      if @event.save
        format.json { render :show }
      else
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def event_params
    params.require(:event).permit(:title, :start_time, :end_time, :description, :all_day, invites_attributes: [:user_id])
  end
end
