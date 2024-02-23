import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PokemonList from "./components/PokemonList";
import PokemonSingle from "./components/PokemonSingle";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokemonList />} />
          <Route path="/pokemon/:pokemonName" element={<PokemonSingle />} />
          <Route path="/login/" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
