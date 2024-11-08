

export default function Projects() {
  return (
    <div className="flex flex-col gap-10 justify-start w-full pt-10 px-14 md:px-24 h-full">
      <div className="">
        <div className="text-3xl font-bold text-center text-slate-100">
          Proyectos
        </div>
        <div className="text-lg text-center text-slate-100">
          Algunos de los proyectos en los que he trabajado.
        </div>
      </div>
      <div id="block" className="bg-slate-500/50 flex flex-col gap-5 md:flex-row p-5 md:p-14 rounded-lg 
                                shadow-lg shadow-slate-500 items-center md:items-start text-center md:text-start">
        <div className="flex flex-col w-full md:w-1/2 text-slate-50 items-center md:items-start">
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            Portfolio
          </p>
          <p className="lg:text-lg">
            <a>Página web personal creada con </a>
            <a className="font-bold bg-gradient-to-r from-rose-900 to-slate-800 text-transparent bg-clip-text">React </a>
            <a>y </a>
            <a className="font-bold bg-gradient-to-r from-rose-900 to-slate-800 text-transparent bg-clip-text">TailwindCSS</a>
          </p>
        </div>
        <div className="border h-40 w-36 md:w-1/2 bg-slate-500/50 text-center">Imagen</div>
      </div>
    </div>
  )
}