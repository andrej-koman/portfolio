'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

export default function Nav() {
  const path = usePathname()
  const t = useTranslations()

  return (
    <nav className="grid h-[50px] grid-cols-3 rounded-tr-base border-b-4 border-b-black bg-black text-xl w600:text-lg w400:h-10 w400:text-base portrait:rounded-none">
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase',
          path === '/' ? 'bg-black text-white' : 'bg-main text-black',
        )}
        href="/"
      >
        {t('About.title')}
      </Link>
      <Link
        className={clsx(
          'flex h-full items-center justify-center rounded-tr-base uppercase portrait:rounded-none',
          path === '/work' ? 'bg-black text-white' : 'bg-main text-black',
        )}
        href="/work"
      >
        {t('Projects.title')}
      </Link>
      <Link
        className={clsx(
          'flex h-full items-center justify-center rounded-tr-base uppercase portrait:rounded-none',
          path === '/contact' ? 'bg-black text-white' : 'bg-main text-black',
        )}
        href="/contact"
      >
        {t('Contact.title')}
      </Link>
    </nav>
  )
}
