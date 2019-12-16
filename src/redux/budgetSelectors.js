export const getBudgetValue = store => store.ourBudget;

export const calculateTotalExpenses = store => {
  return store.expensesArray.reduce(
    (total, expense) => total + expense.amount,
    0,
  );
};

export const calculateBalance = store => {
  return getBudgetValue(store) - calculateTotalExpenses(store);
};
