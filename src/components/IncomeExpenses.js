import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'


export function IncomeExpenses() {
  const {transactions} = useContext(GlobalContext);
  const income = transactions.reduce((acc, transaction) => {
    if (transaction.amount > 0) {
      return acc + transaction.amount
    }
    return acc
  }, 0)
  const expense = transactions.reduce((acc, transaction) => {
    if (transaction.amount < 0) {
      return acc + transaction.amount
    }
    return acc
  }, 0)
  console.log(income)
  return (
    <div>
      <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">+R${income.toFixed(2)}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money minus">-R${Math.abs(expense).toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default IncomeExpenses
