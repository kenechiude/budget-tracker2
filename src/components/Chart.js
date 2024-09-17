export default function Chart({ inc, exp }) {
  const income = inc.reduce((acc, obj) => (acc += obj.amt), 0);
  const expense = exp.reduce((acc, obj) => (acc += obj.amt), 0);
  const perc = Math.round((expense / income) * 100);
  const balance = income - expense;

  return (
    <div className="chart">
      <span className="bal">{balance}</span>

      <div className="income">
        <span>Income</span>
        <span>{income}</span>
      </div>

      <div className="expense">
        <span>Expense</span>
        <span>
          {expense} <span className="perc">{perc ? perc : 0}%</span>
        </span>
      </div>
    </div>
  );
}
