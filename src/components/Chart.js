export default function Chart({ inc, exp }) {
  const income = inc.reduce((acc, obj) => (acc += obj.amt), 0);
  const expense = exp.reduce((acc, obj) => (acc += obj.amt), 0);

  const formarter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
  });
  const perc = Math.round((expense / income) * 100);
  const balance = income - expense;

  return (
    <div className="chart">
      <span className="bal">{formarter.format(balance)}</span>

      <div className="income">
        <span>Income</span>
        <span>{formarter.format(income)}</span>
      </div>

      <div className="expense">
        <span>Expense</span>
        <span>
          {formarter.format(expense)}
          <span className="perc">{perc ? perc : 0}%</span>
        </span>
      </div>
    </div>
  );
}
