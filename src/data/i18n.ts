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
    edu: [['2021 — 2025', 'Computer Science and Information Technologies', 'FERI, University of Maribor']],
    expLabel: 'Experience',
    exp: [['2023 — now', 'Senior Software Engineer', 'Company Name'], ['2020 — 2023', 'Full-stack Developer', 'Company Name'], ['2018 — 2020', 'Junior Developer', 'Company Name']],
    testLabel: 'Kind words',
    tests: [['Placeholder: a short quote from a teammate about working with Andrej on a project.', 'Name Surname', 'Teammate, watt4cast'], ['Placeholder: a short quote from a professor, mentor or client.', 'Name Surname', 'Mentor, FERI']],
    contactTitle: 'Contact',
    contactSub: 'Open to collaborations, freelance work and full-time roles. Send me an email or use the form below.',
    copy: 'copy', copied: 'copied', cv: 'Download CV', emailLabel: 'Email', or: 'or', formLabel: 'Send a message',
    formName: 'Name', formEmail: 'Email', formMsg: 'Message', formSend: 'Send message', formSent: 'Thanks, your email app should open now.',
    location: 'Slovenia', theme: 'Toggle theme', available: 'available for work',
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
    edu: [['2021 — 2025', 'Računalništvo in informacijske tehnologije', 'FERI, Univerza v Mariboru']],
    expLabel: 'Izkušnje',
    exp: [['2023 — danes', 'Višji programski inženir', 'Ime podjetja'], ['2020 — 2023', 'Full-stack razvijalec', 'Ime podjetja'], ['2018 — 2020', 'Mlajši razvijalec', 'Ime podjetja']],
    testLabel: 'Priporočila',
    tests: [['Primer: kratek citat sodelavca o delu z Andrejem na projektu.', 'Ime Priimek', 'Sodelavec, watt4cast'], ['Primer: kratek citat profesorja, mentorja ali stranke.', 'Ime Priimek', 'Mentor, FERI']],
    contactTitle: 'Kontakt',
    contactSub: 'Odprt za sodelovanja, samostojne projekte in redno zaposlitev. Pišite mi po e-pošti ali uporabite obrazec spodaj.',
    copy: 'kopiraj', copied: 'kopirano', cv: 'Prenesi življenjepis', emailLabel: 'E-pošta', or: 'ali', formLabel: 'Pošljite sporočilo',
    formName: 'Ime', formEmail: 'E-pošta', formMsg: 'Sporočilo', formSend: 'Pošlji sporočilo', formSent: 'Hvala, odpreti bi se moral vaš e-poštni program.',
    location: 'Slovenija', theme: 'Preklopi temo', available: 'na voljo za delo',
  },
} as const;

export const t = (lang: Locale) => T[lang];

/** Locale-aware path. `path` has no leading slash, e.g. 'about' or 'projects/echo'. */
export const href = (lang: Locale, path = '') => {
  const p = path ? `${path}/` : '';
  return lang === 'en' ? `/${p}` : `/sl/${p}`;
};
