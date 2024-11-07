

export default function Header() {
  return (
    <div className="sticky top-0 flex overflow-auto w-full md:w-3/4 shadow-md shadow-slate-600 bg-slate-600 border
                border-slate-600 sm:rounded-full px-7 py-5 sm:mt-5 text-white text-center 
                lg:text-xl md:text-base text-sm items-center justify-between">
      <div className="justify-start md:mr-6 mr-4">
        Icono
      </div>
      <div className="space-x-10 lg:text-base md:text-sm text-xs">
        <a>
          Resumen
        </a>
        <a>
          Proyectos
        </a>
        <a>
          Sobre mí
        </a>
        <a>
          Contacto
        </a>
      </div>
      <div className="md:ml-6 ml-4">
        Tema
      </div>
    </div>
  )
}