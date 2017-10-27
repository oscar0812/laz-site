Rails.application.routes.draw do
  devise_for :users
  resources :posts
  get 'post/index'

  put '/sort', to: 'posts#sort'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => "posts#index"
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
end
