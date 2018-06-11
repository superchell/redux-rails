class ItemsController < ApplicationController

  def show
    @items = Item.all
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
