import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import RemoveModal from './RemoveModal';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  state = {
     selectedOption: undefined
   };
   onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.setState(() => ({
      selectedOption: this.props.expense.id
    }));
  };
  removeExpense = (expense) => {
    this.props.startRemoveExpense({id: this.props.expense.id});
    this.props.history.push('/');
  };
  closeModal = () => {
        this.setState(() => ({
          selectedOption: undefined
       }));
   };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense = {this.props.expense}
            onSubmit={this.onSubmit}
            buttonText="Save Expense"
          />
          <RemoveModal
            selectedOption={this.state.selectedOption}
            removeExpense={this.removeExpense}
            closeModal={this.closeModal}
          />
          <button className="button button--secondary" onClick={ this.onRemove }
            >Remove Expense</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense))
});

const mapStatetoProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(EditExpensePage);
