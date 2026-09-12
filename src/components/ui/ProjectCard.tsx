import Image from "next/image"
import Link from "next/link"
import { LuExternalLink, LuGithub } from "react-icons/lu"

interface ProjectCardProps {
    title:string;
    description: string;
    liveURL?:string;
    githubURL?:string;
    images:string;
    tags:string[]
}

export default function ProjectCard({
    title, description, liveURL, githubURL, images, tags
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#1a2329] border border-[#242b32] transition-all duration-300 hover:-translate-y-1 hover:border-[#20b2a6]/50 hover:shadow-lg ">
        <div className="relative h-60 md:h-64 overflow-hidden">
            <Image src={images} alt={title} width={10000} height={10000} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />

            <div className="absolute inset-0 bg-[#0f1418]/50 opacity-0 group-hover:opacity-100 transition" />
        </div>

        <div className="p-6 space-y-5">
            <h3 className="text-xl font-semibold text-shadow-white group-hover:text-[#20b2a6] transition">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-[#20b2a6]-10 text-[#20b2a6] border border-[#242b32]">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-4 pt-3">
                {liveURL && (
                    <Link href={liveURL} target="_blank" className="flex items-center gap-1 text-sm text-text-muted hover:text-[#20b2a6] transition">
                        <LuExternalLink className="w-4 h-4" /> Live
                    </Link>
                )}
                {githubURL && (
                    <Link href={githubURL} target="_blank" className="flex items-center gap-1 text-sm text-text-muted hover:text-[#20b2a6] transition">
                        <LuGithub className="w-4 h-4" /> Github
                    </Link>
                )}
            </div>
        </div>
    </div>
  )
}
