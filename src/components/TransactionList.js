import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);

  

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        <li className='minus'>
            Cash <span>R$400</span><button className="delete-btn">X</button>
        </li>
      </ul>
    </>
  )
}

export default TransactionList
