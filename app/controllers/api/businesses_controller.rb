class Api::BusinessesController < ApplicationController

  def index
    if params[:currentInput].nil?
      @businesses = []
    else
      @businesses = Business.search(params[:currentInput])

      # @businesses = Business.where("name ILIKE ?", params[:currentInput] + "%")
    end

    render :index
  end

end
