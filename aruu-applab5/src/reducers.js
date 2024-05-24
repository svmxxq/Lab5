const initialState = {
    expenses: [],    //обработка жасайды осы действияларды
    filter: '',
    sortBy: ''
};

const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload),
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            };
        case 'SET_SORT':
            return {
                ...state,
                sortBy: action.payload
            };

        default:
            return state;
    }

};

export default expenseReducer;


