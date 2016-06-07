class Business < ActiveRecord::Base
  validates :name, :address, presence: true
end
