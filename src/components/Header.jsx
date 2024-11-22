import logo from '/favicon.svg'

export default function Header() {
  return (
    <div className="sticky top-0 flex overflow-auto w-full md:w-4/5 lg:w-2/3 bg-slate-700 border
                border-transparent sm:rounded-full px-7 py-5 sm:mt-5 text-white text-center 
                lg:text-xl md:text-base text-sm items-center justify-between">
      <img className="w-10" src={logo} />
      <div className="flex-1 space-x-10 lg:text-base md:text-sm text-xs">
        <a>Resumen</a>
        <a>Proyectos</a>
        <a>Sobre mí</a>
        <a>Contacto</a>
      </div>
    </div>
  )
}