export type Locale = 'en' | 'sl';
export const LOCALES: Locale[] = ['en', 'sl'];

export const NAME = 'Andrej Koman';
export const EMAIL = 'andrej@koman.dev';
export const GITHUB = 'https://github.com/andrej-koman';
export const LINKEDIN = 'https://www.linkedin.com/in/andrej-koman-424883235/';

const ICON = (s: string) =>
  `url(/icons/${s}.svg) center/contain no-repeat`;

const TECH: Record<string, [string, string]> = {
  ts: ['TypeScript', 'typescript'], js: ['JavaScript', 'javascript'], react: ['React', 'react'], node: ['Node.js', 'nodedotjs'],
  html: ['HTML5', 'html5'], python: ['Python', 'python'], pandas: ['pandas', 'pandas'], sklearn: ['scikit-learn', 'scikitlearn'],
  kotlin: ['Kotlin', 'kotlin'], android: ['Android', 'android'], java: ['Java', 'openjdk'], postgres: ['PostgreSQL', 'postgresql'],
  git: ['Git', 'git'], docker: ['Docker', 'docker'],
  nextjs: ['Next.js', 'nextdotjs'], cassandra: ['Cassandra', 'apachecassandra'], godot: ['Godot', 'godotengine'],
  vue: ['Vue', 'vuedotjs'], php: ['PHP', 'php'], csharp: ['C#', 'csharp'], smalltalk: ['Smalltalk', 'smalltalk'],
  mysql: ['MySQL', 'mysql'], elastic: ['Elasticsearch', 'elasticsearch'],
  threejs: ['Three.js', 'threedotjs'], clerk: ['Clerk', 'clerk'], posthog: ['PostHog', 'posthog'],
  svelte: ['Svelte', 'svelte'], express: ['Express', 'express'],
  sqlite: ['SQLite', 'sqlite'], mongodb: ['MongoDB', 'mongodb'], reactnative: ['React Native', 'react'],
};

export const tech = (k: string) => ({ name: TECH[k][0], mask: ICON(TECH[k][1]) });
export const techName = (k: string) => TECH[k][0];
export const ABOUT_STACK = [
  { key: 'frontend', items: ['vue', 'react'] },
  { key: 'backend', items: ['php', 'csharp', 'smalltalk'] },
  { key: 'database', items: ['mysql', 'mongodb', 'elastic'] },
  { key: 'devops', items: ['docker'] },
] as const;

interface ProjectText { desc: string; role: string; problem: string; built: string }
export interface Project { slug: string; name: string; year: string; tech: string[]; images?: string[]; links?: { web?: string; github?: string }; en: ProjectText; sl: ProjectText }

export const PROJECTS: Project[] = [
  { slug: 'pixelquest', name: 'PixelQuest', year: '2024', tech: ['godot', 'sqlite', 'mongodb'],
    images: [1, 2, 3, 4].map(i => `/pixelquest/pixelquest${i}.PNG`),
    links: { github: 'https://github.com/andrej-koman/pixelquest' },
    en: { desc: 'A mobile game made in Godot for a school course project.', role: 'Developer, school project',
      problem: 'The assignment for the mobile course was to build a mobile app. I took it as a challenge and made a game with levels and a boss fight instead.',
      built: 'A mobile game in Godot that stores data locally in SQLite and keeps cloud saves in MongoDB.' },
    sl: { desc: 'Mobilna igra, narejena v Godotu za projekt pri šolskem predmetu.', role: 'Razvijalec, šolski projekt',
      problem: 'Naloga pri predmetu o mobilnih aplikacijah je bila izdelati mobilno aplikacijo. Sprejel sem jo kot izziv in namesto tega naredil igro s stopnjami in spopadom s šefom.',
      built: 'Mobilna igra v Godotu, ki podatke lokalno hrani v SQLite, shranjene igre v oblaku pa v MongoDB.' } },
  { slug: 'speedtyping', name: 'Speed Typing', year: '2023', tech: ['nextjs', 'threejs', 'postgres', 'clerk', 'posthog'],
    images: [1, 2, 3].map(i => `/speedtyping/speedtyping${i}.PNG`),
    links: { github: 'https://github.com/andrej-koman/speedtyping' },
    en: { desc: 'A game for testing and improving your typing skills, with leaderboards and a 3D representation.', role: 'Solo developer, personal project',
      problem: 'I wanted a typing game that makes practice more fun and lets you compete with others.',
      built: 'A Next.js game with leaderboards, picking and replaying specific quotes, and a 3D representation built with Three.js. Data is stored in PostgreSQL, accounts run through Clerk and usage is tracked with PostHog.' },
    sl: { desc: 'Igra za preizkušanje in izboljšanje veščin tipkanja, z lestvicami najboljših in 3D predstavitvijo.', role: 'Samostojni razvijalec, osebni projekt',
      problem: 'Želel sem igro tipkanja, ki naredi vadbo bolj zabavno in omogoča tekmovanje z drugimi.',
      built: 'Igra v Next.js z lestvicami najboljših, izbiranjem in ponovnim igranjem določenih citatov ter 3D predstavitvijo, narejeno s Three.js. Podatki so shranjeni v PostgreSQL, računi tečejo prek Clerka, uporaba pa se spremlja s PostHogom.' } },
  { slug: 'spotifystats', name: 'Spotify Stats', year: '2023', tech: ['nextjs', 'postgres'],
    images: [1, 2, 3].map(i => `/spotifystats/spotifystats${i}.PNG`),
    links: { github: 'https://github.com/andrej-koman/spotify-stats' },
    en: { desc: 'A web app that shows your Spotify statistics: top artists, top tracks and recently played.', role: 'Solo developer, personal project',
      problem: 'Spotify does not give you an easy way to look at your own listening habits whenever you want.',
      built: 'A Next.js app backed by Postgres that connects to your Spotify account and shows your top artists, top tracks and recently played songs.' },
    sl: { desc: 'Spletna aplikacija, ki prikaže vašo statistiko Spotify: najboljše izvajalce, skladbe in nedavno predvajano.', role: 'Samostojni razvijalec, osebni projekt',
      problem: 'Spotify ne ponuja preproste poti, da bi lahko kadar koli pogledal svoje poslušalske navade.',
      built: 'Aplikacija v Next.js s podatkovno bazo Postgres, ki se poveže z vašim računom Spotify ter prikaže najboljše izvajalce, skladbe in nedavno predvajane pesmi.' } },
  { slug: 'watt4cast', name: 'watt4cast', year: '2023', tech: ['nextjs', 'cassandra', 'python', 'pandas', 'sklearn'],
    images: [1, 2].map(i => `/watt4cast/watt4cast${i}.png`),
    en: { desc: 'Solar panel production forecasting, built with a team of six at FERI.', role: 'Data & database developer, team of 6 at FERI',
      problem: 'Solar production depends heavily on the weather, which makes it hard to plan energy use ahead of time.',
      built: 'As a team we trained a model that forecasts solar panel output. I handled the massive amounts of data and managed the Cassandra database, and designed parts of the Next.js dashboard.' },
    sl: { desc: 'Napoved proizvodnje sončnih panelov, razvita v skupini šestih na FERI.', role: 'Razvijalec podatkov in baze, skupina šestih na FERI',
      problem: 'Proizvodnja sončne energije je močno odvisna od vremena, zato je porabo težko načrtovati vnaprej.',
      built: 'V skupini smo naučili model, ki napoveduje proizvodnjo sončnih panelov. Jaz sem skrbel za ogromne količine podatkov in upravljal podatkovno bazo Cassandra ter oblikoval dele nadzorne plošče v Next.js.' } },
];

/** Project resolved for one locale, with tech expanded. */
export const localize = (p: Project, lang: Locale) => ({
  slug: p.slug, name: p.name, year: p.year, images: p.images ?? [], links: p.links ?? {},
  tech: p.tech.map(tech),
  stackText: p.tech.map(techName).join(' · '),
  ...p[lang],
});
