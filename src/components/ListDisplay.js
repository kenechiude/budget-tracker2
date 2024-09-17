import IncomeList from "./IncomeList";
import ExpenseList from "./ExpenseList";

export default function ListDisplay({ incData, expData }) {
  // console.log(incData);

  return (
    <div className="inc-exp-display">
      <IncomeList incData={incData} />
      <ExpenseList expData={expData} />
    </div>
  );
}
