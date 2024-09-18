export default function IncomeList({ incData }) {
  const formarter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
  });

  return (
    <div className="income-list">
      <span className="inc">Income</span>
      <ul>
        {incData.map(
          (data) =>
            data.amt && (
              <li className="inc-li" key={data.id}>
                <span>{data.des}</span>
                <span>{formarter.format(data.amt)}</span>
              </li>
            )
        )}
      </ul>
    </div>
  );
}
