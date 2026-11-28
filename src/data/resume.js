// Structured CV data migrated from the original HTML (March 2024).
// Update dates and career details here; localized descriptions are in translations.json.
export const profile = {
  name: 'Javier Ramirez',
  displayName: 'Javier Ramirez',
  email: 'javier.ramirez.leiva0@gmail.com',
  phoneDisplay: '+33 770407936',
  phoneHref: 'tel:+33770407936',
  github: 'https://github.com/javier-ramirez-leiva',
  linkedin: 'https://fr.linkedin.com/in/javier-ramirez-leiva-681909124',
}

export const experience = [
  {
    company: 'Dataiku',
    date: '10/2024',
    ongoing: true,
    roleKey: 'SoftwareEngineer-Dataiku',
    descriptionKey: 'Text-Dataiku',
    detailKeys: Array.from({ length: 6 }, (_, index) => `Text-Dataiku_${index + 1}`),
    tags: ['AI Governance', 'Full-Stack', 'Java', 'Angular', 'PostreSQL', 'MacOS', 'Linux', 'Dataiku', 'Vertex'],
  },
  {
    company: 'Dassault Systèmes',
    date: '08/2019  — 10/2024',
    roleKey: 'SoftwareEngineer-Dassault',
    descriptionKey: 'Text-Dassault',
    detailKeys: Array.from({ length: 6 }, (_, index) => `Text-Dassault_${index + 1}`),
    tags: ['C++', 'tab.electricalEngineering', 'CATIA', 'CAD / PLM', 'Windows', 'Linux', '3DEXPERIENCE'],
  },
  {
    company: 'Continental',
    date: '01/2017 — 08/2019',
    roleKey: 'SoftwareEngineer-Continental',
    descriptionKey: 'Text-Continental',
    detailKeys: Array.from({ length: 5 }, (_, index) => `Text-Continental_${index + 1}`),
    tags: ['C / C++', 'AUTOSAR', 'MISRA C', 'ECU'],
  },
  {
    company: 'Rockwell Collins',
    date: '03/2016 — 09/2016',
    roleKey: 'SoftwareEngineer-Collins',
    descriptionKey: 'Text-Collins',
    detailKeys: Array.from({ length: 3 }, (_, index) => `Text-Collins_${index + 1}`),
    tags: ['C++', 'Qt', 'Radar', 'Linux'],
  }
]

export const education = [
  {
    institution: 'ENSEEIHT · Toulouse',
    date: '2015 — 2016',
    degreeKey: 'Degree-INP',
    courseKey: 'DegreeEx-INP',
    descriptionKey: 'Text-INP',
  },
  {
    institution: 'UPNA · Universidad Pública de Navarra',
    date: '2014 — 2015',
    degreeKey: 'Degree-UPNA',
    courseKey: 'DegreeEx-UPNA',
    descriptionKey: 'Text-UPNA',
  },
  {
    institution: 'Universidad de La Rioja',
    date: '2009 — 2013',
    degreeKey: 'Degree-UR',
    courseKey: 'DegreeEx-UR',
    descriptionKey: 'Text-UR',
  },
]

export const skills = [
  {
    headingKey: 'ProgrammingLanguages-Section',
    values: ['Java', 'TypeScript', 'Angular', 'Web','Python', 'C', 'C++'],
  },
  {
    headingKey: 'ToolsPlatforms-Section',
    values: [
      'Dataiku',
      'Linux',
      'Docker',
      'PostgreSQL',
      'Visual Studio',
      'Qt Creator',
      'CATIA',
      'MATLAB',
    ],
  },
  {
    headingKey: 'Technologies-Section',
    values: [
      'AI',
      'REST APIs',
      'Databases',
      'CAD',
      'skill.embedded',
      'skill.realtime',
      'AUTOSAR',
      'skill.systems',
    ],
  },
  {
    headingKey: 'DevelopmentMethodologies-Section',
    values: ['Agile', 'Scrum', 'CI/CD', 'OOP', 'skill.patterns', 'TDD', 'skill.unit', 'skill.automated'],
  },
]

export const projects = [
  {
    id: 'comicVault',
    name: 'Comic Vault',
    tagKey: 'project.cv_tag',
    descriptionKey: 'project.cv_desc',
    url: 'https://github.com/javier-ramirez-leiva/ComicVault',
    image: 'https://github.com/javier-ramirez-leiva/ComicVault/raw/main/docs/mockups/device-mockups.png',
    number: '01',
  },
  {
    id: 'govern',
    name: 'Dataiku Governance',
    tagKey: 'project.g_tag',
    descriptionKey: 'project.g_desc',
    url: 'https://www.dataiku.com/product/govern',
    youtubeId: 'zY5aDD2_ifM',
    number: '02',
  },
  {
    id: 'catia',
    name: 'CATIA · Electrical System Design',
    tagKey: 'project.cat_tag',
    descriptionKey: 'project.cat_desc',
    url: 'https://discover.3ds.com/catia-virtual-twin-electrical-systems-design-process-continuity',
    youtubeId: 'sUbjRKxbVrc',
    youtubeStart: 1796,
    number: '03',
  },
  {
    id: 'radar',
    name: 'PSR-500',
    tagKey: 'project.psr_tag',
    descriptionKey: 'project.psr_desc',
    url: 'https://www.collinsaerospace.com/what-we-do/military-and-defense/targeting/targeting-and-c2/perimeter-surveillance-radar-500',
    youtubeId: '-S9HjxyDsYw',
    number: '04',
  },
  {
    id: 'aircobot',
    name: 'Air-Cobot',
    tagKey: 'project.air_tag',
    descriptionKey: 'project.air_desc',
    url: 'https://en.wikipedia.org/wiki/Air-Cobot',
    youtubeId: 'IEPr4rs4c8E',
    number: '05',
  }
]

export const resumePdfs = {
  en: '/pdf/Resume_Javier_Ramirez_EN.pdf',
  fr: '/pdf/Resume_Javier_Ramirez_FR.pdf',
  es: '/pdf/Resume_Javier_Ramirez_ES.pdf',
}
