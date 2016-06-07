class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all

    render :index
  end

end
