// content for interests
// data is input into carousel to be pretty <333

import type { Interest, Project } from '../types';
import Sylveon from '../assets/sylveon.jpg'

export const interests: Interest[] = [
  { title: 'Pokémon', images: Sylveon, description: 'Been a fan since I watched Indigo League for the first time', favorites: ['Sylveon', 'Mareep/Mega Evolution Ampharos', 'Abra'] },
  { title: 'Art', images: '', description: 'I enjoy both digital and traditional art, but I am too insecure about it to post really.', favorites: ['Watercolor', 'Pixel Art', 'Illustration'] },
  { title: 'Animals', images: '', description: 'A huge animal lover overall.', favorites: ['Red Panda', 'Axolotl', 'Snow Leopard'] },
  { title: 'Cats', images: '', description: 'Cats are my favorite animal.', favorites: ['Maine Coon', 'Scottish Fold', 'Ragdoll'] },
];

export const projects: Project[] = [
  { title: 'Portfolio Site', description: 'This website!', techStack: ['React', 'TypeScript', 'Tailwind'] },
];