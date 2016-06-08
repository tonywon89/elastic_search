class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.where("name ILIKE ?", "#{params[:currentInput]}%")

    render :index
  end

end
