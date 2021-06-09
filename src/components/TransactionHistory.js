import React from "react";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
      ;
    </tbody>
  </table>
);

TransactionHistory.defaultProps = {
  amount: "free",
};

TransactionHistory.prototype = {
  amount: PropTypes.number,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
