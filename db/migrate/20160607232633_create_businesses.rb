class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false

      t.timestamps null: false
    end

    add_index :businesses, :name
  end
end
