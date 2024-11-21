import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Yugurish",
      completed: false,
    },
    {
      id: 2,
      title: "Dars qilish",
      completed: true,
    },
  ]);

  const changeStatus=(id)=>{
    setTodos((prev) => {
      return prev.map((todo) => {
        if (id == todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    })
  }
  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <h3>{todo.title}</h3>
              {!todo.completed && <button onClick={()=>changeStatus(todo.id)}>Completed</button>}
              {todo.completed && <button onClick={()=>changeStatus(todo.id)}>UnCompleted</button>}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default App;
