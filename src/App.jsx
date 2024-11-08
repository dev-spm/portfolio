import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Projects from './components/Projects'
import Footer from './components/Footer'

import Wave from './assets/Wave'

function App() {
  return (
    <main className="font-Raleway flex flex-col items-center w-screen mx-auto sm:px-10 
                    bg-gradient-to-t from-slate-800 via-slate-700 to-slate-600">
      <Wave />
      <Header />
      <Dashboard />
      <Projects />
      <div className='min-h-screen'></div>
      <Footer />
    </main>
  )
}

export default App
