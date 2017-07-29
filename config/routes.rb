Rails.application.routes.draw do
  root 'static_pages#index'

  get 'static_pages/help'

  get 'static_pages/destroy'

  get 'static_pages/new'

  get 'users/new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
