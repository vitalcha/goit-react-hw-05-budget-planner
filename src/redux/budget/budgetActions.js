import types from '../types';

export const addBudgetValue = budgetValue => ({
  type: types.BUDGET_ADD,
  payload: {
    ourBudget: budgetValue,
  },
});

export const any = () => ({});
