import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import JokeStart from './pages/jokeStart/JokeStart';
import Riddles from './pages/riddles/Riddles';
import ClassicJokes from './pages/classicJokes/ClassicJokes';
import AllJokes from './pages/allJokes/AllJokes';
import ChuckNorrisJokes from './pages/chuckNorrisJokes/ChuckNorrisJokes';
import { JokeProvider } from './context/JokeContext';

function App() {

  return (
    <>

      <JokeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start" element={<JokeStart />} />
            <Route path="/alle-witze" element={<AllJokes />} />
            <Route path="/raetsel" element={<Riddles />} />
            <Route path="/sprueche" element={<ClassicJokes />} />
            <Route path="/chuck-norris" element={<ChuckNorrisJokes />} />
          </Routes>
        </BrowserRouter >
      </JokeProvider>

    </>
  )
}

export default App
