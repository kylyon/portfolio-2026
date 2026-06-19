'use client'

import { Project } from "@/jsons/projects"
import { ChevronUp, FileBracesCorner, Folder } from "lucide-react"
import { useState } from "react"

interface FolderIDEProps
{
    year: number
    projects: Project[]
    setProject: (id: number) => void
}

export default function FolderIDE({year, projects, setProject} : FolderIDEProps)
{
    const [isOpen, setOpen] = useState<boolean>(false)

    const handleOpen = () => {
        setOpen(!isOpen)
    }

    const projectRender = projects.map(
        (project) => {
            return (
                <div onClick={() => setProject(project.id)} key={project.id} className="flex gap-2 items-center pl-6 hover:bg-[#27343D] rounded cursor-pointer">
                    <FileBracesCorner size={"16"} />
                    <p>{project.name}</p>
                </div>
            )
        }
    )

    return(
        <>
            <div className="flex gap-2 items-center" onClick={handleOpen}><ChevronUp className={`${isOpen ? 'rotate-180' : ''} transition-all`} /><Folder />{year}</div>
            <div className={`flex flex-col overflow-hidden ${isOpen ? 'h-full' : 'h-0'} transition-all`}>
                {projectRender}
            </div>
        </>
    )
}