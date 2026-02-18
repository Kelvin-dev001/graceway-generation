import { motion } from "framer-motion";

const items = [
  {
    title: "Unite young believers globally",
    desc: "One digital family. One bold voice."
  },
  {
    title: "Equip for digital evangelism",
    desc: "Tools and training built for modern platforms."
  },
  {
    title: "Build authentic online community",
    desc: "Real relationships, not passive feeds."
  },
  {
    title: "Raise leaders, not spectators",
    desc: "A movement of builders and senders."
  }
];

export default function VisionSection() {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          The Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white border border-gray-100 rounded-xl shadow-soft"
            >
              <div className="w-10 h-10 border border-accent rounded-full mb-4" />
              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}