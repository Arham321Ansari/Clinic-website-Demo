function GalleryCard({ item }) {
  return (
    <div className="group overflow-hidden rounded-3xl shadow-lg cursor-pointer">

      <div className="overflow-hidden">

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
        />

      </div>

      <div className="bg-white p-5">

        <span className="text-sm text-teal-600 font-semibold">
          {item.category}
        </span>

        <h3 className="mt-2 text-xl font-bold">
          {item.title}
        </h3>

      </div>

    </div>
  );
}

export default GalleryCard;