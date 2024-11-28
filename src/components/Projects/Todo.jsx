
export default function Todo() {
  return (
    <div id="block" className="bg-[rgba(255,255,255,0.1)] flex flex-col gap-5 md:flex-row p-5 md:p-14 rounded-xl 
                                items-center md:items-start text-center md:text-start ">
      <div className="flex flex-col w-full h-full md:w-1/2">
        <div>
          <p className="text-xl mb-3 md:text-2xl lg:text-2xl font-bold">
            To-Do App
          </p>
          <p className="sm:text-lg lg:text-xl">
            Aplicación web para gestionar listas de tareas pendientes. Creada con
            <a className="font-bold bg-gradient-to-r from-red-800 to-red-300 text-transparent bg-clip-text"> ExpressJS </a>
            y
            <a className="font-bold bg-gradient-to-r from-red-800 to-red-300 text-transparent bg-clip-text"> React + TailwindCSS </a>
          </p>
        </div>
        <div className="mt-5">
          <button className="rounded-lg px-5 py-1 bg-gray-500 hover:text-red-400 hover:bg-gray-700">
            <a href="https://github.com/dev-spmanuel/todo-app" target="_blank" rel="noopener noreferrer" className="font-bold">
              Ver en GitHub <i className="fas fa-external-link-alt ml-2"></i>
            </a>
          </button>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl h-auto w-3/4 mb-3 md:mb-0 md:w-1/2 text-center">
        <img className="w-full h-full object-cover" src="/img/todo.png" />
      </div>
    </div>
  )
}