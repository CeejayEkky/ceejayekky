import Logo from "@/components/navbar/Logo";
import Link from "next/link";
import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";

const socialInfo = [
  {
    icon: LuGithub,
    title: "Github",
    href: "https://github.com/CeejayEkky",
  },
  {
    icon: LuLinkedin,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/divinedestiny-ekwom-63690431b/",
  },
  {
    icon: LuTwitter,
    title: "X",
    href: "https://x.com/ceejayekky",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#242b32] bg-[#0f1418] overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-110 h-full rounded-full blur-3xl bg-[#20b2a6]/10" />
        <div className="w-[90%] max-w-6xl mx-auto py-14 space-y-10 relative z-10">
            <div className="flex flex-col items-center text-center gap-8 md:flex-row md:items-start md:justify-between md:text-left">
                <div className="space-y-3 max-w-xs">
                    <div className="flex justify-center md:justify-start">
                        <Logo />
                    </div>
                    <p className="text-sm text-gray-300">
                        Crafting modern, scalable web experiences with clean code and thoughtful design.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    {socialInfo.map((ite, i) => (
                    <Link key={i} href={ite.href} target="_blank" title={ite.title} className="w-10 h-10 rounded-full flex items-center justify-center border border-[#242b32] text-gray-300 hover:text-[#20b2a6] hover:border-[#20b2a6] hover:shadow-[0_0_20px_rgba(32, 178, 166, 0.2)] transition-all duration-300">
                            <ite.icon className="w-5 h-5" />
                        </Link>
                    ))}
                </div>
            </div>

            <div className="h-px bg-[#242b32]" />

            <p className="text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} jayprotech | All rights reserved
            </p>
        </div>
    </footer>
  )
}