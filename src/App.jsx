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

  // ! Add & Remove Coins;
  const [coins, setCoins] = useState(0);

  const handelGetFreeCoins = (status, quantity) => {
    if (status === 'add') setCoins(coins + quantity);
    if (status === 'remove') {
      if (coins < quantity) return alert("You Haven't Enough Money !!");
      setCoins(coins - quantity);
    }
  }

  // ! Choose Player Button;
  const [selectPlayers, setSelectPlayers] = useState([]);

  const handelChoosePlayer = (player) => {
    const { playerId, biddingPrice } = player;
    const isExist = selectPlayers.find(selectPlayer => selectPlayer.playerId === playerId);

    if (selectPlayers.length >= 6) {
      return alert("Already 6 Player Added !!");
    } else if (isExist) {
      return alert("Already Choose This Player !!");
    } else if (coins < biddingPrice) {
      return;
    }
    setSelectPlayers([...selectPlayers, player]);
  }

  // ! Remove Button;
  const handelRemovePlayer = (player) => {
    const { playerId } = player;
    const newSelectPlayers = selectPlayers.filter(selectPlayer => selectPlayer.playerId !== playerId);

    setSelectPlayers(newSelectPlayers);
  }


  return (
    <>
      <main className="container mx-auto px-2">
        <Header coins={coins}></Header>
        <Banner handelGetFreeCoins={handelGetFreeCoins}></Banner>
        <PlayerBar handelSelected={handelSelected} selected={selected} selectPlayersCount={selectPlayers.length}></PlayerBar>
        {selected ? <SelectedPlayers selectPlayers={selectPlayers} handelSelected={handelSelected} handelRemovePlayer={handelRemovePlayer}></SelectedPlayers> : <Players players={players} handelChoosePlayer={handelChoosePlayer} handelGetFreeCoins={handelGetFreeCoins}></Players>}
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
