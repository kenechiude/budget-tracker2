import { useState } from "react";
import Chart from "./components/Chart";
import Form from "./components/Form";
import ListDisplay from "./components/ListDisplay";

export default function App() {
  const [inc, setInc] = useState([]);
  const [exp, setExp] = useState([]);

  function handleSubmit(e, state) {
    e.preventDefault();
    if (!state.des) alert("Please input a description");

    state.option === "income"
      ? setInc([...inc, state])
      : setExp([...exp, state]);
  }

  return (
    <div>
      <Chart inc={inc} exp={exp} />
      <Form onSubmitForm={handleSubmit} />
      <ListDisplay incData={inc} expData={exp} />
    </div>
  );
}

// TODO ADD DELETE ON INDIVIDUAL AND GROUP, STYLE THE DISPLAYED INC/EXP
