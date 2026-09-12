import GhostFibers from "@/components/hero/background";
import LinkBtn from "@/components/ui/LinkBtn";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center pt-30 py-10"
    >
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-[#20b2a6]/10" />

      <div className="inset-0 absolute">
        <GhostFibers
          lineColor="#140E35"
          glowColor="#20b2ff"
          speed={0.3}
          scale={2}
          rotation={2}
          rotationSpeed={0.25}
          layers={4}
          waveAmplitude={0.015}
          waveFrequency={3}
          waveSpeed={0.1}
          layerSpeed={0.08}
          twist={0.3}
          twistFrequency={5}
          twistSpeed={1.2}
          lineFrequency={30}
          lineSpacing={2}
          lineSharpness={16}
          glowFalloff={20}
          glowIntensity={0.6}
          brightness={0.7}
          blueBoost={1}
          vignette={0.8}
          grain={0.03}
          dpr={1}
          lightMode={false}
          fps={60}
          paused={false}
        />
      </div>

      <div className="relaive z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-2">
          <span data-aos="fade-up" className="inline-block px-4 py-1 5 rounded-full bg-[#20b2a6]/10 text-[#4f69df] text-sm border border-[#242b32]">
            FullStack Developer | MERN Expert
          </span>
          <h1 data-aos="fade-up" data-aos-delay="300" className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white/90">
            Developing modern web designs and ideas with{" "}
            <span className="text-sky-300/70">clean code</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="500" className="text-gray-400 max-w-lg tracking-wide">
            Best with experience in Full-Stack Development, Frontend
            Engineering, Backend Development, Database Management, AI Agent
            Development and Data Analysis. Skilled in building responsive web
            applications, REST APIs, managing databases, integrating third-party
            services, and transforming data into useful insights.
          </p>

          <div className="flex items-center gap-4 pt-2" data-aos="fade-up" data-aos-delay="750">
            <LinkBtn
              text="Get In Touch"
              href="#contact"
              rounded
              icon={LuArrowRight}
            />
            <LinkBtn
              text="View projects"
              href="#projects"
              rounded
              variant="outline"
            />
          </div>
        </div>

        <div className="flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="600">
          <div className="relative w-95 h-95 md:w-110 md:h-110 rounded-4xl bg-[#1a2329]/80 backdrop-blur-md border border-[#242b32] flex items-center justify-center">

            <div className="absolute inset-0 rounded-full bg-[#20b2a6]/20 blur-3xl" />
            <Image fill src={'/images/myselff.png'} alt="profile" className="z-10 object-cover rounded-4xl"/>
          </div>
        </div>
      </div>
    </section>
  );
}
