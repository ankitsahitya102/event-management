class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def check_params_present
    unless params[:start_date].present?
      render json: { error: 'Please provide a start date' }, status: :unprocessable_entity
      return false
    end
    unless params[:end_date].present?
      render json: {error: 'Please provide a end date' }, status: :unprocessable_entity
      return false
    end
  end

  def check_valid_params
    begin
      unless DateTime.parse(params[:start_date]) <= DateTime.parse(params[:end_date])
        render json: {error: 'start date can\'t be after end date' }, status: :unprocessable_entity
        return false
      end
    rescue => e
      render json: {error: 'Please provide valid start date and end date' }, status: :unprocessable_entity
      return false
    end
  end
end
