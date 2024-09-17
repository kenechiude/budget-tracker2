import { useState } from "react";

export default function Form({ onSubmitForm }) {
  const [initState, setInitState] = useState({
    option: "income",
    des: "",
    amt: "",
    id: Date.now(),
  });
  const [formData, setFormData] = useState(initState);

  return (
    <form
      onSubmit={(e) => {
        onSubmitForm(e, formData);
        setFormData(initState);
      }}
    >
      <select
        value={formData.option}
        onChange={(e) => {
          setInitState({ ...initState, option: e.target.value });
          setFormData({ ...formData, option: e.target.value });
        }}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        value={formData.des}
        onChange={(e) => setFormData({ ...formData, des: e.target.value })}
        type="text"
        placeholder="Description"
      />
      <input
        value={formData.amt}
        onChange={(e) => setFormData({ ...formData, amt: +e.target.value })}
        className="amt"
        type="number"
        placeholder="Amount"
      />
      <button className="btn">Add</button>
    </form>
  );
}
