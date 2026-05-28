import { LucideExternalLink, LucidePlusCircle } from 'lucide-react'

import inkbook from "./../assets/inkbook.png";
import pmtrio from "./../assets/pmtrio.png";
import tprush from "./../assets/tp_rush.png";
import sfs from "./../assets/sfs.png";
import feigl from "./../assets/feigl_landing.png";
import pefb from "./../assets/pefb.png";
import ptrumps from "./../assets/ptrumps.png";
import cardgen from "./../assets/cardgen.png";

const projectInfo = [
  {
    id: "inkbook",
    name: "Inkbook",
    description: "Lorcana Deckbuilder using Lorcana API.",
    picture: inkbook,
    link: "https://lykae.github.io/inkbook"
  },
  {
    id: "pmtrio",
    name: "PokeMatchTrio",
    description: "Mahjong Solitaire with a Pokemon twist. (Not available online).",
    picture: pmtrio,
    link: "https://github.com/Lykae/pokematchtrio"
  },
  {
    id: "feigl",
    name: "Business Homepage",
    description: "Homepage for a plumbing business. (Coming Soon)",
    picture: feigl,
    link: ""
    //link: "http://130.162.34.90:5001/"
  },
  {
    id: "tprush",
    name: "TriPeaks Generation Algorithm",
    description: "Generates TriPeaks Solitaire games, which have at least one solution.",
    picture: tprush,
    link: "https://lykae.github.io/tripeaks_rush/"
  },
  {
    id: "sfs",
    name: "Showdown Format Selector",
    description: "Browser extension for popular battle simulator Pokemon Showdown. Used by hundreds daily.",
    picture: sfs,
    link: "https://github.com/Lykae/showdown-format-selector"
  },
  {
    id: "cardgen",
    name: "Playing Cards Generaation",
    description: "Customizable Flutter application to generate standard playing cards, inlcudes extra Suit.",
    picture: cardgen,
    link: "https://github.com/Lykae/cards"
  },
  {
    id: "pefb",
    name: "Emerald Friend Battle",
    description: "Pokemon Emerald romhack with \"pass and play\" multiplayer.",
    picture: pefb,
    link: "https://www.hackdex.app/hack/pokemon-emerald-friend-battle"
  },
  {
    id: "ptrumps",
    name: "PokeTrumps",
    description: "Customizable Pokemon TopTrumps card generation.",
    picture: ptrumps,
    link: "https://www.hackdex.app/hack/pokemon-emerald-friend-battle"
  }
];

function ProjectCard({ name, description, picture, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <article className="group h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition cursor-pointer flex flex-col">
        
        <div className="aspect-video overflow-hidden">
          <img
            src={picture}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-5 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">
              {name}
            </h3>

            <LucideExternalLink
              size={18}
              className="text-zinc-500"
            />
          </div>

          <p className="text-zinc-400 mt-3 leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </article>
    </a>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">
          Projects
        </h2>

        <p className="text-sm text-zinc-500">
          Selected Work
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projectInfo.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}


        <a
          href="https://github.com/Lykae"
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          <article className="group h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition cursor-pointer flex flex-col">

            <div className="aspect-video flex items-center justify-center overflow-hidden">
              <LucidePlusCircle
                size={96}
                className="text-zinc-600 group-hover:scale-110 transition duration-300"
              />
            </div>

            <div className="p-5 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">
                  More to come...
                </h3>

                <LucideExternalLink
                  size={18}
                  className="text-zinc-500"
                />
              </div>

              <p className="text-zinc-400 mt-3 leading-relaxed text-sm">
                I'm always working on something. Visit my GitHub, there are some additional smaller projects on there.
              </p>
            </div>
          </article>
        </a>
      </div>
    </section>
  )
}

export default Projects