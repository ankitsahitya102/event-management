class InvitesController < ApplicationController
  def update
    @invite = Invite.find(params[:id])
    respond_to do |format|
      if @invite.update(invite_params)
        format.json { render :show }
      else
        format.json { render json: @invite.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def invite_params
    params.require(:invite).permit(:rsvp_status)
  end
end
