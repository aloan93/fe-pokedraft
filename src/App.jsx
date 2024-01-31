import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokemonList />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
