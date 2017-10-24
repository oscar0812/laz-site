class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.string :routes
      t.string :item

      t.timestamps
    end
  end
end
