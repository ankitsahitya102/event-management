class UsersController < ApplicationController
  before_action :user_exist, :check_params_present, :check_valid_params, only: %i[available_slots]

  def index
    @users = User.all
  end

  def available_slots
    @slots = CalculateAvailableSlotsService.new(@user, params).process
  end

  private
  
  def user_exist
    begin
      @user = User.find(params[:id])
    rescue StandardError => e
      render json: { error: e.message }, status: :not_found
    end
  end
end
