import { Button } from './ui/button'

export default function LanguageSelect() {
  let languages = ['sl', 'en']
  let selectedLanguage = 'en'

  return (
    <div className="absolute right-10 top-14 rounded-base border-2 border-black shadow-base">
      {languages.map((lang) => {
        return lang == selectedLanguage ? (
          <Button
            className="pointer-events-none bg-main p-3 text-2xl uppercase"
            variant="neutral"
            value={lang}
            key={lang}
          >
            {lang}
          </Button>
        ) : (
          <Button
            className="p-3 text-2xl uppercase hover:bg-main"
            key={lang}
            variant="neutral"
          >
            {lang}
          </Button>
        )
      })}
    </div>
  )
}
