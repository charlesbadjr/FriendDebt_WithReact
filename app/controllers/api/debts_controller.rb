class Api::DebtsController < ApplicationController
  before_action :authenticate_user!

  def index
   @debts = Debt.all
  end

  def new
   @debts = Debt.new(debt_params)
  end

  def create
    @debts = Debt.create(debt_params[:id])
      if @debts.save
      render :json @debts.find(debt_params[:id])
     else
    
   end
  end

  def update
    @debts = debt.find(debt_params[:id])

  end

  def delete
  
  end

  private 

  def debt_params
    debts.permit(debt).only{:index, :amount, :payments, :amountLeft, :userId, :description, :payOffDate, :interest }
  end

end
