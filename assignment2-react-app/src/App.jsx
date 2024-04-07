import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginView from './components/views/LoginView/LoginView'
import HomeView1 from './components/views/HomeView1/HomeView1'
import HomeView2 from './components/views/HomeView2/HomeView2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/home" element={<HomeView1 />} />
        <Route path='/home2' element={<HomeView2 />} />
      </Routes>
    </Router>
  )
}

export default App
