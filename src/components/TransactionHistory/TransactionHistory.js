import React from "react";
import PropTypes from "prop-types";
import styles from './transaction.module.scss';

const TransactionHistory = ({transactions}) => {

    return (
        <table className={styles.transactionHistory}>
            <thead>
            <tr className={styles.transactionHeader}>
                <th className={styles.transactionHeaderItem}>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>
            <tbody>
            {transactions.map(({id,type,amount,currency}) => (
                <tr key={id} className={styles.transactionList}>
                   <td className={styles.transactionItem}>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes= {
    transactions:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        amount:PropTypes.string.isRequired,
        currency:PropTypes.string.isRequired
    })).isRequired,
}

export default TransactionHistory;