class PageController < ApplicationController
  befor_action :autheticate_user!, only: [:contact]
  
  
  def home
  end

  def about
  end

  def contact
  end
end
