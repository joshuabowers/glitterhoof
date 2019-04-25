class API::ChroniclesController < ApplicationController
  def index
  end

  def show
    @chronicle = Chronicle.find( params.permit(:id)[:id] )
  end
end
