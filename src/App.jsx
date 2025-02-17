import { useState } from 'react'
import EmpProfile from './components/EmpProfile';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EmpProfile/>
    </>
  )
}

export default App
