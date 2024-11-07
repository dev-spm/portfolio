import Header from './components/Header'
import Resumen from './components/Resumen'
import Proyectos from './components/Proyectos'

import Wave from './assets/Wave'

function App() {
  return (
    <main className="flex flex-col items-center min-h-screen mx-auto sm:px-10 bg-gradient-to-t from-slate-800 via-slate-700 to-slate-600">
      <Wave />
      <Header />
      <Resumen />
      <Proyectos />
      <div className='min-h-screen'>

      </div>
    </main>
  )
}

export default App
