import React from 'react';

export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const itemColor = transaction.amount < 0 ? 'minus' : 'plus';
    return (<li className={itemColor}>
        {transaction.text} <span>{sign}R${Math.abs(transaction.amount)}</span><button className="delete-btn">X</button>
    </li>)
}