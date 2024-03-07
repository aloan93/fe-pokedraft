// import { useEffect } from "react";
// import useAuth from "../hooks/useAuth";

export default function Home() {
  //const { auth } = useAuth();

  // useEffect(() => {
  //   console.log(auth);
  // }, []);

  return (
    <div className="homeDiv">
      <h2>Welcome to PokeDraft!</h2>
      <img
        className="homeEmote"
        src="../../images/primarina_emote_def_500px.png"
      />
      <p className="homeCredit">Art by FaustEjik</p>
    </div>
  );
}
