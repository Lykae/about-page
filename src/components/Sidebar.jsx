import { LucideGitGraph, LucideMail } from 'lucide-react'
import pfp from './../assets/lofi_lyka.png'

function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-25 self-start">
      <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 md:p-10 lg:p-8 backdrop-blur shadow-xl">

        <img
          className="w-24 h-24 md:w-28 md:h-28 lg:w-24 lg:h-24 rounded-2xl bg-linear-to-br from-indigo-500 to-cyan-400"
          src={pfp}
        />

        <div className="mt-3 md:mt-4">
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold tracking-tight">
            Lyka Mae Schwarz
          </h1>

          <p className="text-zinc-400 mt-3 md:mt-4 md:text-base lg:text-sm leading-relaxed">
            she/her
          </p>
        </div>

        <p className="text-zinc-400 mt-4 md:mt-5 lg:mt-3 md:text-base lg:text-sm leading-relaxed">
          Fullstack developer
        </p>

        <div className="mt-10 md:mt-12 lg:mt-10">
          <p className="text-sm md:text-base text-zinc-500 mb-3 py-2">
            Contact
          </p>

          <div className="flex flex-col gap-3 md:gap-4 text-sm md:text-base">

            <a
              href="mailto:lykamaeschwarz@gmail.com"
              className="text-zinc-300 hover:text-white transition flex flex-row gap-2 items-center"
            >
              <LucideMail size={16} />
              lykamaeschwarz@gmail.com
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Lykae"
              className="text-zinc-300 hover:text-white transition flex flex-row gap-2 items-center"
            >
              <LucideGitGraph size={16} />
              GitHub
            </a>

          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar