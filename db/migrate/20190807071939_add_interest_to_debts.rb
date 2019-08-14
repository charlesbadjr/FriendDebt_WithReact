class AddInterestToDebts < ActiveRecord::Migration[5.2]
  def change
    add_column :debts, :interest, :float
  end
end
