import type { Interest, Project, Games, Jobs } from '../types';
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
  { title: 'Smart Grade Bridge (Web Adaptation)', description: 'Adaptation of my capstone project (Smart Grade Bridge). Adds an additional web application for troubleshooting. Backend and web app is hosted on Render.', techStack: ['React', 'Typescript', , 'WXT Extension Framework', 'HTML/CSS', 'Render', 'Express', 'Python', 'Flask'], githubUrl: 'https://github.com/SakuraHyacinth/Smart-Grade-Bridge-Web-Console', liveUrl: 'https://youtu.be/rMI55OTsKS4?si=42j5aPoqxkHdCZW9'},
  { title: 'Autonomous McDonalds Happy Meal Delivery Robot', description: 'This is my final project for my Embedded Systems class at CSUSM. Was super fun and got me used to using Arduino and robotics.', techStack: ['Arduino', 'C++', 'Electrical Circuits'], liveUrl: 'https://youtu.be/SLxPkVAd6jk' },
  { title: 'SteamFLIX', description: 'My final project for Intro to Software Engineering at CSUSM', techStack: ['Java', 'JavaFX', 'SQL'], liveUrl: 'https://youtu.be/fCfzTUJAkHc' },
  { title: 'Sakura-Dev', description: 'This website (was a pain)!', techStack: ['React', 'TypeScript', 'HTML/CSS', 'Express', 'Render'], liveUrl: 'https://sakura-dev-idgi.onrender.com', githubUrl: 'https://github.com/SakuraHyacinth/Sakura-Dev' },
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
  { title: 'Office/Graphic Design Intern', employer: 'California Smartscapes', time: 'December 2022 - July 2023', description: 'My sister was my manager, and I got hired to be her slave. I did her dirty frfr.' },
  { title: 'STEM Ambassador', employer: 'CRESE (CSUSM)', team: 'NASA Aerospace Academy', time: 'August 2023 - August 2025', description: 'I taught an after school program at local high schools STEM topics based off of a curriculum provided by NASA. We worked on a lot of physics concepts alongside their application to the real world, such as sound pollution and dampening technology. Honestly, my favorite job of all time so far because the kids were so sweet, passionate, and respectful! I would have stayed but $16/hour with a hour commute is brutal.' },
  { title: 'Calculus I Learning Assistant', employer: 'CSUSM', time: 'August 2023 - December 2023', description: 'Very simple job, except no one comes to my office hours and only asks questions at 9:00pm (when I am not paid to do so). They also ask questions that can be easily answered on the syllabus, and do not know how to find a common denominator of a fraction.' },
  { title: 'STEM SC Tutor', employer: 'CSUSM', time: 'January 2024 - December 2024', description: 'I enjoyed honing my skills here in CS and math. I also met a lot of people who helped me get through my own college classes. Strong place for connections and filled with really smart people. Teaching can be fun if students who come in are respectful and actually try (and do not make us do their homework for them).' },
  { title: 'Summer Engineering Instructor', employer: 'IEEE TryEngineering @ USD', time: 'June 2024 - July 2024', description: 'Some of the kids were wonderful to be around... such a shame it was only a quarter of each class. Rich spoiled brats who did not want to be there. I also proceeded to get taxxed 25% of my paycheck and was overworked because they fired someone before everything started without hiring a new person. We demanded compensation and they got mad at us for that. 0/10 would recommend.' },
  { title: 'Software Engineering Intern', employer: 'BAE Systems', team: 'Automated Test Systems', time: 'May 2025 - August 2025', description: 'It was fun and all until they realized they put me on a project that did not have a signed contract. That contract proceeded to be delayed for six months. I did my first real task on my last week of the internship. I did nothing and almost learned nothing. Did miscellaneous work that did not pertain to any of the job description.' },
  { title: 'After School Robotics Instructor', employer: 'Cannettic Energy', time: 'August 2025 - May 2026', description: 'It was fun until I realized the owner of the company did not understand what they signed up for. This is a sports and dance after-school program that decided they wanted to add robotics. They did not do proper research on what robotics pertains to. I only got paid for 25% of the work I did. Got disrespected by too many elementary and middle schoolers. Made me hate teaching.' }
];