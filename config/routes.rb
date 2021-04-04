Rails.application.routes.draw do
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :workouts
  resources :foods, except:  :destroy
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
