class CreateLuggages < ActiveRecord::Migration[6.1]
  def change
    create_table :luggages do |t|
      t.string :name
      t.string :amount
      t.references :user, null: false, foreign_key: true
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
