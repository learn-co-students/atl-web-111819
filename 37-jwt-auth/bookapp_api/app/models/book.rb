class Book < ApplicationRecord
  belongs_to :user
  validates :title, presence: true, uniqueness: true
  validates :img, presence: true
end
