import { useState, useEffect } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import PlayerBar from "./components/PlayerBar"
import Players from "./components/Players"

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(res => setPlayers(res))
  }, [])

  return (
    <>
      <main className="container mx-auto px-2">
        <Header></Header>
        <Banner></Banner>
        <PlayerBar></PlayerBar>
        <Players players={players}></Players>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
