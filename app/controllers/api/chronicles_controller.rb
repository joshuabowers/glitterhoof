class API::ChroniclesController < ApplicationController
  def index
    @chronicles = Chronicle.only(:id, :dynasty, :started_in).available
  end

  def show
    @chronicle = Chronicle.find( params.permit(:id)[:id] )
  end
end
