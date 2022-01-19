import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Main } from './components/partials/Main/Main'
import { Header } from './components/partials/Header/Header' 
import { Home } from './components/Pages/Home/Home'
import { About } from './components/Pages/About/About'
import { Greetings } from './components/Pages/Greetings/Greetings'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main>
          <Greetings />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </Main>
      </Router>
    </div>
  );
}

export default App;
