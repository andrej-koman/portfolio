import type { Locale } from './projects';

export const T = {
  en: {
    nav: ['Projects', 'About', 'Contact'],
    heroTitle: 'Andrej Koman, software developer.',
    heroSub: 'A small selection of apps, games and models I have built, from school projects to things made just for fun.',
    projectsLabel: 'Selected projects',
    back: 'All projects', year: 'Year', role: 'Role', problem: 'Problem', built: 'What I built', prev: 'Previous', next: 'Next',
    aboutTitle: 'About',
    aboutP1: 'I am a software developer from Slovenia. I build apps, games and data projects, and I enjoy taking an idea from a rough sketch to something people can actually use.',
    aboutP2: 'Some of my work started as school and faculty projects at FERI, some of it as personal projects made for the people around me.',
    stackLabel: 'Stack',
    eduLabel: 'Education',
    edu: [['2021 — 2024', 'Graduate Engineer of Computer Science and Communication Technologies', 'Faculty of Electrical Engineering and Computer Science, University of Maribor']],
    expLabel: 'Experience',
    exp: [['Jan 2026 — now', 'Senior Software Engineer', 'VIAR'], ['Mar 2025 — Jan 2026', 'Software Engineer', 'Blocksi SAS'], ['Sep 2024 — Mar 2025', 'Software Engineer', 'Comtrade Gaming'], ['Dec 2022 — Sep 2024', 'Software Engineer', 'VIAR'], ['Jan 2022 — Nov 2022', 'Junior Software Engineer', 'E-Računi']],
    testLabel: 'Kind words',
    tests: [["I really enjoyed working with Andrej and will genuinely miss having him as a teammate. He brought a great vibe to our part of the office and was always fun to be around, while also being very sharp and thoughtful about his work.\n\nFrom the moment he joined, he needed very little assistance and took initiative naturally. He integrated into our workflow incredibly fast and quickly became a very valuable part of the team.\n\nHe has a calm way of approaching problems and rarely settled for ‘good enough.’ He never backed down from a challenging task and always pushed to find the right solution. He often went beyond his own tickets and fixed things just because he knew they needed fixing.\n\nHe is easy to work with and great to collaborate with. He is open minded, listens to feedback, and is always up for discussions around implementation details. He constantly looked for ways to improve both his own workflow and the team’s, shared those ideas openly, and went out of his way to help newer teammates with tricky problems.\n\nI also really liked his design sense. He regularly brought his own design ideas into features, and they always looked great. Working with him pushed me to aim higher when it comes to design and code quality.\n\nAny team would be lucky to have him.", 'Luka Mlinarič Fekonja', 'Software Engineer, Blocksi']],
    contactTitle: 'Contact',
    contactSub: 'Open to collaborations, freelance work and full-time roles. Send me an email or use the form below.',
    more: 'More…', less: 'Less', copy: 'copy', copied: 'copied', cv: 'Download CV', emailLabel: 'Email', or: 'or', formLabel: 'Send a message',
    formName: 'Name', formEmail: 'Email', formMsg: 'Message', formSend: 'Send message', formSent: 'Thanks, your email app should open now.',
    location: 'Maribor, Slovenia', theme: 'Toggle theme', available: 'available for work',
  },
  sl: {
    nav: ['Projekti', 'O meni', 'Kontakt'],
    heroTitle: 'Andrej Koman, razvijalec programske opreme.',
    heroSub: 'Izbor aplikacij, iger in modelov, ki sem jih razvil, od šolskih projektov do stvari, narejenih za zabavo.',
    projectsLabel: 'Izbrani projekti',
    back: 'Vsi projekti', year: 'Leto', role: 'Vloga', problem: 'Problem', built: 'Kaj sem naredil', prev: 'Prejšnji', next: 'Naslednji',
    aboutTitle: 'O meni',
    aboutP1: 'Sem razvijalec programske opreme iz Slovenije. Razvijam aplikacije, igre in podatkovne projekte, najraje pa idejo od grobe skice pripeljem do nečesa, kar ljudje res uporabljajo.',
    aboutP2: 'Nekaj mojih projektov je nastalo v šoli in na FERI, nekaj pa kot osebni projekti za ljudi okoli mene.',
    stackLabel: 'Tehnologije',
    eduLabel: 'Izobrazba',
    edu: [['2021 — 2024', 'Diplomirani inženir informatike in tehnologij komuniciranja', 'Fakulteta za elektrotehniko, računalništvo in informatiko, Univerza v Mariboru']],
    expLabel: 'Izkušnje',
    exp: [['jan. 2026 — danes', 'Senior Software Engineer', 'VIAR'], ['mar. 2025 — jan. 2026', 'Software Engineer', 'Blocksi SAS'], ['sep. 2024 — mar. 2025', 'Software Engineer', 'Comtrade Gaming'], ['dec. 2022 — sep. 2024', 'Software Engineer', 'VIAR'], ['jan. 2022 — nov. 2022', 'Junior Software Engineer', 'E-Računi']],
    testLabel: 'Priporočila',
    tests: [["I really enjoyed working with Andrej and will genuinely miss having him as a teammate. He brought a great vibe to our part of the office and was always fun to be around, while also being very sharp and thoughtful about his work.\n\nFrom the moment he joined, he needed very little assistance and took initiative naturally. He integrated into our workflow incredibly fast and quickly became a very valuable part of the team.\n\nHe has a calm way of approaching problems and rarely settled for ‘good enough.’ He never backed down from a challenging task and always pushed to find the right solution. He often went beyond his own tickets and fixed things just because he knew they needed fixing.\n\nHe is easy to work with and great to collaborate with. He is open minded, listens to feedback, and is always up for discussions around implementation details. He constantly looked for ways to improve both his own workflow and the team’s, shared those ideas openly, and went out of his way to help newer teammates with tricky problems.\n\nI also really liked his design sense. He regularly brought his own design ideas into features, and they always looked great. Working with him pushed me to aim higher when it comes to design and code quality.\n\nAny team would be lucky to have him.", 'Luka Mlinarič Fekonja', 'Software Engineer, Blocksi']],
    contactTitle: 'Kontakt',
    contactSub: 'Odprt za sodelovanja, samostojne projekte in redno zaposlitev. Pišite mi po e-pošti ali uporabite obrazec spodaj.',
    more: 'Več…', less: 'Manj', copy: 'kopiraj', copied: 'kopirano', cv: 'Prenesi življenjepis', emailLabel: 'E-pošta', or: 'ali', formLabel: 'Pošljite sporočilo',
    formName: 'Ime', formEmail: 'E-pošta', formMsg: 'Sporočilo', formSend: 'Pošlji sporočilo', formSent: 'Hvala, odpreti bi se moral vaš e-poštni program.',
    location: 'Maribor, Slovenija', theme: 'Preklopi temo', available: 'na voljo za delo',
  },
} as const;

export const t = (lang: Locale) => T[lang];

/** Locale-aware path. `path` has no leading slash, e.g. 'about' or 'projects/echo'. */
export const href = (lang: Locale, path = '') => {
  const p = path ? `${path}/` : '';
  return lang === 'en' ? `/${p}` : `/sl/${p}`;
};
