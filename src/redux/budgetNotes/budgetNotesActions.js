import types from '../types';

export const addBudgetNote = data => ({
  type: types.BUDGET_NOTE_ADD,
  payload: {
    expenseObg: data,
  },
});

export const deleteBudgetNote = deleteId => ({
  type: types.BUDGET_NOTE_DELETE,
  payload: {
    id: deleteId,
  },
});
