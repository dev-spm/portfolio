

export default function Resumen() {
  return (
    <div className="">
      <div className='flex flex-col mt-12 sm:mt-24 md:mt-32 lg:mt-48 h-screen sm:flex-row gap-7 sm:gap-0 text-slate-100 justify-start items-center sm:items-start'>
        <div className="flex flex-col w-1/2 sm:pl-14">
          <div className="lg:text-4xl md:text-3xl text-2xl">
            <a className="font-bold bg-gradient-to-r from-rose-900 to-slate-800 text-transparent bg-clip-text">
              ¡Hola!
            </a>
            <a>
              , soy Manuel Sánchez Pérez.
            </a>
          </div>
          <a className="text-lg md:text-xl">
            Un desarrollador de sotfware apasionado por la tecnología. Me encanta enfrentarme a nuevos retos.
          </a>
        </div>
        <div className="flex w-1/2 justify-center">
          <img className="rounded-lg w-60 h-90 shadow-2xl" src="../../img/perfil.jpg" />
        </div>
      </div>
    </div>
  )
}