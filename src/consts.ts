import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Mahmut",
  EMAIL: "imahmut@proton.me",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: ".",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/Mahmut-a"
  },
  {
    NAME: "codepen",
    HREF: "https://www.codepen.io/Odumam",
  }
];
