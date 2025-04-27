import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>Button clicked {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
