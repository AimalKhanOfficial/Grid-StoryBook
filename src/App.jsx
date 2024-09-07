import { Footer } from "./components/Footer";
import { Tile } from "./components/Tile";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div>
          <p>Header</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Tile title={'Revenue'} />
          <Tile title={'Payments'} />
          <Tile title={'Refunds'} />
          <Tile title={'Payouts'} />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
