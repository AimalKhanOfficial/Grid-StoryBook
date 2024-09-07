import { Tile } from "./components/Tile"

function App() {
  return (
    <>
      <div className="flex justify-around">
        <Tile title={'Revenue'} />
        <Tile title={'Payments'} />
        <Tile title={'Refunds'} />
        <Tile title={'Payouts'} />
      </div>
    </>
  )
}

export default App
