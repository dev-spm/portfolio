

export default function Footer() {
  return (
    <div id="contact" className="flex flex-col justify-between mt-16 h-full w-screen px-16 sm:px-24 md:px-36 lg:px-48 xl:px-60 py-5 bg-[rgba(255,255,255,0.1)] text-slate-50">
      <div className="flex h-full flex-col">
        <div className="mb-3 font-bold">
          <p>Datos de contacto</p>
        </div>
        <div className="">
          <p>Tlfn: +34 678970643</p>
        </div>
        <div className="">
          <p>e-mail: hola@spmanuel.es</p>
        </div>
      </div>
      <div className="w-full border-t-2 border-dashed border-gray-300 my-5"></div>
      <div className="flex h-full items-end justify-end">
        <p>&copy; {new Date().getFullYear()} Manuel Sánchez Pérez. Todos los derechos reservados.</p>
      </div>
    </div>
  )
}