import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const itemColor = transaction.amount < 0 ? 'minus' : 'plus';
    const {deleteTransaction} = useContext(GlobalContext)
    return (<li className={itemColor} >
        {transaction.text} <span>{sign}R${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
    </li>)
}