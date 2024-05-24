import React from 'react';
import './SumTotal.css'; // Суммасын шығарады

const SumTotal = ({ total }) => {
    return (
        <div className="sum-total">
            <h2 className="sum-total-title">Total Expenses</h2>
            <p className="sum-total-amount">${total}</p>
        </div>
    );
};

export default SumTotal;
