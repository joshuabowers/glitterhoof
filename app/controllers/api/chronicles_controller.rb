class API::ChroniclesController < ApplicationController
  def index
    render json: Chronicle.all
  end

  def show
    @chronicle = Chronicle.find( params.permit(:id)[:id] )
    render json: @chronicle.as_json( except: [:file, :available, :_id] )
  end
end
