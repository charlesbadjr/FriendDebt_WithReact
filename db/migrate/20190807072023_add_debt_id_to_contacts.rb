class AddDebtIdToContacts < ActiveRecord::Migration[5.2]
  def change
    add_column :contacts, :debtId, :integer
  end
end
