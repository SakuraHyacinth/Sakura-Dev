import type { Interest, Project, Games } from '../types';
import Sylveon from '../assets/sylveon.jpg'
import Gwen from '../assets/gwen.jpg'
import Oppossum from '../assets/opossum.gif'
import Benny from '../assets/benny.jpg'

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
  { title: 'Pokémon', images: Sylveon, description: 'Been a fan since I watched Indigo League for the first time', favorites: ['Sylveon', 'Mareep', 'Abra', 'Vaporeon', 'Litten', 'Mega Evolution Ampharos'] },
  { title: 'Art', images: Gwen, description: 'I enjoy both digital and traditional art, but I am too insecure about it to post really.', favorites: ['Graphite Pencil', 'Oil Paint', 'Acrylic Marker'] },
  { title: 'Animals', images: Oppossum, description: 'A huge animal lover overall.', favorites: ['Cheetah', 'Sand Cat', 'Burrowing Owl', 'Barn Owl', 'Oppossums', 'Pangolin'] },
  { title: 'Cats', images: Benny, description: 'Cats are my favorite animal.', favorites: ['Orange Cat', 'Tuxedo Cat', 'Bombay Cat'] }
];

export const projects: Project[] = [
  { title: 'Portfolio Site', description: 'This website!', techStack: ['React', 'TypeScript', 'Tailwind'] },
];

export const games: Games[] = [
  {title: 'Valheim', description: 'This is my favorite game of all time! I live, laugh, love being a viking. Being an open-world game, there is so much you can do!', image: Valheim, tags: ['']},
  {title: 'Valorant', description: '', image: Valorant, tags: ['']},
  {title: 'Overwatch', description: '', image: Overwatch, tags: ['']},
  {title: 'Palia', description: '', image: Palia, tags: ['']},
  {title: 'Stardew Valley', description: '', image: Stardew, tags: ['']},
  {title: 'Abiotic Factor', description: '', image: Abiotic, tags: ['']},
  {title: 'Monster Hunter Worlds', description: '', image: Monster, tags: ['']},
  {title: 'Risk of Rain 2', description: '', image: Rain, tags: ['']},
  {title: 'Elden Ring Nightreign', description: '', image: Night, tags: ['']}
];