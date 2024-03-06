import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PokemonList from "./components/PokemonList";
import PokemonSingle from "./components/PokemonSingle";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import RequireAuth from "./components/RequireAuth";
import ProfileSettings from "./components/ProfileSettings";
import PersistLogin from "./components/PersistLogin";

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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/settings" element={<ProfileSettings />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
