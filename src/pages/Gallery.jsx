import GalleryHero from "../components/Gallery/GalleryHero";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import Navbar from "../components/Navbar/Navbar";

function Gallery() {
  return (
    <>
      <Navbar/>
      <GalleryHero />
      <GalleryGrid />
    </>
  );
}

export default Gallery;