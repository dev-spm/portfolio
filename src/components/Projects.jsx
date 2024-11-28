import Portfolio from "./Projects/Portfolio";
import Ecommerce from "./Projects/Ecommerce";
import Todo from "./Projects/Todo";

export default function Projects() {
  return (
    <div id="projects" className="text-white flex flex-col gap-10 w-full py-32 px-14 md:px-24 xl:px-48 2xl:px-56 h-full my-10">
      <div>
        <div className="text-3xl font-bold text-center">
          Proyectos
        </div>
        <div className="text-lg text-center">
          Algunos de los proyectos en los que he trabajado.
        </div>
      </div>
      <Ecommerce />
      <Todo />
      {/* <Portfolio /> */}
    </div>
  )
}