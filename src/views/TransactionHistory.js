import React from "react";
import TransactionHistory from "../components/TransactionHistory";
import transactions from '../transactions.json';

const TransactionHistoryView=() => (

    <TransactionHistory transactions={transactions}/>
)

export default TransactionHistoryView;