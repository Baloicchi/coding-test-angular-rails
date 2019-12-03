class Article < ApplicationRecord
  belongs_to :user_id

  validates_presence_of :title
  validates_presence_of :description
end
