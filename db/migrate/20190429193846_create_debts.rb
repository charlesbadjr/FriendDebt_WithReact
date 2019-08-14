class CreateDebts < ActiveRecord::Migration[5.2]
  def change
    create_table :debts do |t|
      t.string :index
      t.float :amount
      t.float :payments
      t.float :amountLeft
      t.string :userId
      t.string :description
      t.date :payOffDate

      t.timestamps
    end
  end
end
