import React from "react";

function Tickler() {
  
  function tickler() {
    console.log('teehee!')
  }
  
  return (
    <button onClick={tickler}>I'm ticklish!</button>
  )
}

export default Tickler;
