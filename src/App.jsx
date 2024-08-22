import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './layout/Header/Header';
import Nav from "./layout/Nav/Nav";
import Footer from "./layout/Footer/Footer";
import Home from "./pages/Home/Home";
import MisDatos from "./pages/MisDatos/MisDatos";
import MiExperiencia from "./pages/MiExperiencia/MiExperiencia";
import Programacion from "./pages/Programacion/Programacion";
import NotFound from "./pages/NotFound";
// import Data from './data/data.json';

function App() {
  return (
    <>
      <Router>
      <div className="App">

        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datos" element={<MisDatos />} />
          <Route path="/experiencias" element={<MiExperiencia />} />
          <Route path="/programacion" element={<Programacion />} />
           <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
