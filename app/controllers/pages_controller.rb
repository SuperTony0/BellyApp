class PagesController < ApplicationController

  def main
  end
  def yelp_request
    coordinates = {latitude: params[:latitude], longitude: params[:longitude]}
    puts coordinates
    #places = Yelp.client.search_by_coordinates(coordinates)
    places = Yelp.client.search_by_coordinates(coordinates)
    puts places.businesses[0].name
    respond_to do |format|
      format.json {render json: places}
    end
  end

end
