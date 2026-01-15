import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import Home from './Pages/Home/Home';
import Favorite from './Pages/Favorite/Favorite';
import About from './Pages/About/About';
import NoMatch from './Pages/NoMatch/NoMatch';

const App = () => {
  return (
    <main>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
