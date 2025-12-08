import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Promos } from "./components/Promos";
import { Gallery } from "./components/Gallery/Gallery.jsx";
import { GalleryDemo } from "./components/Gallery/GalleryDemo.jsx";

export function App() {
  return (
    <section>
      <Header />
      <main className="w-full flex flex-col gap-y-4 items-center">
        <Hero />
        <Promos />
        <GalleryDemo />
        <div className="w-full h-[200px] bg-slate-800 backdrop-blur-2xl"></div>
      </main>
    </section>
  );
}
