import { useState } from "react";
import React from "react";
import Form from "./todolist/Form";
import Header from "./todolist/Header";
import List from "./todolist/List";

function App() {
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(null);
  const [editItem, setEditItem] = useState("");
  const handlesubmit = (ab) => {
    setTodo([...todo, ab]);
    console.log(ab);
  };
  const handleEdit = (val) => {
    console.log(val);
    setEdit(val.id);
  };

  const updateEdit = (val) => {
    setEditItem(val);
  };
  const updateEditValue = async (id) => {
    const updatedValue = todo.map((i) => {
      if (i.id === id) {
        i.text = editItem;
      }
      return i;
    });

    setTodo(updatedValue);
    setEdit(null);
  };

  return (
    <div>
      <center>
        <div>
          <Header />

          <div>
            <button>Remaining</button>
            <button>Completed</button>
          </div>

          <Form fform={handlesubmit} />
          <List
            list={todo}
            onEdit={handleEdit}
            edit={edit}
            updateEdit={updateEdit}
            handleSubmit={updateEditValue}
          />
        </div>
      </center>
    </div>
  );
}

export default App;
