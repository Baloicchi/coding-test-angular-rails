class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.references :user_id, null: false, foreign_key: true
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
