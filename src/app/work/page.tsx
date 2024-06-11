import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import {
  SiNextdotjs,
  SiThreedotjs,
  SiPostgresql,
  SiClerk,
  SiPosthog,
  SiSvelte,
  SiExpress,
  SiGodotengine,
  SiMongodb,
  SiSqlite,
} from '@icons-pack/react-simple-icons'

export default function Page() {
  const projects = [
    {
      name: 'speed typing',
      description:
        'A game for testing and improving your typing skills, that includes leaderboards, selecting and replaying certain quotes and a 3D representation.',
      liveLink: 'https://www.speedtyping.org',
      images: [
        '/speedtyping/speedtyping1.PNG',
        '/speedtyping/speedtyping2.PNG',
        '/speedtyping/speedtyping3.PNG',
      ],
      techStack: [
        { icon: SiNextdotjs, name: 'Next.js' },
        { icon: SiThreedotjs, name: 'Three.js' },
        { icon: SiPostgresql, name: 'PostgreSQL' },
        { icon: SiClerk, name: 'Clerk' },
        { icon: SiPosthog, name: 'Posthog' },
      ],
      repoUrl: 'https://github.com/andrej-koman/hitrostnotipkanje/',
    },
    {
      name: 'spotify stats',
      description:
        'A web application that allows you to see your Spotify statistics, such as your top artists, tracks and recently played.',
      images: [
        '/spotifystats/spotifystats1.PNG',
        '/spotifystats/spotifystats2.PNG',
        '/spotifystats/spotifystats3.PNG',
      ],
      techStack: [
        {
          icon: SiSvelte,
          name: 'Svelte',
        },
        {
          icon: SiExpress,
          name: 'Express',
        },
      ],
      repoUrl: 'https://github.com/andrej-koman/spotify-stats',
    },
    {
      name: 'PixelQuest',
      description:
        'A short action RPG game, made for a school project. It includes a simple combat system, potion pickups, a boss fight, local and cloud saves.',
      images: [
        '/pixelquest/pixelquest1.PNG',
        '/pixelquest/pixelquest2.PNG',
        '/pixelquest/pixelquest3.PNG',
        '/pixelquest/pixelquest4.PNG',
      ],
      techStack: [
        {
          icon: SiGodotengine,
          name: 'Godot',
        },
        {
          icon: SiMongodb,
          name: 'MongoDB',
        },
        {
          icon: SiSqlite,
          name: 'SQLite',
        },
      ],
      repoUrl: 'https://github.com/andrej-koman/pixelquest',
    },
  ]

  return (
    <TooltipProvider delayDuration={0}>
      <>
        {projects.map((project, id) => {
          return (
            <div
              className="border-b-4 border-r-4 border-b-black border-r-black bg-bg p-8 py-10 w600:px-[30px] w400:px-5"
              key={id}
            >
              <div className="mx-auto w-3/4 w800:w-full">
                <Carousel className="!-bottom-[2px] rounded-base border-2 border-black shadow-base">
                  <CarouselContent>
                    {project.images.map((image, id) => (
                      <CarouselItem key={id}>
                        <AspectRatio
                          ratio={project.name !== 'PixelQuest' ? 2 / 1 : 16 / 9}
                        >
                          <img
                            className="w-full rounded-base"
                            src={`${image}`}
                            alt={project.name}
                          />
                        </AspectRatio>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselNext className="w800:hidden" />
                  <CarouselPrevious className="w800:hidden" />
                </Carousel>

                <div className="mt-6">
                  <h2 className="text-3xl font-bold w700:text-2xl w450:text-xl">
                    {project.name}
                  </h2>

                  <p className="mt-5 text-lg w450:text-base">
                    {project.description}
                  </p>
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-5 text-base w400:text-sm">
                      {project.liveLink && (
                        <a
                          className="cursor-pointer rounded-base border-2 border-black bg-main px-4 py-2 text-center uppercase shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                          href={project.liveLink}
                          target="_blank"
                        >
                          Visit
                        </a>
                      )}
                      <a
                        className="cursor-pointer rounded-base border-2 border-black bg-main px-4 py-2 text-center uppercase shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
                        href={project.repoUrl}
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      {project.techStack.map((tech, id) => {
                        const Icon = tech.icon

                        return (
                          <Tooltip key={id}>
                            <TooltipTrigger asChild>
                              <Icon title="" className="h-8 w-8" />
                            </TooltipTrigger>
                            <TooltipContent>{tech.name}</TooltipContent>
                          </Tooltip>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </>
    </TooltipProvider>
  )
}
