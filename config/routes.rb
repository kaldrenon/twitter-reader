Rails.application.routes.draw do
  post '/users/search', to: 'users#search_user_id'
  resources :users
  resources :lists
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "application#index"
end
