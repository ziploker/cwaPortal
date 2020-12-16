Rails.application.routes.draw do
  post '/lookup', to: 'lookups#incoming'
  root 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
