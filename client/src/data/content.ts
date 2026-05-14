// content for interests
// data is input into carousel to be pretty <333

import type { Interest, Project } from '../types';
import Sylveon from '../assets/sylveon.jpg'
import Gwen from '../assets/gwen.jpg'
import Oppossum from '../assets/opossum.gif'
import Benny from '../assets/benny.jpg'

export const interests: Interest[] = [
  { title: 'Pokémon', images: Sylveon, description: 'Been a fan since I watched Indigo League for the first time', favorites: ['Sylveon', 'Mareep', 'Abra', 'Vaporeon', 'Litten', 'Mega Evolution Ampharos'] },
  { title: 'Art', images: Gwen, description: 'I enjoy both digital and traditional art, but I am too insecure about it to post really.', favorites: ['Graphite Pencil', 'Oil Paint', 'Acrylic Marker'] },
  { title: 'Animals', images: Oppossum, description: 'A huge animal lover overall.', favorites: ['Cheetah', 'Sand Cat', 'Burrowing Owl', 'Barn Owl', 'Oppossums', 'Pangolin'] },
  { title: 'Cats', images: Benny, description: 'Cats are my favorite animal.', favorites: ['Orange Cat', 'Tuxedo Cat', 'Bombay Cat'] },
];

export const projects: Project[] = [
  { title: 'Portfolio Site', description: 'This website!', techStack: ['React', 'TypeScript', 'Tailwind'] },
];