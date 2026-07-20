import gallery from "../../data/gallery";
import GalleryCard from "./GalleryCard";

function GalleryGrid() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-5">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {gallery.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default GalleryGrid;