import { createSelector } from 'reselect';   //библиотека отфильтрованных и отсортированных данных о расходах

const getExpenses = state => state.expenses;   // расходтардың состояниесын алады
const getFilter = state => state.filter;      // фильтрдің қазіргі состояниесін алады
const getSortBy = state => state.sortBy;      // сортировканың қазіргі состояниесін алады

export const getFilteredAndSortedExpenses = createSelector(
    [getExpenses, getFilter, getSortBy],
    (expenses, filter, sortBy) => {
        const filteredExpenses = expenses.filter(expense => expense.name.toLowerCase().includes(filter.toLowerCase()));

        if (sortBy === 'asc') {    //отсортированный список возвращается в порядке возрастания (
            return filteredExpenses.sort((a, b) => a.amount - b.amount);
        } else if (sortBy === 'desc') {  //сумма расходтың төмендеуін
            return filteredExpenses.sort((a, b) => b.amount - a.amount);
        }

        return filteredExpenses;
    }
);
