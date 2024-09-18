import { useState } from "react";

import Chart from "./components/Chart";
import Form from "./components/Form";
import ListDisplay from "./components/ListDisplay";

export default function App() {
  const [inc, setInc] = useState([]);
  const [exp, setExp] = useState([]);

  function handleSubmit(e, state) {
    e.preventDefault();
    if (!(state.des && state.amt)) {
      alert("Please input a description");
      return;
    }

    state.option === "income"
      ? setInc([...inc, state])
      : setExp([...exp, state]);
  }

  function handleDeleteAll() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all income and expenses?"
    );
    if (confirmed) {
      setExp([]);
      setInc([]);
    }
  }

  return (
    <div>
      <Chart inc={inc} exp={exp} />
      <Form onSubmitForm={handleSubmit} />
      <ListDisplay onDeleteAll={handleDeleteAll} incData={inc} expData={exp} />
    </div>
  );
}

// TODO ADD DELETE ON INDIVIDUAL
