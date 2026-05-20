export interface Interest {
  title: string;
  images: string;
  description: string;
  favorites: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Games {
  title: string;
  url: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Jobs {
  title: string;
  employer: string;
  team?: string;
  time: string;
  description: string;
}