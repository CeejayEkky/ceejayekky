'use client'

import SectonHeader from "@/components/ui/SectonHeader";
import { useState } from "react";
import toast from "react-hot-toast";
import { LuMail, LuMapPin, LuPhone, LuSend } from "react-icons/lu";

const contactInfo = [
  {
    icon: LuMail,
    label: "Email",
    value: "ceejayekky300@gmail.com",
    href: "mailto:ceejayekky300@gmail.com",
  },
  {
    icon: LuPhone,
    label: "Phone No.",
    value: "+234 911 322 5710",
    href: "tel:+2349113225710",
  },
  {
    icon: LuMapPin,
    label: "Location",
    value: "Nigeria",
    href: "#",
  },
];

export default function ContactSection() {
  const [loading, setLoading] = useState(false)
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setLoading(true);

  const form = event.currentTarget;
  const formData = new FormData(form);

  const accessKey = "fd69d2c2-8308-42c2-9952-1221262de7ef";

  if (!accessKey) {
    toast.error("Web3Forms access key is missing.");
    setLoading(false);
    return;
  }

  formData.append("access_key", accessKey);
  console.log("Access key exists:", !!process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
  
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully!");
      form.reset();
    } else {
      toast.error(data.message || "Error submitting form");
    }
  } catch (error) {
    console.error(error);
    toast.error("Network error. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 -translate-x-1/2 w-95 h-90 rounded-full blur-3xl bg-[#20b2a6]/10" />
      <div className="w-[90%] max-w-6xl mx-auto relative z-10 space-y-16">
        <SectonHeader
          title="Let's build"
          highlight="something impressive"
          badge="Reach Out"
          description="Have a project or idea in mind? I'd love to hear about it. Let's connect."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form  data-aos="flip-right" data-aos-anchor-placement="top-center" onSubmit={onSubmit} className="p-6 rounded-2xl bg-[#1a2329] border border-[#242b32] space-y-5">
            <h3 className="text-lg font-semibold text-[#f0f2f5]">
              Send a message
            </h3>
            <div>
                <label className="text-sm text-gray-400 block mb-1">Name</label>
                <input name="name" type="text" required placeholder="Your name" className="w-full px-4 py-2 rounded-lg bg-[#0f1418] border border-[#242b32] text-[#f0f2f5] outline-none focus:border-[#20b2a6] transition" />
            </div>
            <div>
                <label className="text-sm text-gray-400 block mb-1">Email</label>
                <input name="email" type="email" required placeholder="Your email" className="w-full px-4 py-2 rounded-lg bg-[#0f1418] border border-[#242b32] text-[#f0f2f5] outline-none focus:border-[#20b2a6] transition" />
            </div>
            <div>
                <label className="text-sm text-gray-400 block mb-1">Message</label>
                <textarea name="message" required rows={4} placeholder="Your message..." className="w-full px-4 py-2 rounded-lg bg-[#0f1418] border border-[#242b32] text-[#f0f2f5] outline-none focus:border-[#20b2a6] transition resize-none"></textarea>
            </div>

            <button disabled={loading} type="submit" className="w-full py-3 rounded-full bg-[#20b2a6] text-gray-200 font-medium hover:opacity-90 transition flex items-center justify-center gap-2 cursor-pointer">
                {loading ? <>
                  <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Sending message...
                </> : <><LuSend className="w-4 h-4" /> Send Message</>}
            </button>
          </form>

          <div className="p-2" data-aos="fade-left" data-aos-anchor-placement="top-center">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
                {contactInfo.map((item, i) => (
                    <a href={item.href} key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#1a2329] transition-colors group">
                        <div className="w-12 h-12 rounded-xl bg-[#20b2a6]/10 flex items-center justify-center group-hover:bg-[#20b2a6]/20 transition-colors">
                            <item.icon className="w-5 h-5 text-[#20b2a6]" />
                        </div>
                        <div>
                            <div className="text-gray-400 text-sm">
                                {item.label}
                            </div>
                            <div className="font-medium">
                                {item.value}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}