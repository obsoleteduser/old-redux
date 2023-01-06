import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { connect } from 'react-redux'

function App(props) {
 
  console.log(props)

  const handleInc = (evt) => {
    props.dispatch({
      type: 'INCREMENT'
    })
  }
  const handleDec = (evt) => {
    props.dispatch({
      type: 'DECREMENT'
    })
  }


  return (
    <div className="App">
     <div className="display">{props.count}</div>
     <button onClick={handleInc} className="inc">INC</button>
     <button onClick={handleDec} className="dec">DEC</button>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}


export default connect(mapStateToProps)(App);


