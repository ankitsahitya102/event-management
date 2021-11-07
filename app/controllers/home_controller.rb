class HomeController < ApplicationController
  def index
    render "/index", layout: false
  end

  def dashboard_redirect
    redirect_to "/dashboard"
  end
end
