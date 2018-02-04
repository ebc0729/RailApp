class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  protect_from_forgery with: :exception

  def show
    @current_user ||= current_user
  end

  def api_base_url
    ENV['API_BASE_URL']
  end
end
