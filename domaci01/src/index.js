import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const Dobra = () => {
    console.log("Dobra")
  }
  const Neutralna = () => {
    console.log("Neutralna")
  }
  const Losa = () => {
    console.log("Losa")
  }

  return(
    <>
      <h1>Ocjenite našu uslugu!</h1>
      <button onClick={Dobra}>Dobra</button>
      <button onClick={Neutralna}>Neutralna</button>
      <button onClick={Losa}>Loša</button>
    </>
  )

}
 
ReactDOM.render(<App />, document.getElementById('root'))