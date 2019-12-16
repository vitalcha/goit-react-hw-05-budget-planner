import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as Selectors from '../redux/budgetSelectors';
import Value from './Value';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} isPositive={balance <= 0} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

Values.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

const mapStateToProps = store => ({
  budget: Selectors.getBudgetValue(store),
  expenses: Selectors.calculateTotalExpenses(store),
  balance: Selectors.calculateBalance(store),
});

export default connect(
  mapStateToProps,
  null,
)(Values);
