import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <main className="font-Raleway flex flex-col items-center w-screen mx-auto sm:px-12 md:px-24 lg:px-36 bg-black">
      <Header />
      <Dashboard />
      <Projects />
      <div className='min-h-screen'></div>
      <Footer />
    </main>
  )
}

export default App
