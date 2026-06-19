type Project = {
    id: number,
    name: string,
    problem: string,
    solution: string,
    myRole: string,
    links: ProjectLink[]
    technologies: Technology[]
    previewUrl: string
    date: Date
}

type Technology = {
    name: string,
    backgroundColor: string,
    foregroundColor: string
}

type ProjectLink = {
    url: string,
    socialName: string
}

export const projects: Project[] = [
    {id: 0, name: "AJLB", problem: "",solution: "", myRole: "Développeur Fullstack", links: [
        { socialName: "GitHub", url: "https://github.com/kylyon/ajlb-2-0" }
    ], technologies: [], previewUrl: "/ajlb.fr.png", date: new Date("2026-05-01")  },
    {id: 1, name: "KADAUR", problem: "",solution: "", myRole: "Lead Développeur Fullstack", links: [
        { socialName: "Site web", url: "https://www.kadaur.com/" }
    ], technologies: [], previewUrl: "/kadaur.png", date: new Date("2026-05-01")  },
    {id: 2, name: "Sacrifice diff", problem: "",solution: "", myRole: "Développeur back-end", links: [
        { socialName: "Site web", url: "https://sacrifice-diff.fr/" }
    ], technologies: [], previewUrl: "/sacrifice-diff.png", date: new Date("2025-01-01")  },
    {id: 3, name: "Lepid", problem: "",solution: "", myRole: "Développeur Fullstack", links: [
        { socialName: "Site web", url: "https://lepid.fr/" }
    ], technologies: [], previewUrl: "/lepid.png", date: new Date("2026-01-01")  },
    {id: 4, name: "Notti", problem: "",solution: "", myRole: "Développeur Fullstack", links: [
        { socialName: "Site web", url: "https://www.notti.fr/" }
    ], technologies: [], previewUrl: "/notti.png", date: new Date("2025-01-01")  },
]

export type { Project, Technology }