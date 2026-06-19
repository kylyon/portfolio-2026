import React from 'react';

const techStack = [
  { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
];

export const TechStackCarousel = () => {
  return (
    <div className="w-full overflow-hidden py-8 bg-transparent [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
      <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
        {[...techStack, ...techStack].map((tech, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center gap-2 w-[120px] mx-8 transition-transform duration-300 ease-in-out hover:-translate-y-1.5"
          >
            <img 
              src={tech.src} 
              alt={`Logo de ${tech.name}`} 
              className="w-[50px] h-[50px] object-contain drop-shadow-[0_0_8px_rgba(74,222,128,0.2)]" 
            />
            <span className="text-sm text-gray-400 font-mono">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};