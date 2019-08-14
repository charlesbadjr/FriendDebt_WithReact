class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :firstName
      t.string :lastName
      t.integer :phoneNumber
      t.string :email
      t.integer :userId

      t.timestamps
    end
  end
end
