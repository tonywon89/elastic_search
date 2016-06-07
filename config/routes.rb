Rails.application.routes.draw do
  namespace :api, defaults: { format: :json} do
    resources :businesses, only: [:index]
  end
end
