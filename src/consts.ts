import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Tanay Shah",
  DESCRIPTION: " pursuing undergrad CSE AIML at PES University. currently in my second semester",
  AUTHOR: "Tanay Shah",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Things I have been part of.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on things I find interesting.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Things I have built.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "tanayshah2k7@gmail.com",
    HREF: "mailto:tanayshah2k7@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "tanayshah",
    HREF: "https://github.com/tanayshah-gh",
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "tanayshah",
    HREF: "https://www.linkedin.com/in/tanayshah-",
  },
]