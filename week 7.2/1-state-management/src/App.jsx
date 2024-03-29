import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { useMemo } from "react";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Count />
      </div>
    </RecoilRoot>
  );
}

function Count() {
  console.log("Re-Reding");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  
  return <div>
    {count}
    <br />
    <EvenCountRender/>
  </div>;
}

function EvenCountRender() {
  // const count = useRecoilValue(countAtom);

  // const isEven = useMemo(() => {
  //   return count % 2 == 0
  // }, [count])

  const isEven=useRecoilValue(evenSelector)
  
  return <>
  
    {isEven ? "it is Even" : "it is Odd"}
    
  </>

}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);

  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
