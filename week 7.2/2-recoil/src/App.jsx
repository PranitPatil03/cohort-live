import { useState } from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { todoAtom } from "./store/atom/todoAtom";

function App() {
  return (
    <>
      <RecoilRoot>
        <TodoApp />
      </RecoilRoot>
    </>
  );
}
function TodoApp() {
  const [todos, setTodo] = useRecoilState(todoAtom);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      return;
    }
    setTodo([...todos, { title, description }]);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <strong>{todo?.title}:</strong> {todo?.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
