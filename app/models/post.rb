class Post < ApplicationRecord
  default_scope { order("priority ASC") }
end
