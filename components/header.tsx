import Link from 'next/link'
import { Mail } from 'lucide-react'

import Logo from './svgs/logo'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'

export default function Header(): React.ReactElement {
  return (
    <header className="w-full h-auto font-poppins left-0 right-0 supports-backdrop-blur:bg-transparent sticky top-0 z-50 bg-transparent backdrop-blur-sm">
      <nav className="w-full h-[80px] container flex justify-between items-center ">
        <Logo />
        <div className="flex items-center justify-center gap-[50px] px-[10px] dark:text-gray-300">
          <Link className="font-light text-[18px] text-center" href="#">
            Habilidades
          </Link>
          <Link className=" font-light text-[18px] text-center" href="#">
            Mis proyectos
          </Link>
          <Link className=" font-light text-[18px] text-center" href="#">
            Contantos
          </Link>
        </div>
        <div className="flex justify-center items-center px-3 gap-5">
          <ModeToggle />
          <Button>
            <Mail className="mr-2 h-4 w-4" /> Contratame
          </Button>
        </div>
      </nav>
    </header>
  )
}
