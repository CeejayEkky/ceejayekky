'use client'
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import LinkBtn from "../ui/LinkBtn";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import MobileNav from "./MobileNav";

export const navLinks = [
    {href: "#home", label: "Home"},
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#testimonials", label: "Testimonials"},
    {href: "#contact", label: "Reach Out"},
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        const hScroll = () => {
            setScrolled(window.scrollY > 40)
        }

        window.addEventListener("scroll", hScroll)

        return () => window.removeEventListener("scroll", hScroll)

    }, [])
  return (
    <>
        <nav className={`fixed top-0 left-0 w-full z-60 transition-all duration-300 ${scrolled ? "backdrop-blur-2xl" : "bg-transparent"}`}>
            <div className="w-[95%] lg:w-[90%] mx-auto h-16 flex items-center justify-between">
                <Logo />

                <ul className="hidden lg:flex items-center gap-1 py-2.5 px-1 rounded-full bg-surface/60 backdrop-blur-xl border border-[#242b32]">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href} className="px-4 py-2 rounded-full text-sm font-medium text-gray-300
                            transition-all hover:text-blue-300 hover:bg-surface duration-300">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:block">
                    <LinkBtn 
                    iconPosition="right" variant="outline"
                    rounded
                    icon={LuDownload}
                    text="Download CV" href="/documents/cv.pdf" download />
                </div>
                <button 
                    className="z-50 lg:hidden w-10 h-10 rounded-lg flex items-center justify-center border border bg-surface/60 text-white 
                    cursor-pointer hover:border-blue-300 hover:text-blue-300 transition"
                    onClick={() => setNavOpen(!navOpen)}
                >
                {navOpen ? <LuX size={24} /> : <LuMenu size={24} />}
                </button>
            </div>
        </nav>

        <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
    </>
  )
}
