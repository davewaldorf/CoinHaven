import { Welcome, Navbar, Footer, Transactions, Services } from './components'
import './App.css'

function App() {
  return (
    <div className="min-h-screen gradient-bg-welcome">
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
      </div>
  )
}

export default App
