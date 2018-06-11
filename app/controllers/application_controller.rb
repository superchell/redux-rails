class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    render :json=>"ok"
  end
end
