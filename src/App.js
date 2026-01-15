import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <main>
      <Navbar />
      <Container>
        <Home />
      </Container>
    </main>
  );
};

export default App;
