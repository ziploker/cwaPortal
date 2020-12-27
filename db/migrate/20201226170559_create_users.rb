class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :full_name
      t.string :password_digest
      t.string :confirm_token
      t.string :reset_password_token
      t.boolean :isAdmin
      t.boolean :email_confirmed
      t.boolean :opt_in

      t.timestamps
    end
  end
end
