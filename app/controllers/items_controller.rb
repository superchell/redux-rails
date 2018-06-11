class ItemsController < ApplicationController
  respond_to :html, :json

  def index
    @items = Items.all
    respond_to do |format|
      format.html
      format.json do
        render json: @products,
               adapter: :json,
               root: 'items'
      end
    end
  end
end
