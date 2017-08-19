class RailsController < ApplicationController
  def show
  end

  def list
  end

  def record
    @area = Area.all
    @company = Company.where({area_id: 1})
    @line = Line.where({company_id: 2})
    @station = Station.where({rail_id: 3})
  end
end
