import { useState } from "react";
import "./App.css";

function App() {
  const [todoData, setTodoData] = useState([
    { todo: "", done: false, edit: false },
  ]);
  const [input, setInput] = useState("");
  console.log(todoData, "totdo");
  const [edit,setEdit]=useState("");

  function handleTodoData(e) {
    const newTodo = { todo: input, done: false, edit: false };
    setTodoData([...todoData, newTodo]);
  }

  function handleEdit(curr, index) {
    console.log(curr.edit, "eeeee");
    if (curr.edit) {
      curr.edit = !curr.edit;
      curr.todo = input;
      const newTodo = todoData;
      newTodo.splice(index, 1, curr);
      setTodoData([...newTodo]);
    } else {
      curr.edit = !curr.edit;
      const newTodo = todoData;
      newTodo.splice(index, 1, curr);
      setTodoData([...newTodo]);
    }
  }

  function editInput(e) {
    console.log(e.target.value);
    setEdit(e.target.value);
  }

  function handleDone(index) {
    const curr = todoData[index];
    curr.done = !curr.done;
    const newTodo = todoData;
    newTodo.splice(index, 1, curr);
    setTodoData([...newTodo]);
  }
  function handleDelete(index) {
    const newData = todoData;

    let ans = newData.splice(index, 1);
    console.log(newData, "newDAT");
    setTodoData([...newData]);
  }
  return (
    <div className="App">
      <div className="todo-container">
        <h1>TODO-LIST</h1>
        <div className="todo-input-control">
          <input
            type="text"
            placeholder="Add Todo Data"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={(e) => handleTodoData(e)}>Add List</button>
        </div>
        <div className="data-conatainer">
          {todoData.map((curr, index) => {
            return (
              <div key={index} className="list-data">
                {curr.edit ? (
                  <input value={edit} onChange={editInput} />
                ) : (
                  <p
                    style={{
                      textDecoration: `${curr.done ? "line-through" : ""}`,
                    }}
                  >
                    {curr.todo}
                  </p>
                )}
                <div>
                  <button onClick={() => handleEdit(curr, index)}>Edit</button>
                  <button onClick={() => handleDone(index)}>Done</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
