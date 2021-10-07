class Event < ApplicationRecord
  belongs_to :user
  has_many :luggages
end
