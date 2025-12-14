import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PokeballPage from './pages/PokeballPage'
import HomePage from './pages/HomePage'
import Header from './layout/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="app-background">

       <Header/>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokeball" element={<PokeballPage />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;