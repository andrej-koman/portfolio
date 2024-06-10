'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const path = usePathname()

  return (
    <nav className="grid h-[50px] grid-cols-3 rounded-tr-base border-b-4 border-b-black bg-black text-xl w600:text-lg w400:h-10 w400:text-base portrait:rounded-none">
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase',
          path === '/' ? 'bg-black text-white' : 'bg-main text-black',
        )}
        href="/"
      >
        Home
      </Link>
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase',
          path === '/about' ? 'bg-black text-white' : 'bg-main text-black',
        )}
        href="/"
      >
        About
      </Link>
      <Link
        className={clsx(
          'flex h-full items-center justify-center rounded-tr-base uppercase portrait:rounded-none',
          path === '/work' ? 'bg-black text-white' : 'bg-main text-black',
        )}
        href="/work"
      >
        Projects
      </Link>
    </nav>
  )
}
