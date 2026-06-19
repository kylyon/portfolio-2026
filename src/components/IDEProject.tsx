'use client'

import { Search } from "lucide-react"
import FolderIDE from "./FolderIDE"
import { useState } from "react"
import Image from "next/image"
import { Project } from "@/jsons/projects"

interface IDEProjectProps
{
  projects: Project[]
}

export default function IDEProject({projects}: IDEProjectProps)
{
    const [isPreview, setIsPreview] = useState<boolean>(true)
    const [projectShow, setProjet] = useState<Project>(projects[0])

    const handleSetMode = (mode : boolean) => {
        setIsPreview(mode)
    }

    const handleSetProject = (id: number) => {
      setProjet(projects.find( (p) => p.id === id  )!)
    }

    const projectsByYear = projects.reduce((acc, project) => {
      // 1. On extrait l'année à partir de l'objet Date
      const year = project.date.getFullYear().toString();
    
      // 2. Si cette année n'existe pas encore dans notre dictionnaire, on l'initialise avec un tableau vide
      if (!acc[year]) {
        acc[year] = [];
      }
    
      // 3. On pousse le projet dans le tableau correspondant à son année
      acc[year].push(project);
    
      // 4. On retourne l'accumulateur pour l'itération suivante
      return acc;
    }, {} as Record<string, Project[]>);

    const years = Object.keys(projectsByYear).sort((a, b) => Number(b) - Number(a));

    const folderIDERender = years.map(
      (year) => {
        return (
          <FolderIDE key={year} setProject={handleSetProject} year={Number(year)} projects={projectsByYear[year]} />
        )
      }
    )

    return(
        <div className="w-[1200px] bg-[#27343D] flex flex-col border border-[#47545D] rounded-[40px] p-8 font-sans">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <span className="inline-flex size-[20px] bg-red-500 rounded-full"></span>
          <span className="inline-flex size-[20px] bg-yellow-500 rounded-full"></span>
          <span className="inline-flex size-[20px] bg-green-500 rounded-full"></span>
        </div>
        <div className="flex gap-1 p-1 rounded-[15px] border border-[#38556B]">
          <button onClick={() => handleSetMode(true)} className={`p-2 rounded-[10px] w-[120px] ${isPreview ? "bg-linear-to-br from-[#37AF6F] to-[#5C8EA9]" : "hover:bg-[#38556B]"} cursor-pointer`}>Preview</button>
          <button onClick={() => handleSetMode(false)} className={`p-2 rounded-[10px] w-[120px] ${!isPreview ? "bg-linear-to-br from-[#37AF6F] to-[#5C8EA9]" : "hover:bg-[#38556B]"} cursor-pointer`}>Overview</button>
        </div>
        <p className="text-[#AAB8C2]">project.tsx</p>
      </div>
      <hr className="my-4 border border-[#47545D]"></hr>
      <div className="flex h-[600px] gap-4">
        <div className="min-w-75 h-full bg-[#47545D] rounded-[25px] p-4">
          <div className="flex justify-between">
            <p>Explorer</p>
            <Search />
          </div>
          <div>
            {folderIDERender}
          </div>
        </div>
        <div className="grow-1 h-full overflow-hidden">
          {isPreview ? 
          (
            <div>
              <Image
                src={projectShow.previewUrl}
                height={2877}
                width={1920}
                alt=""
              />
            </div>
          ) : 
          (<div className="flex flex-col gap-4 p-4">
            <div>
              <h2 className="text-xl">Problématique</h2>
              <p>{projectShow.problem}</p>
            </div>
            <div>
              <h2 className="text-xl">La solution</h2>
              <p>{projectShow.solution}</p>
            </div>
            <div>
              <h2 className="text-xl">Mon rôle</h2>
              <p>{projectShow.myRole}</p>
            </div>
            <div>
              <h2 className="text-xl">Liens</h2>
              {projectShow.links.map(
                (link, index) => {
                  return(
                    <a target="_blank" className="underline" key={projectShow.id+ "_link_" + index} href={link.url}>{link.socialName}</a>
                  )
                }
              )} 
            </div>
          </div>)
          }
          
          
        </div>

      </div>
    </div>
    )
}