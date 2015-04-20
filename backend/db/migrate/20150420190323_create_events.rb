class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.date   :date
      t.string :title
      t.string :venue

      t.timestamps
    end
  end
end