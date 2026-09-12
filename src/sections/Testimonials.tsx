import SectonHeader from "@/components/ui/SectonHeader"
import Image from "next/image"
import { LuQuote } from "react-icons/lu"

const testimonials = [
    {
        name: "Angela Chioma",
        role: "ACNFashionHouse Founder",
        image: "/images/y6.png",
        feedback: "Working with Ceejay was a perfect experience that elevated my coding skills. He delivers a clean, scalable and presentable work with effective user interaction."
    },
    {
        name: "Afolayan Marvelous",
        role: "MarveTech Founder",
        image: "/images/y4.png",
        feedback: "Ceejay has a strong grasp to modern web technologies. His projects are made effectively stunning and outlines all core ideas made to a brilliant work."
    },
    {
        name: "Helen Chidiebere",
        role: "Admin Starter",
        image: "/images/y1.png",
        feedback: "His ability to translate ideas into a unique sight to see is so impressive. He has a smooth connection and relativeness to work."
    },
    {
        name: "Phylip Genty",
        role: "GentyPlatz Founder",
        image: "/images/y2.jpg",
        feedback: "Very professional and easy to work with. He understands clearly the requirements needed for a particular project being given to him. He smartly levels it all."
    },
    {
        name: "Akindele Enoch",
        role: "PurePlay Manager",
        image: "/images/y5.png",
        feedback: "Ceejay seamlessly bridges the gap between complex logic and user experience, ensuring every line of code serves a stunning visual purpose."
    },
    {
        name: "Joshua Beloved",
        role: "JoshEnterprise Founder",
        image: "/images/y3.jpg",
        feedback: "Ceejay does not just build websites; he engineers digital solutions that capture attention and communicate core concepts with absolute clarity."
    }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0f1418] relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-110 h-full rounded-full blur-3xl bg-[#20b2a6]/10" />
        <div className="w-[90%] max-w-6xl mx-auto space-y-16">
            <SectonHeader title="What people say about me!" badge="Testimonials" description="Feedback from clients and collaborators I've worked with on various projects." />
            <div data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top-center" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((it, ind) => (
                    <div key={ind} className="group relative p-6 rounded-2xl bg-[#1a2329] border border-[#242b32] transition-all duration-300 hover:-translate-y-1 hover:border-[#20b2a6]/40 hover:shadow-lg">
                        <LuQuote className="absolute top-5 right-5 text-[#20b2a6]/10 w-10 h-10" />

                        <p className="text-gray-300 leading-relaxed mb-6 pr-12">
                            {it.feedback}
                        </p>

                        <div className="flex items-center gap-4">
                            <Image width={50} height={50} src={it.image} alt={it.name} className="w-12 h-12 rounded-full object-cover border border-[#242b32]" />
                            <div>
                                <h4 className="text-shadow-white font-semibold group-hover:text-[#20b2a6] transition">{it.name}</h4>
                                <p className="text-sm text-gray-400">{it.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
