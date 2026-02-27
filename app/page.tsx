"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Stats from "./components/sections/Stats";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
    return (
        <main className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
            <Navbar/>
            <Hero/>
            <About/>
            <Experience/>
            <Stats/>
            <Services/>
            <Skills/>
            <Projects/>
            <ContactSection/>
        </main>
    );
}