Rails.application.routes.draw do
  get 'page/home'

  get 'page/about'

  get 'page/contact'

  devise_for :users
  devise_for :models
  
  root 'page#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
