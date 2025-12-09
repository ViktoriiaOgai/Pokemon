import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import PokeballPage from './pages/PokeballPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <div className="app-background">

        <nav>
          <Link to="/">Главная</Link>
          <Link to="/pokeball">Покебол</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokeball" element={<PokeballPage />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;