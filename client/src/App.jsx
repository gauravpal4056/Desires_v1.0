import { useState } from 'react'
import './App.css'
import Bottom from './component/bottom/bottom'
import Container from './component/Container/container'
import Navigation from './component/navigation/navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navigation/>
      <Container/>
      <Bottom/>
    </div>
  )
}

export default App
