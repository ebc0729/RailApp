class StaticPagesController < ApplicationController
  def index
  end

  def help
    @current_user ||= User.find_by(id: session[:user_id])
  end

	def login
	end
end
