Rails.application.routes.draw do
  get 'home/index'

  devise_for :users
	
	root 'home#index'

  get 'rails/show'

  get 'rails/list'

  get 'rails/record'

  get 'rails/confirmation'

  get 'rails/registered'

  get 'sessions/new'

  get 'sessions/destroy'

  get 'sessions/create'

  # root 'static_pages#index'

  get 'static_pages/help'

  get 'static_pages/destroy'

  get 'static_pages/new'

  get 'users/edit'
  
  get 'users/show'

  get  '/signup',  to: 'users#new'
  post '/signup',  to: 'users#create'

  resources :users

  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
