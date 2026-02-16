"use client";
import React, { useState } from "react";

export default function RedesignPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const specialties = [
    {
      title: "Trauma & EMDR Recovery",
      desc: "Careful, paced work for complex trauma with safety and stabilization.",
      img: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Anxiety & Panic Care",
      desc: "Practical CBT tools to manage constant worry and body tension.",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Burnout & Resilience",
      desc: "Support for high-achievers feeling disconnected after years of stress.",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const faqs = [
    {
      q: "Do you offer virtual sessions?",
      a: "Yes. Secure telehealth sessions are available for all California residents.",
    },
    {
      q: "How long is each session?",
      a: "Standard sessions are 50 minutes, with extended sessions available when clinically appropriate.",
    },
    {
      q: "Do you accept insurance?",
      a: "I am an out-of-network provider and can provide superbills for reimbursement.",
    },
    {
      q: "How do I know if therapy is right for me?",
      a: "We begin with a consultation to explore your goals and ensure the approach is a good fit.",
    },
  ];

  return (
    <div className="bg-[#1A2223] text-[#E5E7E6] tracking-wide">

      
      <nav className="flex justify-between px-[6vw] py-8 border-b border-white/10 sticky top-0 bg-[#1A2223]/95 backdrop-blur z-50">
        <div>
          <p className="font-serif text-2xl text-[#D4AF37] tracking-tight">
            Dr. Maya Reynolds, PsyD
          </p>
          <p className="text-[11px] uppercase tracking-[0.35em] opacity-50">
            Licensed Clinical Psychologist
          </p>
        </div>
        <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">
          <a href="#about">About</a>
          <a href="#services">Specialties</a>
          <a href="#approach">Approach</a>
          <a href="#background">Background</a>
          <a href="#faq">FAQ</a>
          <a href="#office">Office</a>
        </div>
      </nav>

      
      <section className="relative grid md:grid-cols-2 gap-16 px-[6vw] py-28 items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_transparent_60%)]"></div>

        <div>
          <div className="inline-block px-4 py-1 border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-widest rounded-full mb-6">
            In-Person Santa Monica & Virtual California
          </div>

          <h1 className="text-[clamp(46px,6vw,82px)] font-serif leading-tight tracking-tight">
            Dr. Maya Reynolds
          </h1>

          <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-sm mt-3 mb-8">
            PsyD • Licensed Clinical Psychologist
          </p>

          <p className="opacity-70 max-w-lg text-lg">
            Anxiety & Trauma Therapy for high-achieving adults ready to move
            from exhaustion to grounded resilience.
          </p>

          <button className="mt-10 bg-white text-[#1A2223] px-10 py-4 rounded-full uppercase tracking-widest text-sm font-bold hover:bg-[#D4AF37] transition-all shadow-lg">
            Schedule Consultation
          </button>
        </div>

        
        <div className="rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl h-[520px]">
          <img
            src="/images/hero-doctor.png"
            alt="Dr. Maya Reynolds"
            className="w-full h-full object-cover object-[50%_30%]"
          />
        </div>
      </section>

      
      <section id="about" className="py-28 bg-[#242D2E] px-[6vw] grid md:grid-cols-2 gap-16 items-center">
        <img
          src="https://images.unsplash.com/photo-1527236438218-d82077ae1f85?q=80&w=1200&auto=format&fit=crop"
          className="rounded-3xl shadow-xl h-[420px] w-full object-cover"
        />

        <div>
          <span className="text-[#D4AF37] uppercase tracking-[0.35em] text-xs">
            You Don’t Have To Do This Alone
          </span>

          <h2 className="text-[clamp(36px,4vw,56px)] font-serif mt-6 mb-8 leading-tight">
            Warm, collaborative, and deeply grounded care.
          </h2>

          <p className="opacity-70 leading-relaxed text-lg max-w-xl">
            Therapy offers a space to slow down, reconnect with your body, and
            rediscover clarity. Together, we’ll build the tools and insight
            needed for lasting emotional resilience.
          </p>
        </div>
      </section>

      
      <section id="services" className="py-28 px-[6vw]">
        <h2 className="text-center text-4xl font-serif mb-16 tracking-tight">
          Areas of Focus
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {specialties.map((s, i) => (
            <div
              key={i}
              className="bg-[#242D2E] p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white/5"
            >
              <img src={s.img} className="rounded-xl mb-6 h-48 w-full object-cover" />
              <h3 className="text-xl text-[#D4AF37] font-serif mb-3">{s.title}</h3>
              <p className="opacity-60 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section id="approach" className="py-28 bg-[#242D2E] px-[6vw] text-center">
        <span className="text-[#D4AF37] uppercase tracking-widest text-xs">
          Therapeutic Philosophy
        </span>

        <h2 className="text-[clamp(36px,4vw,52px)] font-serif mt-6 mb-16">
          A Thoughtful, Integrative Approach
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
          {[
            ["Cognitive Behavioral Therapy", "Practical tools to reshape thought patterns and reduce anxiety."],
            ["EMDR Trauma Processing", "Evidence-based therapy to safely reprocess traumatic memories."],
            ["Somatic & Nervous System Work", "Body-based techniques to restore safety and emotional regulation."],
          ].map(([title, desc], i) => (
            <div key={i} className="bg-[#1A2223] p-10 rounded-3xl hover:shadow-xl transition">
              <h3 className="text-[#D4AF37] font-serif text-xl mb-4">{title}</h3>
              <p className="opacity-70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section id="background" className="py-28 px-[6vw] grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#D4AF37] uppercase tracking-widest text-xs">
            Professional Background
          </span>
          <h2 className="text-[clamp(36px,4vw,52px)] font-serif mt-6 mb-8">
            Experience Rooted in Clinical Excellence
          </h2>
          <p className="opacity-70 leading-relaxed text-lg">
            Dr. Reynolds completed her doctoral training in clinical psychology
            with a focus on trauma and anxiety disorders. She has worked in
            hospital settings, community mental health clinics, and private
            practice, supporting individuals through complex emotional
            challenges with evidence-based care.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop"
          className="rounded-3xl shadow-xl h-[420px] w-full object-cover"
        />
      </section>

      
      <section id="faq" className="py-28 bg-[#242D2E] px-[6vw] max-w-4xl mx-auto">
        <h2 className="text-center text-4xl font-serif mb-16">Frequently Asked Questions</h2>

        {faqs.map((f, i) => (
          <div key={i} className="border-b border-white/10 py-6">
            <button
              className="w-full text-left flex justify-between items-center"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <span className="text-lg">{f.q}</span>
              <span>{openFaq === i ? "−" : "+"}</span>
            </button>
            {openFaq === i && (
              <p className="mt-4 opacity-70 text-sm leading-relaxed">{f.a}</p>
            )}
          </div>
        ))}
      </section>

      
      <section id="office" className="py-36 px-[6vw] grid md:grid-cols-2 gap-24 items-center bg-[#111819]">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/office1.jpeg" className="w-full h-[460px] object-cover" />
          </div>
          <div className="absolute -bottom-16 -right-10 w-64 rounded-2xl overflow-hidden border-[10px] border-[#111819] shadow-xl">
            <img src="/images/office2.jpeg" className="w-full h-52 object-cover" />
          </div>
        </div>

        <div>
          <span className="text-[#D4AF37] uppercase tracking-widest text-xs">
            The Physical Practice
          </span>
          <h2 className="text-[clamp(36px,4vw,56px)] font-serif mt-6 mb-8">
            A Sanctuary Designed for Nervous System Calm.
          </h2>
          <p className="opacity-70 leading-relaxed text-lg mb-10">
            Natural light, warm textures, and intentional design help your body
            settle the moment you arrive.
          </p>
        </div>
      </section>

      
      <section className="py-24 bg-[#D4AF37] text-[#1A2223] text-center">
        <h2 className="text-4xl font-serif mb-6">Begin Your Healing Journey</h2>
        <button className="bg-[#1A2223] text-white px-10 py-4 rounded-full uppercase tracking-widest">
          Schedule Consultation
        </button>
      </section>

      
      <footer className="py-20 text-center border-t border-white/10">
        <p className="opacity-40 text-sm">© 2026 Dr. Maya Reynolds</p>
      </footer>
    </div>
  );
}
