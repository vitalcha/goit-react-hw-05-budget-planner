/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';
import * as BudgetActions from '../redux/budget/budgetActions';

const labelStyles = `
  margin-bottom: 16px;
`;

class BudgetForm extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
  };

  state = {
    budgetValue: 0,
  };

  handleChange = e => {
    this.setState({
      budgetValue: e.target.value,
    });
  };

  handleSubmit = e => {
    const { onSave } = this.props;
    e.preventDefault();
    const { budgetValue } = this.state;
    onSave(Number(budgetValue));
    this.setState({ budgetValue: 0 });
  };

  render() {
    const { budgetValue } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            value={budgetValue}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSave: budgetValue => dispatch(BudgetActions.addBudgetValue(budgetValue)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
