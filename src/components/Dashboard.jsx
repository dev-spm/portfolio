

export default function Dashboard() {
  return (
    <div id="dashboard">
      <div className='flex flex-col my-32 md:my-56 md:h-full md:flex-row gap-7 md:gap-0
                    text-slate-100 justify-start items-center'>
        <div className="overflow-auto flex w-full sm:w-1/2 justify-center">
          <img className="rounded-lg w-1/2 max-w-60 sm:w-3/5 sm:max-w-72 sm:min-w-52 md:min-w-44 shadow-2xl" src="/img/perfil.jpg" />
        </div>
        <div className="flex flex-col w-1/2 sm:pr-12 md:pr-28 lg:pr-48">
          <div className="lg:text-4xl md:text-3xl text-2xl mb-6">
            <p>
              <a className="font-bold bg-gradient-to-r from-red-800 to-red-300 text-transparent bg-clip-text">
                ¡Hola!
              </a>
              , soy Manuel.
            </p>
          </div>
          <p className="sm:text-lg md:text-xl">
            Un desarrollador de sotfware apasionado por la tecnología y graduado en ingeniería informática.
          </p>
        </div>

      </div>
    </div>
  )
}