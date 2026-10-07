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
  sqlite: ['SQLite', 'sqlite'], mongodb: ['MongoDB', 'mongodb'], reactnative: ['React Native', 'react'],
};

export const tech = (k: string) => ({ name: TECH[k][0], mask: ICON(TECH[k][1]) });
export const techName = (k: string) => TECH[k][0];
export const ABOUT_STACK = ['ts', 'js', 'react', 'node', 'python', 'java', 'kotlin', 'postgres', 'git', 'docker'];

interface ProjectText { desc: string; role: string; problem: string; built: string }
export interface Project { slug: string; name: string; year: string; tech: string[]; en: ProjectText; sl: ProjectText }

export const PROJECTS: Project[] = [
  { slug: 'echo', name: 'Echo', year: '2026', tech: ['reactnative'],
    en: { desc: 'Voice notes that are transcribed and turned into tasks automatically.', role: 'Solo developer, personal project',
      problem: 'I wanted a good transcription app that would also create tasks for me, instead of copying them out of notes by hand.',
      built: 'A React Native app that uses native on-device models for transcription and task extraction, and the phone\'s built-in storage to keep everything local.' },
    sl: { desc: 'Glasovni zapiski, ki se samodejno prepišejo in pretvorijo v opravila.', role: 'Samostojni razvijalec, osebni projekt',
      problem: 'Želel sem dobro aplikacijo za prepisovanje govora, ki bi mi tudi sama ustvarila opravila, namesto da jih ročno prepisujem iz zapiskov.',
      built: 'Aplikacija v React Native, ki uporablja izvorne modele na napravi za prepisovanje in izločanje opravil ter vgrajeno shranjevanje telefona, tako da vse ostane lokalno.' } },
  { slug: 'mojcaos', name: 'MojcaOS', year: '2026', tech: ['godot'],
    en: { desc: 'A desktop simulator made for my girlfriend, with her favorite colors, pictures and games.', role: 'Developer, personal project',
      problem: 'A personal gift: something more fun and more personal than a card.',
      built: 'A desktop-style simulator in Godot, filled with her favorite colors and pictures, and a few small games made just for her.' },
    sl: { desc: 'Simulator namizja, narejen za moje dekle, z njenimi najljubšimi barvami, slikami in igrami.', role: 'Razvijalec, osebni projekt',
      problem: 'Osebno darilo: nekaj bolj zabavnega in osebnega kot voščilnica.',
      built: 'Simulator v slogu namizja, narejen v Godotu, poln njenih najljubših barv in slik ter nekaj majhnih iger, narejenih samo zanjo.' } },
  { slug: 'pixelquest', name: 'PixelQuest', year: '2024', tech: ['godot', 'sqlite', 'mongodb'],
    en: { desc: 'A mobile game made in Godot for a school course project.', role: 'Developer, school project',
      problem: 'The assignment for the mobile course was to build a mobile app. I took it as a challenge and made a game with levels and a boss fight instead.',
      built: 'A mobile game in Godot that stores data locally in SQLite and keeps cloud saves in MongoDB.' },
    sl: { desc: 'Mobilna igra, narejena v Godotu za projekt pri šolskem predmetu.', role: 'Razvijalec, šolski projekt',
      problem: 'Naloga pri predmetu o mobilnih aplikacijah je bila izdelati mobilno aplikacijo. Sprejel sem jo kot izziv in namesto tega naredil igro s stopnjami in spopadom s šefom.',
      built: 'Mobilna igra v Godotu, ki podatke lokalno hrani v SQLite, shranjene igre v oblaku pa v MongoDB.' } },
  { slug: 'watt4cast', name: 'watt4cast', year: '2023', tech: ['nextjs', 'cassandra', 'python', 'pandas', 'sklearn'],
    en: { desc: 'Solar panel production forecasting, built with a team of six at FERI.', role: 'Data & database developer, team of 6 at FERI',
      problem: 'Solar production depends heavily on the weather, which makes it hard to plan energy use ahead of time.',
      built: 'As a team we trained a model that forecasts solar panel output. I handled the massive amounts of data and managed the Cassandra database, and designed parts of the Next.js dashboard.' },
    sl: { desc: 'Napoved proizvodnje sončnih panelov, razvita v skupini šestih na FERI.', role: 'Razvijalec podatkov in baze, skupina šestih na FERI',
      problem: 'Proizvodnja sončne energije je močno odvisna od vremena, zato je porabo težko načrtovati vnaprej.',
      built: 'V skupini smo naučili model, ki napoveduje proizvodnjo sončnih panelov. Jaz sem skrbel za ogromne količine podatkov in upravljal podatkovno bazo Cassandra ter oblikoval dele nadzorne plošče v Next.js.' } },
];

/** Project resolved for one locale, with tech expanded. */
export const localize = (p: Project, lang: Locale) => ({
  slug: p.slug, name: p.name, year: p.year,
  tech: p.tech.map(tech),
  stackText: p.tech.map(techName).join(' · '),
  ...p[lang],
});
