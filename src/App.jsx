// Calculator
import React, { useState } from 'react';
import './App.css';
import {evaluate} from "mathjs";

function App() {
  const [expression, setExpression] = useState(''); // State to hold the current expression

  // Array of button labels
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  // Function to handle button clicks
  const handleClick = (button) => {
    if (button === 'C') {
      setExpression(''); // Clear the expression
    } else if (button === '=') {
      try {
        // Evaluate the expression using mathjs
        const result = evaluate(expression);
        setExpression(result.toString()); // Display the result
      } catch (error) {
        setExpression('Error'); // Handle errors in expression
      }
    } else {
      setExpression(expression + button); // Concatenate the button value to the expression
    }
  };

  return (
    <div className="calculator">
      {/* Display the current expression */}
      <div className="display">{expression}</div>
      
      {/* Map through the buttons array to generate the buttons */}
      <div className="buttons">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleClick(button)}
            className="button"
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

// Challenge

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   // Initialize state variable 'count' with a starting value of 0
//   const [count, setCount] = useState(0);

//   // Function to handle incrementing the count
//   const increment = () => {
//     setCount(count + 1);
//   };

//   // Function to handle decrementing the count
//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       {/* Decrement Button */}
//       <button onClick={decrement} style={{ marginRight: '20px' }}>
//         -
//       </button>
      
//       {/* Display the current count */}
//       <span>{count}</span>
      
//       {/* Increment Button */}
//       <button onClick={increment} style={{ marginLeft: '20px' }}>
//         +
//       </button>
//     </div>
//   );
// }

// export default App;



// code along

// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState("Hello!")
//   const [toggle, setToggle] = useState(true)

// const handleClick = (message) => {
//   console.log(message)
//   setCount(count + "Hello")
// }

// if (toggle){
//   return(
//     <div>
//       <p>This is from my if statement</p>
//       <button onClick={() => handleClick("Hello Wolrd!")} >Click Me!</button>
//     </div>
//   )
// }

//   return (
//       <div>
//         <h1>React State</h1>

//         {toggle ? (
//           <div>
//             <h2>This state value is True</h2>
//             <p>This is some text</p>
//             </div>
//         ) : (
//             <h2>This state value is False</h2>
//         )}

//         {toggle && (
//           <div>
//               <h3>This is my short circuit evaluation</h3>
//             </div>
//         )}

//       <button onClick={() => setToggle(!toggle)}>Change Condition</button>



//         <h2>{count}</h2>
//       <button onClick={() => handleClick("Hello Wolrd!")} >Click Me!</button>
//       </div>
//   ) 
// }

// export default App