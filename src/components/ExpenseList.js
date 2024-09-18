export default function ExpenseList({ expData }) {
  const expense = expData.reduce((acc, obj) => (acc += obj.amt), 0);
  const formarter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
  });

  function calcPerc(amt) {
    return Math.round((amt / expense) * 100);
  }

  return (
    <div className="expense-list">
      <span className="exp">Expense</span>
      <ul>
        {expData.map(
          (data) =>
            data.amt && (
              <li className="exp-li" key={data.id}>
                <span>{data.des}</span>
                <span className="ex-spn">
                  {formarter.format(data.amt)}
                  <span className="perc">{calcPerc(data.amt)}%</span>
                </span>
              </li>
            )
        )}
      </ul>
    </div>
  );
}
