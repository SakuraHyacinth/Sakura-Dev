import type { Interest, Project, Games, Jobs, Languages } from '../types';
import Sylveon from '../assets/sylveon.jpg'
import Gwen from '../assets/gwen.jpg'
import Oppossum from '../assets/opossum.gif'
import Benny from '../assets/benny.jpg'
import Valheim1 from '../assets/valheim.png'

// game image imports
import Valheim from '../assets/games/valheim.jpg'
import Valorant from '../assets/games/valorant.jpg'
import Overwatch from '../assets/games/overwatch.webp'
import Palia from '../assets/games/palia.jpg'
import Stardew from '../assets/games/stardew.gif'
import Abiotic from '../assets/games/abiotic.jpg'
import Monster from '../assets/games/monster.avif'
import Rain from '../assets/games/rain.jpg'
import Night from '../assets/games/night.avif'

export const interests: Interest[] = [
  { title: 'Pokemon', images: Sylveon, description: 'Been a fan since I watched Indigo League for the first time', favorites: ['Sylveon', 'Mareep', 'Abra', 'Vaporeon', 'Litten', 'Mega Evolution Ampharos'] },
  { title: 'Art', images: Gwen, description: 'I enjoy both digital and traditional art, but I am too insecure about it to post really.', favorites: ['Graphite Pencil', 'Oil Paint', 'Acrylic Marker'] },
  { title: 'Animals', images: Oppossum, description: 'A huge animal lover overall.', favorites: ['Cheetah', 'Sand Cat', 'Burrowing Owl', 'Barn Owl', 'Oppossums', 'Pangolin'] },
  { title: 'Cats', images: Benny, description: 'Cats are my favorite animal. I volunteer at a non-profit cat rescue on weekends. The cat above is Benny, an adorable orange cat that got adopted a few weeks back. He likes to sing very much.', favorites: ['Orange Cat', 'Tuxedo Cat', 'Bombay Cat', 'Black Cat', 'Sphynx'] },
  { title: 'Games', images: Valheim1, description: 'I love playing games with friends. My favorite right now is Valheim because I aspire to tame and breed a army of wolves that will crash the game. I hold the power of Thor (in a ateger though).', favorites: ['Valheim', 'Palia', 'Monster Hunter Worlds', 'Overwatch', 'Abiotic Factor']}
];

export const projects: Project[] = [
  { title: 'Smart Grade Bridge', description: 'My CSUSM Capstone Project! This project enahnces the grading system at CSUSM by automating a section of it. Saves professors/faculty hours of work!', techStack: ['Python', 'Typescript', 'WXT Extension Framework', 'Flask', 'HTML/CSS', 'React'], liveUrl: 'https://youtu.be/n-QNQS-zKNk' },
  { title: 'Smart Grade Bridge (Web Adaptation)', description: 'Adaptation of my capstone project (Smart Grade Bridge). Adds an additional web application for troubleshooting. Backend and web app is hosted on Render.', techStack: ['React', 'Typescript', 'WXT Extension Framework', 'HTML/CSS', 'Render', 'Express', 'Python', 'Flask'], githubUrl: 'https://github.com/SakuraHyacinth/Smart-Grade-Bridge-Web-Console', liveUrl: 'https://youtu.be/rMI55OTsKS4?si=42j5aPoqxkHdCZW9'},
  { title: 'Rescue House Website', description: 'Modernized front-end of the Rescue House website to improve navigation, user experience, and mobile compatibility. \nLive link not available yet!', techStack: ['Typescript', 'React', 'HTML/CSS', 'GitHub', 'HTML/CSS']},
  { title: 'SteamFLIX', description: 'My final project for Intro to Software Engineering at CSUSM', techStack: ['Java', 'JavaFX', 'SQL'], liveUrl: 'https://youtu.be/fCfzTUJAkHc' },
  { title: 'Sakura-Dev', description: 'This website (was a pain)!', techStack: ['React', 'TypeScript', 'HTML/CSS', 'Express', 'Render'], liveUrl: 'https://sakura-dev-idgi.onrender.com', githubUrl: 'https://github.com/SakuraHyacinth/Sakura-Dev' },
  { title: 'Autonomous McDonalds Happy Meal Delivery Robot', description: 'This is my final project for my Embedded Systems class at CSUSM. Was super fun and got me used to using Arduino and robotics.', techStack: ['Arduino', 'C++', 'Electrical Circuits'], liveUrl: 'https://youtu.be/SLxPkVAd6jk' },
];

export const games: Games[] = [
  { title: 'Valheim', url: 'https://store.steampowered.com/app/892970/Valheim/', description: 'This is my favorite game of all time! I live, laugh, love being a viking. Being an open-world game, there is so much you can do!', image: Valheim, tags: ['Open World', 'Survival', 'Co-op'] },
  { title: 'Valorant', url: 'https://playvalorant.com/', description: 'Chinese malware toxic waste trash. 0/10 would recommend.', image: Valorant, tags: ['FPS', 'Tactical', 'Competitive'] },
  { title: 'Overwatch', url: 'https://overwatch.blizzard.com/', description: 'OVERSTIMULTION. Junk food for the brain. Skins make brain go brrr. Ana is granny and I love her. "Good kitty".', image: Overwatch, tags: ['FPS', 'Team-based', 'Competitive'] },
  { title: 'Palia', url: 'https://palia.com/', description: 'Very cozy! Everyone is so cute and I love how you create relationships with everyone. This game is still in Beta but it has aspects to it that is one step above Stardew Valley! Feels a lot more personal and flexible.', image: Palia, tags: ['Cozy', 'MMO', 'Simulation'] },
  { title: 'Stardew Valley', url: 'https://store.steampowered.com/app/413150/Stardew_Valley/', description: 'CLASSIC! So much fun, but I get stressed trying to redorate the farm. Moving stuff around (especially chests) is difficult which makes me rage quit because I want aesthetics. Very great game though!', image: Stardew, tags: ['Cozy', 'Farming', 'RPG'] },
  { title: 'Abiotic Factor', url: 'https://store.steampowered.com/app/427410/Abiotic_Factor/', description: 'I just like making soup out of alien stuff. 10/10 would play with friends again to domesticate aliens and give them armor.', image: Abiotic, tags: ['Survival', 'Co-op', 'Sci-Fi'] },
  { title: 'Monster Hunter Worlds', url: 'https://store.steampowered.com/app/582010/Monster_Hunter_World/', description: '', image: Monster, tags: ['Action', 'Co-op', 'RPG'] },
  { title: 'Risk of Rain 2', url: 'https://store.steampowered.com/app/632360/Risk_of_Rain_2/', description: 'Overstimulating but very fun to play with friends. I go pew pew.', image: Rain, tags: ['Roguelike', 'Co-op', 'Action'] },
  { title: 'Elden Ring Nightreign', url: 'https://store.steampowered.com/app/2622380/ELDEN_RING_NIGHTREIGN/', description: 'Very hard but it is so gratifying when you defeat a boss. I had a lot of fun playing this with friends. I want to finish the game but am too busy to sit down for several hours to fight a boss run.', image: Night, tags: ['Souls-like', 'Co-op', 'Action'] }
];

export const jobs: Jobs[] = [
  { title: 'Software Engineering Intern', employer: 'BAE Systems', team: 'Automated Test Systems', time: 'May 2025 - August 2025', description: 'Researched and analyzed replacement specifications for obsolete hardware components using technical datasheets and manuals to support a trade study evaluating viable part substitutions. Developed and deployed automated document-review workflows using Microsoft Power Automate and SharePoint to modernize legacy document lifecycle management processes, reducing manual overhead. Performed code inspections for hardware testing GUIs using BitBucket, identifying misused functions and inefficient practices while gaining familiarity with the existing codebase.' },
  { title: 'STEM Ambassador', employer: 'CRESE (CSUSM)', team: 'NASA Aerospace Academy', time: 'August 2023 - August 2025', description: 'Taught students (9th-12th) engineering concepts such as electrical circuitry, Arduinos, and programming in C++. Provided students with career guidance as they start applying for colleges.' },
  { title: 'After School Robotics Instructor', employer: 'Cannettic Energy', time: 'August 2025 - May 2026', description: 'Taught students (4th-8th) robotics concepts – electrical circuits, C++, and Arduino.' },
  { title: 'STEM SC Tutor', employer: 'California State University, San Marcos (CSUSM)', time: 'January 2024 - December 2024', description: 'Assisted students in exam prep, homework help, lecture review, and explained concepts. Supported courses including Computer Science I & II, Data Structures, Calculus I & II, Assembly and Digital Circuits, Algebra, and Discrete Mathematics, helping students develop professional problem-solving and programming skills.' },
  { title: 'Summer Engineering Instructor', employer: 'IEEE TryEngineering @ University San Diego (USD)', time: 'June 2024 - July 2024', description: 'Taught an engineering curriculum for students grades 9th-12th. Taught engineering concepts including civil engineering, mechanical engineering, electrical engineering, and aerospace engineering.' },
  { title: 'Calculus I Learning Assistant', employer: 'California State University, San Marcos (CSUSM)', time: 'August 2023 - December 2023', description: 'Tutored Calculus 1, set up office hours, taught one-on-one tutoring sessions with students, and tutored groups of students.' },
  { title: 'Office/Graphic Design Intern', employer: 'California Smartscapes', time: 'December 2022 - July 2023', description: 'Managed administrative filing systems for invoices and financial records, ensuring accurate documentation and efficient retrieval. Designed visual infographics and instructional materials to communicate landscape installation procedures and workplace protocols to employees.' },
];

export const languages: Languages[] = [
  { name: 'C++', start: '2023-01'},
  { name: 'Python', start: '2024-01'},
  { name: 'Java', start: '2021-08'},
  { name: 'Typescript', start: '2026-01'},
  { name: 'Javascript', start: '2026-01'},
]