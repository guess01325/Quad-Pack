class Luggage < ApplicationRecord
  belongs_to :user
  belongs_to :event
end
