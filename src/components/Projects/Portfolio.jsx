
export default function Portfolio() {
  return (
    <div id="block" className="bg-[rgba(255,255,255,0.1)] flex flex-col gap-5 md:flex-row p-5 md:p-14 rounded-xl 
                                items-center md:items-start text-center md:text-start ">
      <div className="flex flex-col w-full md:w-1/2 items-center md:items-start">
        <p className="text-xl mb-3 md:text-2xl lg:text-2xl font-bold">
          Portfolio
        </p>
        <p className="sm:text-lg lg:text-xl">
          Página web personal creada con
          <a className="font-bold bg-gradient-to-r from-red-800 to-red-300 text-transparent bg-clip-text"> React </a>
          y
          <a className="font-bold bg-gradient-to-r from-red-800 to-red-300 text-transparent bg-clip-text"> TailwindCSS </a>
        </p>
      </div>
      <div className="overflow-hidden rounded-xl h-auto w-3/4 mb-3 md:mb-0 md:w-1/2 text-center">
        <img className="w-full h-full object-cover" src="/img/portfolio.png" />
      </div>
    </div>
  )
}