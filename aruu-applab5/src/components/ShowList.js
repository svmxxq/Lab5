import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';
import { getFilteredAndSortedExpenses } from '../selectors';
import './ShowList.css'; // біз қосқан әр товарды көрсетіп отырады

const ShowList = ({ expenses, deleteExpense }) => {
    return (
        <div className="show-list">
            <h2 className="show-list-title"><center>Show List</center></h2>
            <ul className="show-list-ul">
                {expenses.map((expense) => (
                    <li key={expense.id} className="show-list-item">
                        <span className="expense-name">{expense.name}</span>
                        <span className="expense-amount">${expense.amount}</span>
                        <span className="expense-date">{expense.date}</span>
                        {expense.photo && ( // Проверяем наличие фотографии
                            <div className="expense-photo">
                                <img src={expense.photo} alt="Expense" className="expense-photo-img" style={{ maxWidth: '100px', maxHeight: '100px'}} />
                            </div>
                        )}
                        <button className="delete-button" onClick={() => deleteExpense(expense.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = state => ({
    expenses: getFilteredAndSortedExpenses(state)
});

export default connect(mapStateToProps, {deleteExpense})(ShowList);
