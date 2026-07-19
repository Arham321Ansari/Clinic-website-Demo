import statistics from "../../data/statistics";
import SectionTitle from "../Common/SectionTitle";
import StatCard from "./StatCard";

function Statistics() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-5">

        <SectionTitle
          center
          subtitle="Our Achievements"
          title="Trusted Healthcare Excellence"
          description="We are proud to have earned the trust of thousands of patients through compassionate care and medical excellence."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {statistics.map((stat) => (
            <StatCard
              key={stat.id}
              stat={stat}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;