import { useState } from 'react'
import './App.css'
import LoginView from './components/views/LoginView/LoginView';

function App() {
  const [count, setCount] = useState(0)

  return (
    <LoginView />
  )
}

export default App
