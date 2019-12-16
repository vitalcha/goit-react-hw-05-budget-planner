import { combineReducers } from 'redux';
import budgetReducer from './budget/budgetReducer';
import budgetNotesReducer from './budgetNotes/budgetNotesReducer';

const rootReducer = combineReducers({
  ourBudget: budgetReducer,
  expensesArray: budgetNotesReducer,
});

export default rootReducer;
