class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  protect_from_forgery with: :exception
  def show
    @current_user ||= current_user
  end

end
