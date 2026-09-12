import Link from "next/link"

interface LinkBtnProps {
    href: string;
    text: string;
    icon?:import("react-icons").IconType;
    iconPosition?:"left" | "right";
    rounded?:boolean;
    download?:boolean

    variant?:"primary" | "outline"
}

export default function LinkBtn({
    href, text, icon:Icon, iconPosition="right", rounded, download = false,
    variant = "primary"
}: LinkBtnProps) {
    const baseStyles = `relative px-6 py-3 font-medium ${rounded ? "rounded-full" : "rounded-lg"} inline-flex items-center justify-center gap-2 overflow-hidden text-text border transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`

    const variants = {
        primary: `bg-sky-900 text-background`,
        outline: `bg-transparent text-text border-border hover:text-sky-300 hover:border-sky-300 hover:bg-sky-300/10`
    }
  return (
    <Link href={href} download={download} className={`${baseStyles} ${variants[variant]}`}>
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5 z-10" />}
      <span className="z-10">{text}</span>
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5 z-10" />}
    </Link>
  )
}
