class CreateCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
      t.integer :area_id
      t.string :name

      t.timestamps
    end
  end
end
