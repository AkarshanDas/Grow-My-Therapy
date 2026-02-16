"use client"; 

import React, { useState } from 'react';
import { Outfit } from "next/font/google"; 


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function LilacClone() {
  
  const [openFaq, setOpenFaq] = useState(null);
  const [openPro, setOpenPro] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const faqs = [
    { q: "Do you take insurance?", a: "I am an out-of-network provider. I can provide you with a superbill for potential reimbursement." },
    { q: "What are your rates?", a: "Standard 50-minute sessions are $150. I offer a limited number of sliding scale spots." },
    { q: "Do you have any openings?", a: "I am currently accepting new clients for Tuesday and Thursday afternoons." }
  ];

  const proBackground = [
    { title: "Education", detail: "Master of Arts in Counseling Psychology from the University of Minnesota." },
    { title: "Licensure", detail: "Licensed Professional Clinical Counselor (LPCC) #12345." },
    { title: "Certifications", detail: "Certified Clinical Trauma Professional (CCTP) and Mindfulness Coach." }
  ];

  return (
    <div className="${outfit.className} min-h-screen bg-[#F9F6F3] text-[#223614] selection:bg-[#7D7C47] selection:text-white antialiased">
      
      
      <nav className="relative flex items-center justify-between px-[4vw] md:px-[6vw] py-[2.5rem] bg-[#F9F6F3] z-50">
        <div className="text-[22px] font-medium tracking-[-0.02em]">Lilac Template</div>
        <div className="flex items-center space-x-[3.5vw]">
          <div className="hidden md:flex space-x-[2.5rem] text-[13px] font-medium uppercase tracking-[0.25em]">
            <a href="#" className="hover:opacity-50 transition">Blog</a>
            <a href="#" className="hover:opacity-50 transition">Contact</a>
          </div>
          <div 
            className="md:hidden text-2xl cursor-pointer" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </div>
        </div>

        
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#F9F6F3] border-b border-black/10 flex flex-col p-8 space-y-4 md:hidden">
            <a href="#" className="text-sm uppercase tracking-widest font-bold">Blog</a>
            <a href="#" className="text-sm uppercase tracking-widest font-bold">Contact</a>
          </div>
        )}
      </nav>

      
      <section className="grid grid-cols-1 md:grid-cols-12 gap-[11px] px-[4vw] md:px-[6vw] py-[10vh] max-w-[100vw] overflow-hidden">
        <div className="md:col-span-5 flex justify-start mb-12 md:mb-0">
          <div className="relative w-full aspect-[0.82/1] rounded-t-full overflow-hidden bg-gray-200">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=2500w" 
              alt="Lilac Flowers" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-7 md:pl-[5vw] flex flex-col justify-center">
          <h1 className="text-[clamp(45px,10vw,100px)] font-normal leading-[0.92] mb-[4vh] tracking-[-0.04em]">
            Live your life <br /> in full bloom
          </h1>
          <p className="text-[17.2096px] leading-[27.5354px] mb-[6vh] text-[#223614]/80 max-w-[450px]">
            Therapy for Adults in Minneapolis, MN.
          </p>
          <button className="group relative w-fit border border-[#223614] px-[45px] py-[22px] text-[11px] font-bold uppercase tracking-[0.3em] transition-all">
            <span className="relative z-10 group-hover:text-white transition-colors">Connect With Me —&gt;</span>
            <div className="absolute inset-0 bg-[#223614] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </section>

            
      <section className="flex flex-col md:flex-row min-h-[85vh]">
        
        <div className="w-full md:w-1/2 bg-[#EAE5DF] flex flex-col justify-between text-[#223614]">
          <div className="px-[6vw] py-[10vh]">
            <h2 className=" mt-80 text-[clamp(40px,6vw,80px)] font-normal mb-[2.5rem] leading-[1.05] tracking-tight">
              Live a fulfilling life.
            </h2>

            <div className="space-y-[1.8rem] text-[17.2px] leading-[1.7em] max-w-[460px] opacity-90">
              <p>
                Life can be challenging—especially when you're trying to
                balance your personal and professional life.
              </p>
              <p>
                It's easy to feel like you're alone in facing these
                challenges, but I want you to know that I'm here to help.
              </p>
            </div>
          </div>

          
          <div className="border-t border-[#223614]/30 py-6 flex justify-center mt-5">
            <button className="text-[11px] font-bold uppercase tracking-[0.3em] hover:opacity-60 transition">
              GET IN TOUCH →
            </button>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 bg-gray-300">
          <img
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=2500w"
            className="w-full h-full object-cover"
            alt="Lifestyle"
          />
        </div>
      </section>


      
      <section className="py-[12vh] px-[4vw] md:px-[6vw] text-center bg-[#F9F6F3]">
        <h2 className="text-[clamp(40px,8vw,80px)] font-normal mb-[10vh] tracking-[-0.02em]">My Specialties</h2>
        <div className="grid md:grid-cols-3 gap-[2rem] max-w-[1400px] mx-auto">
          {[
            { 
              title: "Self-Esteem", 
              text: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
              imageUrl: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=1000w" 
            },
            { 
              title: "Relationships", 
              text: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
              imageUrl: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg?format=750w" 
            },
            { 
              title: "Burnout", 
              text: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
              imageUrl: "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=750w" 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#EAE5DF] p-[3rem] flex flex-col items-center border border-black/[0.02]">
              <h3 className="text-[28px] font-normal mb-[1.5rem] tracking-tight">{item.title}</h3>
              <p className="text-[15px] leading-[1.8em] mb-[3rem] text-[#223614]/70 px-2">
                {item.text}
              </p>
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden bg-gray-200 border border-black/5">
                <img 
                  src={item.imageUrl} 
                  className="w-full h-full object-cover" 
                  alt={item.title} 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

            
      <section className="flex flex-col md:flex-row min-h-[85vh]">
        
        <div className="w-full md:w-1/2 bg-gray-300">
          <img
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=2500w"
            className="w-full h-full object-cover"
            alt="Support"
          />
        </div>

        
        <div className="w-full md:w-1/2 bg-[#B8B8C7] flex flex-col justify-between text-[#223614]">
          <div className="px-[6vw] py-[10vh]">
            <h2 className="text-[clamp(40px,6vw,80px)] font-normal mb-[2.5rem] leading-[1.05] tracking-tight">
              You don’t have to do <br />
              this all <span className="italic">alone.</span>
            </h2>

            <p className="text-[20px] mb-[2rem] opacity-90">
              If you are facing any of these, there’s hope:
            </p>

            <ul className="space-y-[1.2rem] mb-[2.5rem]">
              {[
                "Persistent feelings of sadness or hopelessness",
                "Trouble focusing or making decisions",
                "Difficulty maintaining relationships",
                "Feeling constantly exhausted or unmotivated",
                "A pervasive sense of being overwhelmed"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-[17.2px] tracking-wide">
                  <span className="mr-3 mt-[10px] block w-[6px] h-[6px] rounded-full bg-[#223614]"></span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-[17px] leading-[1.7em] max-w-[520px] opacity-90">
              With empathy and guidance, we’ll work together to navigate the
              challenges life throws your way.
            </p>
          </div>

          
          <div className="border-t border-[#223614]/30 py-6 flex justify-center">
            <button className="text-[11px] font-bold uppercase tracking-[0.3em] hover:opacity-60 transition">
              WORK WITH ME →
            </button>
          </div>
        </div>
      </section>


      
      <section className="py-[15vh] px-[4vw] md:px-[6vw] bg-[#F9F6F3]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[8vw] items-center">
          
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-[clamp(40px,7vw,72px)] font-normal mb-[2.5rem] tracking-tight">Hi, I’m Lilac.</h2>
            <p className="text-[18px] leading-[1.7em] text-[#223614]/90 mb-[3.5rem] max-w-[500px]">
              I’m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we’ll work together to navigate the challenges life throws your way.
            </p>
            <button className="w-fit px-[40px] py-[18px] border border-[#223614] text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#223614] hover:text-white transition-all duration-300">
              LET'S CHAT —&gt;
            </button>
          </div>

          <div className="relative flex justify-center md:justify-end order-1 md:order-2 mb-20 md:mb-0">
            <div className="w-[85%] aspect-[0.75/1] rounded-t-full overflow-hidden bg-gray-200">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w"
                alt="Main Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-[-15%] left-[-5%] md:left-[5%] w-[45%] aspect-square rounded-full overflow-hidden border-[10px] border-[#F9F6F3] bg-gray-100 shadow-sm">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w" 
                alt="Detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-[12vh] px-[4vw] md:px-[6vw] bg-[#F9F6F3]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[5vw] items-start">
          <div className="md:col-span-5 flex justify-center sticky top-10">
            <div className="w-full max-w-[450px] aspect-[0.82/1] rounded-t-full bg-[#EAE5DF] overflow-hidden">
               <img src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg?format=2500w" className="w-full h-full object-cover" alt="FAQ image" />
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="text-[clamp(40px,6vw,80px)] font-normal mb-[4rem] tracking-tight">FAQs</h2>
            <div className="border-t border-[#223614]/20">
              {faqs.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group border-b border-[#223614]/20 py-[2rem] cursor-pointer transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[24px] md:text-[30px] font-light tracking-tight">{item.q}</span>
                    <span className={`text-3xl font-extralight transition-transform duration-500 ${openFaq === idx ? 'rotate-45' : ''}`}>+</span>
                  </div>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === idx ? 'max-h-40 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-[17px] leading-relaxed text-[#223614]/70 max-w-prose">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-[12vh] px-[4vw] md:px-[6vw] bg-[#EAE5DF]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[clamp(32px,5vw,64px)] font-normal mb-[4rem] tracking-tight">My Professional Background</h2>
          <div className="border-t border-[#223614]/20 text-left">
            {proBackground.map((item, idx) => (
              <div 
                key={idx} 
                className="group border-b border-[#223614]/20 py-[1.8rem] cursor-pointer transition-colors"
                onClick={() => setOpenPro(openPro === idx ? null : idx)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[24px] font-light tracking-tight">{item.title}</span>
                  <span className={`text-2xl font-extralight transition-transform duration-300 ${openPro === idx ? 'rotate-90' : ''}`}>+</span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ${openPro === idx ? 'max-h-32 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[16px] text-[#223614]/80">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <footer className="bg-[#7D7C47] py-[10vh] w-full flex flex-col items-center justify-center space-y-12">
          <h2 className="text-[#F9F6F3] text-[clamp(40px,8vw,90px)] font-normal tracking-tight text-center">Get started today.</h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-[#F9F6F3] text-[24px] font-medium tracking-tight">Lilac Template</div>
            <p className="text-[#F9F6F3] text-[10px] tracking-[0.5em] uppercase font-bold opacity-60">© 2026 Powered by Next.js</p>
          </div>
      </footer>

    </div>
  );
}