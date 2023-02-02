import React from "react";

const List = ({ edit, updateEdit, handleSubmit, onEdit, list }) => {
  console.log(edit);
  return (
    <div>
      {list.map((i) => {
        return i.id === edit ? (
          <div>
            <input
              placeholder="Update your Todo"
              onChange={(e) => updateEdit(e.target.value)}
            />
            <button onClick={() => handleSubmit(edit)}> Update todo</button>
          </div>
        ) : (
          <div>
            {i.text}
            <div>
              <button onClick={() => onEdit(i)}>Edit</button>
              <button onClick={() => onEdit(i)}>Completed</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
