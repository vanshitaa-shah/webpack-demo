import React from 'react'
import './App.css'
import IMG from './assets/images/webpack.png'
import LOGO from './assets/Icons/facebook.svg'
import Counter from './components/Counter'

const App = () => {
  const num = 'abc'
  return (
    <>
      <h1>Demo App for React + Webpack configuration!! </h1>
      <p>Mode : {process.env.NODE_ENV}</p>
      <p>Greeting : {process.env.greet}</p>
      <hr />
      <h3>Image</h3>

      <img src={IMG} alt="png of webpack logo " />
      <hr />
      <h3>SVG</h3>

      <img src={LOGO} alt="svg of facebook logo" />
      <hr />
      <h3>Counter</h3>

      <Counter />
    </>
  )
}

export default App
