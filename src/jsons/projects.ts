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
    {id: 0, name: "AJLB", problem: "Ce club de football amateur, situé dans le Val-de-Marne, repose essentiellement sur l'implication de bénévoles pour assurer son fonctionnement. Cette dépendance au bénévolat entraîne une gestion interne fluctuante au gré des arrivées et des départs chaque année. Par ailleurs, le club disposait d'un site internet qui avait fini par être délaissé ; le temps nécessaire à sa mise à jour était systématiquement sacrifié au profit de missions jugées plus urgentes, telles que l'organisation des entraînements, la planification des rencontres ou la gestion administrative des licences",solution: "Notre intervention s'est donc inscrite dans cette problématique précise : nous avons proposé une solution technique visant un double objectif. Il s'agissait, d'une part, de simplifier certains processus de gestion quotidienne du club et, d'autre part, de restaurer et développer sa présence numérique.", myRole: "Développeur Fullstack", links: [
        { socialName: "GitHub", url: "https://github.com/kylyon/ajlb-2-0" }
    ], technologies: [], previewUrl: "/ajlb.fr.png", date: new Date("2026-05-01")  },
    {id: 1, name: "KADAUR", problem: "KADAUR disposait initialement d'une plateforme web développée sous Wordpress. Cependant, cette solution présentait des limites significatives, notamment un manque d'autonomie sur certains aspects techniques et structurels du site. Dans le cadre de mon alternance, la refonte intégrale de ce support est devenue le projet majeur, avec pour objectif principal une modernisation technologique profonde associée à une optimisation rigoureuse du référencement naturel (SEO).",solution: "Les enjeux stratégiques de cette mission s'articulent autour de deux axes fondamentaux : d'une part, l'acquisition d'un contrôle total sur l'ensemble des contenus et de l'identité visuelle du site ; d'autre part, le renforcement de la visibilité numérique de KADAUR afin de dynamiser la captation de nouveaux clients et de prospects qualifiés. Ce projet ne se limite pas à une simple mise à jour esthétique, mais vise à transformer le site en un véritable levier de croissance opérationnelle pour le cabinet.", myRole: "Lead Développeur Fullstack", links: [
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