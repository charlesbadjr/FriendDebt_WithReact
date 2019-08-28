class AdduIDtoContacts < ActiveRecord::Migration[5.2]
  def change
    add_column :contacts, :uid, :string
    remove_column :contacts, :userId, :string
  end
end
