import types from '../types';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case types.BUDGET_ADD:
      return action.payload.ourBudget;

    default:
      return state;
  }
};

export default budgetReducer;
