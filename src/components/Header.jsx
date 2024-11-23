import { useState } from 'react'

import logo from '/icono.svg'
import Menu from '../assets/Menu'

export default function Header() {
  let Links = [
    { name: 'Resumen', href: '#dashboard' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ]

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full md:w-4/5 xl:w-3/4 sm:sticky z-10 sm:top-0 bg-neutral-800 border border-transparent 
                  sm:rounded-full px-10 sm:px-7 py-5 sm:mt-5 text-white sm:flex justify-between items-center">
      <div className="flex justify-between">
        <img className="flex w-16" src={logo} />
        <div onClick={() => setIsOpen(!isOpen)} className='sm:hidden flex items-center cursor-pointer'>
          {
            console.log(isOpen)
          }
          <Menu />
        </div>
      </div>
      <ul className={`sm:flex sm:flex-1 sm:flex-row flex-col items-center space-y-5 sm:space-y-0 sm:pl-0 sm:items-center 
                      sm:justify-center sm:pt-0 pt-5 ${isOpen ? 'flex' : 'hidden'} lg:text-lg text-base`}>
        {
          Links.map((link) => (
            <li key={link.name} className="sm:ml-8 hover:text-red-500">
              <a href={link.href}>{link.name}</a>
            </li>
          ))
        }
      </ul>

    </div >

  )
}