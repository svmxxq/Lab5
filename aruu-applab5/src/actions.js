export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    payload: expense,
});

export const deleteExpense = (id) => ({
    type: 'DELETE_EXPENSE',
    payload: id,
});

// actions.js

export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter,
});

export const setSort = (sort) => ({
    type: 'SET_SORT',
    payload: sort,
});
