import Navbar from "./components/Navbar";
import FloatingActions from "./components/FloatingActions";
import Hero from "./components/Hero";
import About from "./components/About";
import Strengths from "./components/Strengths";
import Programmes from "./components/Programmes";
import Leaders from "./components/Leaders";
import Faculty from "./components/Faculty";
import Partners from "./components/Partners";
import Campus from "./components/Campus";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#programmes"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-lg focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-on-brand"
      >
        Skip to programmes
      </a>
      <Navbar />
      <FloatingActions />
      <main className="flex-1">
        <Hero />
        <About />
        <Strengths />
        <Programmes />
        <Leaders />
        <Faculty />
        <Partners />
        <Campus />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      {/* clears the mobile sticky action bar */}
      <div className="h-14 md:hidden" aria-hidden />
    </>
  );
}
