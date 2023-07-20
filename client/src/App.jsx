import { Welcome, Navbar, Footer, Transactions, Services } from './components'

function App() {
  return (
    <div className="min-h-screen flex items-center flex-wrap">
      <Navbar />
      <Welcome />
      <Services />
      <Transactions />
      <Footer />
      </div>
  )
}

export default App
