import React from 'react'

function App() {
  let a=20;
  let mystyle={
backgroundColor:'green',
color:'red',
border:'10px solid black',
height:'100px'


  }
  return (
    <div style={{color:'red'}}>
      <h2>Abes engineering college></h2>
      <div style={mystyle}>{a}</div>
      </div>
  )
}

export default App