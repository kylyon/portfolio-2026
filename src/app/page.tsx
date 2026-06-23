import IDEProject from "@/components/IDEProject";
import { TechStackCarousel } from "@/components/TechStackCarousel";
import { projects } from "@/jsons/projects";
import { ChevronRight, FileText } from "lucide-react";
import Image from "next/image";

export default function Home() {

  const projectsArray = projects

  return (
    <>
    <div id="about" className="z-1 flex items-center justify-center font-sans mt-8 gap-32 scroll-mt-28">
      <div className="relative">
        <Image 
          src={"/pp3.png"}
          width={720}
          height={962}
          alt="Photo de profil"
          className="size-[510px] object-cover rounded-[10px] shadow-xl"
        />
        <div className="absolute flex gap-4 items-center top-0 left-0 bg-green-700 border border-green-300 p-2 text-green-300 rounded-full -translate-y-1/2 -translate-x-4">
          <span className="relative size-[32px]">
            <span className="absolute inline-flex size-[32px] rounded-full bg-green-300 animate-ping"></span>
            <span className="relative inline-flex size-[32px] rounded-full bg-green-300"></span>
          </span>
          <p className="mr-2">Actuellement disponible</p>
        </div>
      </div>
      <div className="w-[830px] h-[390px] bg-[#27343D] border border-[#47545D] rounded-[40px] rotate-3 p-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <span className="inline-flex size-[20px] bg-red-500 rounded-full"></span>
            <span className="inline-flex size-[20px] bg-yellow-500 rounded-full"></span>
            <span className="inline-flex size-[20px] bg-green-500 rounded-full"></span>
          </div>
          <p className="text-[#AAB8C2]">portfolio.config.ts</p>
        </div>
        <hr className="my-4 border border-[#47545D]"></hr>
        <p className="font-mono">
          <span className="text-[#EA526F]">const</span> <span className="text-[#B1324B]">user</span> = {"{"}<br />
          <span className="text-[#84BCDA] ml-8">name:</span> <span className="text-[#EFD6AC]">{"'Kyllian'"}</span><br />
          <span className="text-[#84BCDA] ml-8">mail:</span> <span className="text-[#EFD6AC]">{"'kyllianmm@gmail.com'"}</span><br />
          <span className="text-[#84BCDA] ml-8">role:</span> <span className="text-[#EFD6AC]">{"'Full Stack Lead Web Dev'"}</span><br />
          <span className="text-[#84BCDA] ml-8">age:</span> <span className="text-[#61D095]">26</span><br />
          <span className="text-[#84BCDA] ml-8">focus:</span> {"["}<span className="text-[#EFD6AC]">{"'Next.js'"}</span>, <span className="text-[#EFD6AC]">{"'PayloadCMS'"}</span>{"]"}<br />
          <span className="text-[#84BCDA] ml-8">languages:</span> {"["}<span className="text-[#EFD6AC]">{"'Français'"}</span>, <span className="text-[#EFD6AC]">{"'English'"}</span>{"]"}<br />
          <span className="text-[#84BCDA] ml-8">status:</span> <span className="text-[#61D095]">200</span><br />
          {"};"}
        </p>

      </div>
    </div>
    <div className="w-full text-start font-sans mt-4">
      <h1 className="text-6xl "><span className="font-light">Kyllian</span> <span className="font-bold lastname-gradient">MARIE-MAGDELAINE</span></h1>
      <p className="text-3xl font-light max-w-[800px]">Expert en ingénierie informatique & Lead Développeur Full-Stack. Je transforme des concepts complexes en expériences web fluides et performantes.</p>
    </div>

    <h2 id="projets" className="text-4xl my-16 scroll-mt-28">Projets</h2>

    <IDEProject projects={projectsArray}/>

    <h2 id="expertises" className="text-4xl my-16 scroll-mt-28">Expertise</h2>

    <div className="grid grid-cols-2 gap-4 w-5/6">
      <div className="bg-[#27343D] flex flex-col justify-between gap-4 border border-[#47545D] rounded-[40px] p-8">
        <h3 className="text-2xl font-bold">Architecture & Développement Sur-Mesure</h3>
        <p>Conception et développement d'applications web scalables de bout en bout. J'analyse les besoins techniques pour construire des architectures fonctionnelles robustes, du back-end jusqu'à l'interface utilisateur.</p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex px-4 py-1 border bg-black border-white rounded-full">Next.js</span>
          <span className="inline-flex px-4 py-1 border rounded-full bg-gray-700 border-green-300 text-green-300">Node.js</span>
          <span className="inline-flex px-4 py-1 border rounded-full bg-blue-800 border-white text-white">TypeScript</span>
          <span className="inline-flex px-4 py-1 border rounded-full bg-yellow-800 border-yellow-200 text-yellow-200">API REST</span>
        </div>
      </div>

      <div className="bg-[#27343D] flex flex-col justify-between gap-4 border border-[#47545D] rounded-[40px] p-8">
        <h3 className="text-2xl font-bold">Performance & Optimisation SEO</h3>
        <p>Habitué aux contraintes du e-commerce, je développe des interfaces optimisées pour la conversion. J'applique les principes de la conception responsable pour garantir des temps de chargement minimes et une ergonomie fluide.</p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex px-4 py-1 border bg-black border-white rounded-full">Payload CMS</span>
          <span className="inline-flex px-4 py-1 border rounded-full bg-purple-700 border-white text-white">Stripe</span>
          <span className="inline-flex px-4 py-1 border rounded-full bg-blue-800 border-white text-white">SEO technique</span>
          <span className="inline-flex px-4 py-1 border rounded-full bg-yellow-800 border-yellow-200 text-yellow-200">Accessibilité</span>
        </div>
      </div>

      <div className="bg-[#27343D] flex flex-col justify-between gap-4 border border-[#47545D] rounded-[40px] p-8">
        <h3 className="text-2xl font-bold">DevOps & Déploiement Continu</h3>
        <p>Industrialisation des processus de développement. Je mets en place des pipelines CI/CD automatisés pour assurer des mises en production fluides, sécurisées et un maintien en conditions opérationnelles optimal.</p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex px-4 py-1 border bg-black border-white rounded-full">Vercel</span>
          <span className="inline-flex px-4 py-1 border rounded-full bg-orange-400 border-white text-white">AWS</span>
          <span className="inline-flex px-4 py-1 border rounded-full bg-black border-white text-white">GitHub Actions</span>
          <span className="inline-flex px-4 py-1 border rounded-full bg-blue-800 border-white text-white">OVH</span>
        </div>
      </div>

      <div className="bg-[#27343D] flex flex-col justify-between gap-4 border border-[#47545D] rounded-[40px] p-8">
        <h3 className="text-2xl font-bold">Gestion de Projet & Agilité</h3>
        <p>En formation pour devenir Manager de l'Ingénierie Numérique, j'intègre les méthodologies agiles à mon flux de travail. Je rédige les spécifications, modélise les bases de données et m'assure de l'alignement entre les enjeux business et la réalité technique.</p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex px-4 py-1 border bg-black border-white rounded-full">Scrum/Agile</span>
          <span className="inline-flex px-4 py-1 border rounded-full bg-black border-red-300 text-red-300">Analyse des besoins</span>
          <span className="inline-flex px-4 py-1 border rounded-full bg-gray-700 border-orange-300 text-orange-300">Figma</span>
          <span className="inline-flex px-4 py-1 border rounded-full bg-gray-700 border-green-300 text-green-300">MongoDB</span>
        </div>
      </div>
    </div>

    <h2 id="stacks" className="text-4xl my-16 scroll-mt-28">Stack technique</h2>

    <TechStackCarousel />

    <div id="contact" className="flex flex-col gap-4 my-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold">A la recherche d'un alternant dans le developpement fullstack ?</h2>
        <h3 className="text-xl">Je suis disponible pour rejoindre votre équipe à partir de septembre 2026 (Rythme : 3 sem / 1 sem)</h3>
      </div>
      <div className="flex items-center justify-center gap-2 grow-1">
        <a href="mailto:kyllianmm@gmail.com" className="flex items-center gap-2 rounded-[10px] text-xl px-4 py-2 border border-2 border-[#EFD6AC] hover:border-[#306BAC] transition-all transition-300">Prenons contact <ChevronRight /></a>
        <a href="/CV_Kyllian_Marie-Magdelaine_DevFullStack.pdf" className="flex items-center gap-2 rounded-[10px] text-xl px-4 py-2 border border-2 border-[#47545D] hover:border-[#27343D] transition-all transition-300" download><FileText /> Mon CV</a>
      </div>
    </div>

    </>
  );
}
