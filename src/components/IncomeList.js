export default function IncomeList({ incData }) {
  // console.log(incData);

  return (
    <div className="income-list">
      <span>Income</span>
      <ul>
        {incData.map((data) => (
          <li key={data.id}>
            <span>{data.des}</span>
            <span>{data.amt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
