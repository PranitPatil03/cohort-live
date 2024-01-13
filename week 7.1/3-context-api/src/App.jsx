import { useContext } from "react";
import { CountContext, CountProvider } from "./context";
import "./App.css"
function App() {
  return (
    <CountProvider>
      <Count />
    </CountProvider>
  );
}
const Count = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default App;
