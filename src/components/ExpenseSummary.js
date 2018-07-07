import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import locale from '../localeNumeral/locale';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total'

locale(numeral);

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
    </div>
  );
};

const mapStatetoProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStatetoProps)(ExpenseSummary)
