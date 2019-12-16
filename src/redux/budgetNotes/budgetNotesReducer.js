import types from '../types';

const budgetNotesReducer = (state = [], action) => {
  switch (action.type) {
    case types.BUDGET_NOTE_ADD:
      return [action.payload.expenseObg, ...state];

    case types.BUDGET_NOTE_DELETE:
      return state.filter(el => el.id !== action.payload.id);

    default:
      return state;
  }
};
export default budgetNotesReducer;
