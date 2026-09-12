import Link from "next/link";
import { navLinks } from "./Navbar";

interface MobileNavProps {
    navOpen: boolean;
    setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MobileNav({ navOpen }: MobileNavProps) {
  return (
    <>
      <div className={`fixed inset-0 z-40 lg:hidden bg-background/70 backdrop-blur-sm transition-all duration-500 ${navOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <aside className={`fixed top-0 right-0 z-50 h-full w-[80%] sm:w-[60%] lg:hidden bg-[#1a2329]/95 backdrop-blur-md border-l border-[#242b32] flex flex-col items-center justify-center space-y-2 px-6 transition-all duration-500 ${navOpen ? "translate-x-0" : "translate-x-full"}`}>
          <ul>
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="block w-full text-center py-4 px-6 rounded-lg text-lg font-medium text-[#f0f2f5] border border-transparent transition-all duration-300 hover:bg-[#20b2a6]/10 hover:text-[#20b2a6] hover:border-[#242b32]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  )
}
