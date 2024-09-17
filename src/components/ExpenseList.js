export default function ExpenseList({ expData }) {
  // console.log(expData);
  const expense = expData.reduce((acc, obj) => (acc += obj.amt), 0);
  function calcPerc(amt) {
    return Math.round((amt / expense) * 100);
  }

  return (
    <div className="expense-list">
      <span>Expense</span>
      <ul>
        {expData.map((data) => (
          <li key={data.id}>
            <span>{data.des}</span>
            <span>
              {data.amt} <span className="perc">{calcPerc(data.amt)}%</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
