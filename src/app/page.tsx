'use client'

import {
  IconType,
  SiGithub,
  SiLinkedin,
  SiMaildotru,
} from '@icons-pack/react-simple-icons'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip'

export default function Home() {
  const links: {
    icon: IconType
    href: string
    title: string
    mail?: string
  }[] = [
      {
        icon: SiMaildotru,
        href: 'mailto:andrejkoman@hotmail.com',
        title: 'andrejkoman@hotmail.com',
      },
      {
        icon: SiGithub,
        href: 'https://github.com/andrej-koman',
        title: 'andrej-koman',
      },
      {
        icon: SiLinkedin,
        href: 'https://www.linkedin.com/in/andrej-koman-424883235/',
        title: 'Andrej Koman',
      },
    ]

  return (
    <TooltipProvider delayDuration={250}>
      <div className="p-10 text-xl leading-[1.7] w600:p-[30px] w600:text-lg w400:p-5 w400:text-base">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          doloremque dolores accusamus rerum hic unde!
        </p>

        <br />

        <p>
          This is the windowed portfolio neobrutalism template. Check the{' '}
          <a
            className="font-bold underline"
            target="_blank"
            href="https://github.com/neobrutalism-templates/windowed-portfolio"
          >
            github repo
          </a>{' '}
          for more info.
        </p>

        <div className="mr-auto mt-10 flex w-full flex-wrap items-center gap-10">
          {links.map((link, id) => {
            return (
              <Tooltip key={id}>
                <TooltipTrigger asChild>
                  <a target="_blank" href={link.href}>
                    <link.icon title="" />
                  </a>
                </TooltipTrigger>
                <TooltipContent sideOffset={5} align="center">
                  <div className="flex items-center gap-2">
                    <link.icon title="" />
                    <span>{link.title}</span>
                  </div>
                </TooltipContent>
              </Tooltip>
            )
          })}
        </div>
      </div>
    </TooltipProvider>
  )
}
