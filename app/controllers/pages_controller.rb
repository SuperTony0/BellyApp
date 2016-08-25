class PagesController < ApplicationController

  def main
  end
  def yelp_request
    coordinates = {latitude: params[:latitude], longitude: params[:longitude]}
    places = Yelp.client.search_by_coordinates(coordinates)
    respond_to do |format|
      format.json {render json: places}
    end
  end

end
