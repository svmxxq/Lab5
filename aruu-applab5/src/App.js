import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense, deleteExpense } from './actions';
import ShowList from './components/ShowList';
import CreateForm from './components/CreateForm';
import SumTotal from './components/SumTotal';
import FilterSort from './components/FilterSort';
import './App.css';

const App = () => {
    const expenses = useSelector((state) => state.expenses);
    const dispatch = useDispatch();

    const handleAddExpense = (expense) => { //добавить экспенс арқылы қосылады
        dispatch(addExpense(expense));
    };

    const handleDeleteExpense = (id) => {  //удалить айди арқылы удалить етеді
        dispatch(deleteExpense(id));
    };

    const total = expenses.reduce((acc, expense) => acc + parseInt(expense.amount), 0);  //общ сумма есептейді

    return (
        <div className="container">
            <h1>Expense Tracker</h1>
            <CreateForm onAddExpense={handleAddExpense} />
            &nbsp;
            <FilterSort/>
            <ShowList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
            <SumTotal total={total} />
        </div>
    );
};

export default App;