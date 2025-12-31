import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Promos } from "./components/Promos";
import { Gallery } from "./components/Gallery/Gallery.jsx";
import { VideoGallery } from "./components/VideoGallery/VideoGallery.jsx"
import { Footer } from "./components/Footer/Footer.jsx";

export function App() {
  return (
    <section>
      <Header />
      <main className="w-full flex flex-col gap-y-4 items-center">
        <Hero />
        <Promos />
        <Gallery />
      </main>
      <VideoGallery />
      <Footer />
    </section>
  );
}
