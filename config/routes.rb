Rails.application.routes.draw do
  mount ActionCable.server, at: '/cable'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, constraints: { format: 'json' } do
    resources :chronicles
  end

  root to: 'frontend#index'

  match '*path', to: 'frontend#index', via: :all
end
