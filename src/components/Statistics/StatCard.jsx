function StatCard({ stat }) {
  const Icon = stat.icon;

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-slate-100 hover:-translate-y-2">

      <div className="w-16 h-16 mx-auto rounded-full bg-teal-100 flex items-center justify-center">
        <Icon className="text-teal-600" size={30} />
      </div>

      <h2 className="text-4xl font-bold text-slate-800 mt-6">
        {stat.number}
      </h2>

      <p className="text-gray-500 mt-2">
        {stat.title}
      </p>

    </div>
  );
}

export default StatCard;