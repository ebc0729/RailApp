Rails.application.routes.draw do
  get 'home/index'

  get 'home/show'

  get 'index/show'

  get 'index/edit'

  root 'home#index'
  get 'home/show'
  get 'home/edit'

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
	
  get 'rails/show'

  get 'rails/list'

  get 'rails/record'

  # get 'rails/confirmation'

  # get 'rails/registered'

  get 'static_pages/help'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
