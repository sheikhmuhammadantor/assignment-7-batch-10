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

  // ! Selected Section;
  const [selected, setSelected] = useState(false);

  const handelSelected = (bool) => {
    setSelected(bool);
  }

  // ! Choose Player Button;
  const [selectPlayers, setSelectPlayers] = useState([]);

  const handelChoosePlayer = (player) => {
    const { playerId } = player;
    const isExist = selectPlayers.find(selectPlayer => selectPlayer.playerId === playerId);

    if (selectPlayers.length >= 6) {
      return alert("Already 6 Player Added !!");
    } else if (isExist) {
      return alert("Already Choose This Player !!");
    }
    setSelectPlayers([...selectPlayers, player]);
  }

  // ! Remove Button;
  const handelRemovePlayer = (player) => {
    const {playerId} = player;
    const newSelectPlayers = selectPlayers.filter(selectPlayer => selectPlayer.playerId !== playerId);

    setSelectPlayers(newSelectPlayers);
  }

  // ! Add Coins;
  const [coins, setCoins] = useState(500);

  const handelGetFreeCoins = () => {
    console.log("You Got Free Coins")
  }

  return (
    <>
      <main className="container mx-auto px-2">
        <Header coins={coins}></Header>
        <Banner handelGetFreeCoins={handelGetFreeCoins}></Banner>
        <PlayerBar handelSelected={handelSelected} selected={selected}></PlayerBar>
        {selected ? <SelectedPlayers selectPlayers={selectPlayers} handelSelected={handelSelected} handelRemovePlayer={handelRemovePlayer}></SelectedPlayers> : <Players players={players} handelChoosePlayer={handelChoosePlayer}></Players>}
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
