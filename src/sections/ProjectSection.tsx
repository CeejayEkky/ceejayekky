import ProjectCard from "@/components/ui/ProjectCard"
import SectonHeader from "@/components/ui/SectonHeader"

const projects = [
    {
        title:"Frontend Project",
        description: "This project is based on the buying and selling of modern tech management made purely with Reactjs",
        images: "/images/p1.png",
        tags:["React.js"],
        liveURL: "https://techverse-pi.vercel.app/",
        githubURL: "https://github.com/CeejayEkky/techverse"
    },
    {
        title:"Full Stack Project",
        description: "I made this project for those interested in managing real estates (admin, sellers, buyers).",
        images: "/images/p2.png",
        tags:["React.js", "Tailwindcss", "PayStack", "MERN - MongoDB, Express, Reactjs, Nodejs"],
        liveURL: "https://theapexroot.vercel.app/",
        githubURL: "https://github.com/CeejayEkky/apexroot-client"
    },
    {
        title:"Gaming Project",
        description: "This is a gaming project made for fun mind games",
        images: "/images/p3.png",
        tags:["React.js"],
        liveURL: "https://jaynimal.vercel.app/",
        githubURL: "https://github.com/CeejayEkky/jaynimal"
    },
    {
        title:"Full Stack Project",
        description: "This was made for a lounge company named Westend Lounge and Sports Bar, all for their management",
        images: "/images/p4.png",
        tags:["TailwindCSS", "Supabase", "Framer Motion", "MERN - MongoDB, Express, Reactjs, NodeJs"],
        liveURL: "https://westend-lounge-frontend.onrender.com/",
        githubURL: "https://github.com/CeejayEkky/westend-lounge-frontend"
    },
    {
        title:"Full Stack Project",
        description: "This project deals food delivery from a particular company known as SnacXpress.",
        images: "/images/p6.png",
        tags:["Tailwindcss", "Stripe", "MERN - MongoDB, Express, Reactjs,Nodejs"],
        liveURL: "https://snacxpress.onrender.com/",
        githubURL: "https://github.com/CeejayEkky/techverse"
    },
    {
        title:"Python Project",
        description: "This is a gaming project made with the turtle module in Python",
        images: "/images/p7.png",
        tags:["Python"],
        liveURL: "/images/p7.png",
        githubURL: "https://github.com/CeejayEkky/Python-Games"
    },
    {
        title:"Frontend Project",
        description: "This project is based on the outlook of cryptocurrency rise, fall and other updates interested",
        images: "/images/p8.png",
        tags:["Reactjs", "TailwindCSS", "Gecko Coin"],
        liveURL: "https://getcrypto-green.vercel.app/",
        githubURL: "https://github.com/CeejayEkky/GetCrypto"
    },
    {
        title:"Full Stack Project",
        description: "I made this project for a client of mine for those interested in fashion (admin, buyers).",
        images: "/images/p9.png",
        tags:["Tailwindcss", "PayStack", "MERN - MongoDB, Express, Reactjs, Nodejs"],
        liveURL: "https://acnfashion.onrender.com/",
        githubURL: "https://github.com/CeejayEkky/acnfashion-client"
    },
    {
        title:"Frontend Project",
        description: "This project is based on modern tech comparison",
        images: "/images/p10.png",
        tags:["React.js"],
        liveURL: "http://techpare.vercel.app/",
        githubURL: "https://github.com/CeejayEkky/techpare"
    },
]

export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 relative" >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-110 h-full rounded-full blur-3xl bg-[#20b2a6]/10" />
      <div className="w-[95%] mx-auto space-y-12">
        <SectonHeader title="Some of my recent" highlight="work" badge="Projects" description="A selection of projects showcasing my ability to design, build and scale modern fullstack applications." />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
        {projects.map((project, i) => (
            <div key={i} data-aos="fade-right" data-aos-delay={i*100} data-aos-anchor-placement="top-center">
                <ProjectCard {...project} />
            </div>
        ))}
      </div>
      </div>
    </section>
  )
}