// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment(){
//     setCount(()=> count + 1);
//   }

//   return <button onClick={increment}>I have been clicked {count} times</button>
// }

// export default Counter;

import React, { useState } from "react";

function Counter(){
  const [count, setCount] = useState(0);

  function increment() {
    setCount((currentCount) => currentCount + 1);

  }

  return (
    <div onClick={increment}>
      {count}
    </div>
  )

}

export default Counter;