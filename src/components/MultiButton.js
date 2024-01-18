// import React from "react";

// function MultiButton() {
//   function handleClick(number) {
//     console.log(`Button ${number} was clicked`);
//   }

//   return (
//     <div>
//       <button onClick={() => handleClick(1)}>Button 1</button>
//       <button onClick={() => handleClick(2)}>Button 2</button>
//       <button onClick={() => handleClick(3)}>Button 3</button>
//     </div>
//   );
// }

// export default MultiButton;




import React from "react";

function MultiButton() {

  function handleClick(number) {
    console.log(`Button ${number} was clicked.`);
  }

  return (
    <div>
      <button onClick={() => handleClick(10)}>Button1</button>
      <button onClick={() => handleClick(20)}>Button2</button>
      <button onClick={() => handleClick(1)}>Button3</button>
    </div>
  )

}

export default MultiButton;