import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import './globals.css'


export default function Home() {
  return (
    <main className="relative">
      <div>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
      </div>
    </main>
  );
}
