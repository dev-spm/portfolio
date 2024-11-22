

export default function Projects() {
  return (
    <div className="flex flex-col gap-10 justify-start w-full pt-10 px-14 md:px-20 lg:px-24 h-full">
      <div className="">
        <div className="text-3xl font-bold text-center text-slate-100">
          Proyectos
        </div>
        <div className="text-lg text-center text-slate-100">
          Algunos de los proyectos en los que he trabajado.
        </div>
      </div>
      <div id="block" className="bg-slate-700 flex flex-col gap-5 md:flex-row p-5 md:p-14 rounded-lg 
                                items-center md:items-start text-center md:text-start">
        <div className="flex flex-col w-full md:w-1/2 text-slate-50 items-center md:items-start">
          <p className="text-xl mb-3 md:text-2xl lg:text-2xl font-bold">
            Portfolio
          </p>
          <p className="sm:text-lg lg:text-xl">
            <a>Página web personal creada con </a>
            <a className="font-bold bg-slate-950 text-transparent bg-clip-text">React </a>
            <a>y </a>
            <a className="font-bold bg-slate-950 text-transparent bg-clip-text">TailwindCSS</a>
          </p>
        </div>
        <div className="overflow-hidden border rounded-lg h-auto w-3/4 mb-3 md:mb-0 md:w-1/2 text-center">
          <img className="w-full h-full object-cover" src="/img/portfolio.png" />
        </div>
      </div>
    </div>
  )
}