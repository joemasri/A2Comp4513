import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginView from './components/views/LoginView/LoginView'
import HomeView from './components/views/HomeView/HomeView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/home" element={<HomeView />} />
      </Routes>
    </Router>
  )
}

export default App

// Link: https://a2comp4513.onrender.com/
