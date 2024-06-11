'use client'
import { Button } from './ui/button'
import { setLocale } from './actions'
import { usePathname } from 'next/navigation'

export default function LanguageSelect({ locale }: { locale: string }) {
  let languages = ['sl', 'en']
  let pathname = usePathname()

  return (
    <div className="absolute right-10 top-14 rounded-base border-2 border-black shadow-base">
      {languages.map((lang) => {
        return (
          <Button
            className={
              lang == locale
                ? 'pointer-events-none bg-main p-3 text-2xl uppercase'
                : 'p-3 text-2xl uppercase hover:bg-main'
            }
            variant="neutral"
            key={lang}
            onClick={() => setLocale(lang, pathname)}
          >
            {lang}
          </Button>
        )
      })}
    </div>
  )
}
