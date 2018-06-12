class ItemsController < ApplicationController

  def show
    @items = Item.all
    respond_to do |format|
      format.html
      format.json do
        render json: @items
      end
    end
  end
end
