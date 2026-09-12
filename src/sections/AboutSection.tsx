/* eslint-disable react/no-unescaped-entities */

import Image from "next/image"
import { LuCode, LuDatabase, LuRocket } from "react-icons/lu"

export default function AboutSection() {
  return (
    <section id="about" className='py-24 overflow-hidden relative'>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-110 h-full rounded-full blur-3xl bg-[#20b2a6]/10" />
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-delay="110" data-aos-anchor-placement="top-center" className="flex justify-center lg:justify-start">
                <div className="relative w-90 h-90 md:w-130 md:h-130 rounded-b-full rounded-3xl bg-[#1a2329]/80 backdrop-blur-md border border-[#242b32] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 rounded-2xl bg-[#20b2a6]/10 blur-2xl" />

                    <div className="w-[90%] h-[90%] relative">
                        <Image fill src='/images/meee.png' alt='imageofCeejay' className='z-10 object-cover rounded-b-full bg-blue-900/20' />
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <span  data-aos="fade-left" data-aos-delay="100" data-aos-anchor-placement="top-center" className="text-sm text-[#20b2a6] bg-[#20b2a6]/10 px-4 py-1.5 rounded-full border border-[#242b32] inline-block">What I'm All About</span>
                <h2  data-aos="fade-left" data-aos-anchor-placement="top-center" className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Building up scalable and user-focused web applications is my thing.
                </h2>
                <p  data-aos="fade-left" data-aos-anchor-placement="top-center" className='max-w-xl text-gray-400'>
                    I&apos;m a passionate Software Developer with a strong interest in
                    building modern, responsive, and meaningful digital solutions. I
                    enjoy taking ideas from concept to reality, whether that means
                    designing a polished user interface, developing a powerful
                    backend, working with databases, or turning raw data into useful
                    insights.
                </p>
                <p  data-aos="fade-left" data-aos-anchor-placement="top-center" className="text-gray-400 max-w-xl">
                    Beyond writing code, I'm constantly exploring new
                    technologies, improving my problem-solving skills, and working on
                    personal and real-world projects that challenge me to grow. I
                    believe good software is not just about making something work,
                    it's about creating experiences that are reliable, intuitive, and
                    genuinely useful.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                    <div  data-aos="fade-down" data-aos-delay="50" data-aos-anchor-placement="top-center" className='p-4 rounded-xl bg-[#1a2329] border border-[#242b32] text-center'>
                        <LuRocket className='mx-auto mb-2 text-[#20b2a6] w-6 h-6' />
                        <p className="text-[#f0f2f5] text-sm">Performance</p>
                    </div>
                    <div  data-aos="fade-down" data-aos-delay="50" data-aos-anchor-placement="top-center" className='p-4 rounded-xl bg-[#1a2329] border border-[#242b32] text-center'>
                        <LuCode className='mx-auto mb-2 text-[#20b2a6] w-6 h-6' />
                        <p className="text-[#f0f2f5] text-sm">Clean Code</p>
                    </div>
                    <div  data-aos="fade-down" data-aos-delay="50" data-aos-anchor-placement="top-center" className='p-4 rounded-xl bg-[#1a2329] border border-[#242b32] text-center'>
                        <LuDatabase className='mx-auto mb-2 text-[#20b2a6] w-6 h-6' />
                        <p className="text-[#f0f2f5] text-sm">Fullstack Apps</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
