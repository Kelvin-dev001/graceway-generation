const benefits = [
  "Access to online prayer gatherings",
  "Early access to discipleship cohorts",
  "Private digital community access",
  "Evangelism training",
  "Leadership development pathway"
];

export default function BenefitsSection() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          What Founding Members Receive
        </h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="p-5 rounded-xl border border-gray-100 shadow-soft transition hover:translate-y-[-2px]"
            >
              <p className="text-gray-800">{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}