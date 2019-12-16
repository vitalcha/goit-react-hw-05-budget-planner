import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './ExpensesTable';
import Values from './Values';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({ expenses }) => {
  return (
    <Container>
      <BudgetForm />
      <Values />
      <ExpenseForm />
      {expenses.length > 0 && <ExpensesTable />}
    </Container>
  );
};

App.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = store => ({
  expenses: store.expensesArray,
});

export default connect(
  mapStateToProps,
  null,
)(App);
