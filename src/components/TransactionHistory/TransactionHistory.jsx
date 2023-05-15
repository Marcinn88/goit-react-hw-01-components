// import React from "react";
import PropTypes from "prop-types";
import css from './TransactionHistory.css';

export const TransactionHistory = ({ items }) => (
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    {items.map(({ id,type,amount,currency })=>{
        return(
            <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        )
    })}

  </tbody>
    </table>
);

TransactionHistory.prototype = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};