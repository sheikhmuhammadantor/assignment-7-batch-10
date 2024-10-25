import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import PlayerBar from "./components/PlayerBar"

function App() {

  return (
    <>
      <main className="container mx-auto px-2">
        <Header></Header>
        <Banner></Banner>
        <PlayerBar></PlayerBar>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
