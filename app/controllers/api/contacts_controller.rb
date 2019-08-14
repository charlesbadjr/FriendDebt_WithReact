class Api::ContactsController < ApplicationController
   

    def index
     @contacts = Contact.all    
        render json: @contacts.all
    end

    def new
      @contacts = Contact.new(contact_params)

    end

    def create
        @contacts = Contact.create(contact_params)
        if @contacts.save
        render json: @contacts
        else

        end
    end

    def delete
    
    end

   

    private

    def contact_params
        params.require(:contacts).permit(:firstName, :lastName, :phoneNumber, :email, :userId, :debtId )
end
