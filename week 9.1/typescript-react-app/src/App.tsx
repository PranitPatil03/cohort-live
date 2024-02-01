import "./App.css";

function App() {
  return (
    <>
      <Todo title="Todo1" description="go to the gym" />
    </>
  );
}

interface TodoProps {
  title: string;
  description: string;
  isDone?: boolean;
}

function Todo({title,description,isDone}: TodoProps) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <p>{isDone}</p>
      </div>
    </>
  );
}

export default App;
