import { useState, useEffect } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import PlayerBar from "./components/PlayerBar"
import Players from './components/Player/Players'
import SelectedPlayers from "./components/SelectedPlayer/SelectedPlayers"


function App() {
  // ! Fetch Players Data;
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(res => setPlayers(res))
  }, [])

  // ! Selected Players;
  const [selected, setSelected] = useState(false);

  const handelSelected = () => {
    setSelected(!selected);
  }

  // ! Choose Player Button;
  const [selectPlayers, setSelectPlayers] = useState([]);

  const handelChoosePlayer = (player) => {
    setSelectPlayers([...selectPlayers, player]);
  }

  return (
    <>
      <main className="container mx-auto px-2">
        <Header></Header>
        <Banner></Banner>
        <PlayerBar handelSelected={handelSelected} selected={selected}></PlayerBar>
        {selected ? <SelectedPlayers selectPlayers={selectPlayers}></SelectedPlayers> : <Players players={players} handelChoosePlayer={handelChoosePlayer}></Players>}
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
