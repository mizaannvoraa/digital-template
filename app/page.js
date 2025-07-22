import About from "@/component/About";
import Banner from "@/component/Banner";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Service from "@/component/Service";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  );
}
