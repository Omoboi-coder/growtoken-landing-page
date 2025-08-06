import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Ourservices from "./Components/Ourservices";
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./globals.css" 



export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero />
    <Ourservices />
    <Features />
    <Testimonials />
    <Contact />
    <Footer />

    </>
  );
}
