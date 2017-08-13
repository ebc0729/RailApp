class RailsController < ApplicationController
  def show
  end

  def list
  end

  def record
    @area = Area.all
  end
end
