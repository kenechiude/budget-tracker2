import IncomeList from "./IncomeList";
import ExpenseList from "./ExpenseList";

export default function ListDisplay({ onDeleteAll, incData, expData }) {
  return [...incData, ...expData].length ? (
    <>
      <div className="inc-exp-display">
        <IncomeList incData={incData} />
        <ExpenseList expData={expData} />
      </div>
      <div className="btn-div">
        <button onClick={onDeleteAll} className="dlt-all-btn btn">
          Delete All
        </button>
      </div>
    </>
  ) : (
    <p className="init-msg">Input and income/expense to get started 😁</p>
  );
}
