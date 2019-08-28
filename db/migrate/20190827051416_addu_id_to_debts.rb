class AdduIdToDebts < ActiveRecord::Migration[5.2]
  def change
    add_column :debts, :uid, :string
    remove_column :debts, :userId, :string
  end
end
