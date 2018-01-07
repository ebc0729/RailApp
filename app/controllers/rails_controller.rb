class RailsController < ApplicationController
  def show
    gon.mapbox_access_key = ENV['MAPBOX_ACCESS_KEY']
    super
  end

  def list
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def record
    @area = Area.all
    @company = Company.where({area_id: 1})
    @line = Line.where({company_id: 2})
    @station = Station.where({rail_id: 3})
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def confirmation
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def registered
    @current_user ||= User.find_by(id: session[:user_id])
  end
end
