import React ,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
export const Transaction = ({ id, text, amount }) => {
    const sign = amount < 0 ? '-' : '+';
    const transactionClass = amount < 0 ? 'minus' : 'plus';
    const { deleteTrans } = useContext(GlobalContext);;
    return (
        <li className={transactionClass}>
            {text} <span>{sign}Rs. {Math.abs(amount).toFixed(2)}</span>
            <button
                className="delete-btn"
                onClick={() => deleteTrans(id)}>x</button>
        </li>
    );
};