import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { Analytics } from '@vercel/analytics/react'
import LanguageSelect from '@/components/language-select'
import { getLocale, getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { Toaster } from '@/components/ui/toaster'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andrej Koman',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <script
          defer
          data-domain="andrej.tech"
          src="https://analytics.andrej.tech/js/script.js"
        ></script>
      </head>
      <NextIntlClientProvider messages={messages}>
        <body className={archivo.className}>
          <div className="grid h-[800px] max-h-[100dvh] w-[1000px] max-w-[1000px] grid-cols-[100px_auto] rounded-base shadow-[10px_10px_0_0_#000] outline outline-4 outline-black w600:grid-cols-[70px_auto] w500:grid-cols-1 portrait:h-[100dvh]">
            <header className="relative flex items-center justify-center rounded-l-base border-r-4 border-r-black bg-main w500:hidden portrait:rounded-none">
              <h1 className="-rotate-90 whitespace-nowrap text-[40px] font-bold tracking-[4px] smallHeight:text-[30px] smallHeight:tracking-[2px] w600:text-[30px] w600:tracking-[2px]">
                <span className="inline-block">ANDREJ KOMAN</span>
              </h1>
            </header>
            <main className="relative flex h-[800px] max-h-[100dvh] flex-col rounded-br-base rounded-tr-base bg-bg font-semibold portrait:h-[100dvh] portrait:max-h-[100dvh] portrait:rounded-none">
              <Nav />
              <div className="main h-full max-h-[750px] overflow-y-auto portrait:max-h-[calc(100dvh-50px)]">
                {children}
                <Analytics />
              </div>
            </main>
          </div>

          <LanguageSelect locale={locale} />
          <Toaster />
        </body>
      </NextIntlClientProvider>
    </html>
  )
}
