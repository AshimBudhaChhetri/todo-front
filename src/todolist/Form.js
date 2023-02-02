import React from "react";
import { useState } from "react";
const Form = (props) => {
  const [form, setForm] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    props.fform({
      id: Math.floor(Math.random() * 10000),
      text: form,
    });

    setForm("");
  };

  const onInputChange = (e) => {
    setForm(e.target.value);
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input placeholder="Enter List" onChange={onInputChange} />
    </form>
  );
};

export default Form;
