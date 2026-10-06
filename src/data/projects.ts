export type Locale = 'en' | 'sl';
export const LOCALES: Locale[] = ['en', 'sl'];

export const NAME = 'Andrej Koman';
export const EMAIL = 'andrej@koman.dev';

const ICON = (s: string) =>
  `url(https://cdn.jsdelivr.net/npm/simple-icons@13/icons/${s}.svg) center/contain no-repeat`;

const TECH: Record<string, [string, string]> = {
  ts: ['TypeScript', 'typescript'], js: ['JavaScript', 'javascript'], react: ['React', 'react'], node: ['Node.js', 'nodedotjs'],
  html: ['HTML5', 'html5'], python: ['Python', 'python'], pandas: ['pandas', 'pandas'], sklearn: ['scikit-learn', 'scikitlearn'],
  kotlin: ['Kotlin', 'kotlin'], android: ['Android', 'android'], java: ['Java', 'openjdk'], postgres: ['PostgreSQL', 'postgresql'],
  git: ['Git', 'git'], docker: ['Docker', 'docker'],
};

export const tech = (k: string) => ({ name: TECH[k][0], mask: ICON(TECH[k][1]) });
export const techName = (k: string) => TECH[k][0];
export const ABOUT_STACK = ['ts', 'js', 'react', 'node', 'python', 'java', 'kotlin', 'postgres', 'git', 'docker'];

interface ProjectText { desc: string; role: string; problem: string; built: string }
export interface Project { slug: string; name: string; year: string; tech: string[]; en: ProjectText; sl: ProjectText }

export const PROJECTS: Project[] = [
  { slug: 'echo', name: 'Echo', year: '2025', tech: ['ts', 'react', 'node'],
    en: { desc: 'Note and task taking app.', role: 'Solo project',
      problem: 'Notes and to-dos usually end up spread across different apps. I wanted one simple place for both.',
      built: 'A note and task app with a clean, fast interface, where notes and tasks live side by side and are easy to find again.' },
    sl: { desc: 'Aplikacija za zapiske in opravila.', role: 'Samostojni projekt',
      problem: 'Zapiski in opravila se običajno razpršijo po različnih aplikacijah. Želel sem eno preprosto mesto za oboje.',
      built: 'Aplikacija za zapiske in opravila s preprostim, hitrim vmesnikom, kjer so zapiski in opravila skupaj in jih je lahko znova najti.' } },
  { slug: 'mojcaos', name: 'MojcaOS', year: '2025', tech: ['js', 'html'],
    en: { desc: 'A game made for my girlfriend as a fun project.', role: 'Personal project',
      problem: 'A personal gift: something more fun and more personal than a card.',
      built: 'A small game styled like a tiny operating system, filled with inside jokes and hidden surprises.' },
    sl: { desc: 'Igra, narejena za moje dekle kot zabaven projekt.', role: 'Osebni projekt',
      problem: 'Osebno darilo: nekaj bolj zabavnega in osebnega kot voščilnica.',
      built: 'Majhna igra v slogu malega operacijskega sistema, polna internih šal in skritih presenečenj.' } },
  { slug: 'pixelbit', name: 'PixelBit', year: '2024', tech: ['kotlin', 'android'],
    en: { desc: 'A small mobile game made for my school project.', role: 'School project',
      problem: 'The assignment was to design and build a complete mobile game from scratch.',
      built: 'A small pixel-art game for mobile with simple touch controls, levels and a score system.' },
    sl: { desc: 'Majhna mobilna igra, narejena za šolski projekt.', role: 'Šolski projekt',
      problem: 'Naloga je bila od začetka zasnovati in izdelati celotno mobilno igro.',
      built: 'Majhna pixel-art igra za mobilne naprave s preprostim upravljanjem na dotik, stopnjami in točkovanjem.' } },
  { slug: 'watt4cast', name: 'watt4cast', year: '2024', tech: ['python', 'pandas', 'sklearn'],
    en: { desc: 'Student project on FERI, where we created a solar panel production forecast model.', role: 'Team project, FERI',
      problem: 'Solar production depends heavily on the weather, which makes it hard to plan energy use ahead of time.',
      built: 'As a team we combined historical production and weather data and trained a model that forecasts solar panel output.' },
    sl: { desc: 'Študentski projekt na FERI, kjer smo razvili model za napoved proizvodnje sončnih elektrarn.', role: 'Skupinski projekt, FERI',
      problem: 'Proizvodnja sončne energije je močno odvisna od vremena, zato je porabo težko načrtovati vnaprej.',
      built: 'V skupini smo združili zgodovinske podatke o proizvodnji in vremenu ter naučili model, ki napoveduje proizvodnjo sončnih panelov.' } },
];

/** Project resolved for one locale, with tech expanded. */
export const localize = (p: Project, lang: Locale) => ({
  slug: p.slug, name: p.name, year: p.year,
  tech: p.tech.map(tech),
  stackText: p.tech.map(techName).join(' · '),
  ...p[lang],
});
