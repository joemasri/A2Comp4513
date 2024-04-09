import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginView from './components/views/LoginView/LoginView'
import HomeView1 from './components/views/HomeView/HomeView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/home" element={<HomeView1 />} />
      </Routes>
    </Router>
  )
}

export default App
