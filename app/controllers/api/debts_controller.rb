class Api::DebtsController < ApplicationController
  

  def index
   @debts = Debt.all
  end

  def new
   @debts = Debt.new(debt_params)
  end

  def create
      Debt.new(debt_params)
    @debts = Debt.create(debt_params[:id])
      if @debts.save
      render json: @debts.find(debt_params[:id])
     else
      render json: @debts.errors
   end
  end

  def update
    @debts = debt.find(debt_params[:id])

  end

  def delete
  
  end

  private 

  def debt_params
    params.require(:debt).permit{amount:'', payments:'', amountLeft:'', description:'', payOffDate:'', interest:'' }
  end

end
