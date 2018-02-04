require 'json'
class RailsController < ApplicationController
  def show
    gon.mapbox_access_key = ENV['MAPBOX_ACCESS_KEY']
    super
  end

  def list
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def record
    gon.api_base_url = api_base_url
    res = Faraday.get api_base_url + '/areas'
    if res.success?
      res_json = JSON.parse(res.body)
      @area = res_json.map{|r| Area.new({id: r['id'], name: r['name']}) }
    else
      @area = nil
    end
    @company = Company.where({area_id: 1})
    # @line = Route.where({company_id: 2})
    # @station = Station.where({rail_id: 3})
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def confirmation
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def registered
    @current_user ||= User.find_by(id: session[:user_id])
  end
end
