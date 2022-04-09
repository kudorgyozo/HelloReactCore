import { counterState } from "../state/counter";
import { useRecoilState } from "recoil";

export const Counter = () => {
  const [count, setCount] = useRecoilState(counterState);

  const incrementCounter = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Counter</h1>

      <p>This is a simple example of a React component.</p>

      <p aria-live="polite">
        Current count: <strong>{count}</strong>
      </p>

      <button className="btn btn-primary" onClick={incrementCounter}>
        Increment
      </button>
    </div>
  );
};
