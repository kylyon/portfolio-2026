import type { Metadata } from "next";
import { Josefin_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const geistSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyllian Marie-Magdelaine - Portfolio",
  description: "Portfolio de Kyllian Marie-Magdelaine, présentant ses experiences, ses projets, son expertise et sa stack technique",
  keywords : "portfolio, expertise, projets, nextjs, nodejs, payloadcms, freelance, seo, react",
  icons : {
    icon: "/icon_portfolio.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="h-full font-sans">
        <div className="-z-1 fixed w-dvw h-dvh overflow-hidden">
          <svg width="1920" height="945" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="f1" x="-150%" y="-150%" width="400%" height="400%" xmlns="http://www.w3.org/2000/svg">
                <feGaussianBlur in="SourceGraphic" stdDeviation="150" />
              </filter>
            </defs>
            <circle cx="292" cy="880" r="200" fill="#306BAC" opacity="1" filter="url(#f1)" />
            <circle cx="642" cy="252" r="150" fill="#61D095" opacity="1" filter="url(#f1)" />
            <circle cx="1582" cy="200" r="200" fill="#E0BAD7" opacity="1" filter="url(#f1)" />
            <circle cx="1085" cy="763" r="150" fill="#EFD6AC" opacity="1" filter="url(#f1)" />
          </svg>
        </div>
        <nav className="grid grid-cols-[1fr_800px_1fr] p-4 font-sans text-xl fixed w-full z-10 backdrop-blur-sm">
            <ul className="flex gap-8 col-start-2 items-center justify-center font-light">
              <li><a href="#about">A propos</a></li>
              <li><a href="#projets">Projets</a></li>
              <li><a href="#expertises">Expertises</a></li>
              <li><a href="#stacks">Stack technique</a></li>
              <li><a href="#contact" className="bg-[#EFD6AC] text-black px-4 py-3 rounded font-normal">Contactez moi !</a></li>
            </ul>
            <div className="flex gap-4 items-center justify-end">
              <a href="https://github.com/kylyon" target="_blank"><FontAwesomeIcon icon={faGithub} className="h-10"/></a>
              <a href="https://www.linkedin.com/in/kyllian-marie-magdelaine/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="h-10"/></a>
            </div>
        </nav>
        <main className="flex flex-col items-center px-60 font-sans pt-20 ">
          {children}
        </main>
        <footer className="text-center font-sans">
          Kyllian Marie-Magdelaine - {new Date().getFullYear()}
        </footer>
      </body>
      
    </html>
  );
}
