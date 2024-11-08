

export default function Dashboard() {
  return (
    <div className="">
      <div className='flex flex-col my-16 sm:my-24 md:my-36 lg:my-48 md:h-full md:flex-row gap-7 md:gap-0
                    text-slate-100 justify-start items-center'>
        <div className="flex flex-col w-1/2 sm:pl-14">
          <div className="lg:text-4xl md:text-3xl text-2xl">
            <a className="font-bold bg-gradient-to-r from-rose-900 to-slate-800 text-transparent bg-clip-text">
              ¡Hola!
            </a>
            <a>, soy Manuel Sánchez Pérez.</a>
          </div>
          <a className="text-lg md:text-xl">
            Un desarrollador de sotfware apasionado por la tecnología. Me encanta enfrentarme a nuevos retos.
          </a>
        </div>
        <div className="overflow-auto flex w-full sm:w-1/2 justify-center">
          <img className=" rounded-lg w-1/2 sm:w-3/5 sm:max-w-80 shadow-2xl" src="/img/perfil.jpg" />
        </div>
      </div>
    </div>
  )
}