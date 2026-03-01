"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Grounded in truth. Trained for impact.",
    desc: "Through structured discipleship and leadership training, newly recruited believers are deeply rooted in biblical truth, spiritual discipline, and Christ-centered identity; equipping them not just to believe, but to lead with conviction and clarity.",
    icon: "root"
  },
  {
    title: "Connected. Strengthened. Sharpened.",
    desc: "Rooted believers are placed into intentional groups led by trained and qualified leaders for weekly interactions, mentorship, seminars, podcast collaborations, and team-building experiences;building authentic relationships and strengthening faith through community.",
    icon: "greeting"
  },
  {
    title: "Equipped to Multiply",
    desc: "Members are empowered to carry the message forward; sharing their faith, mentoring new believers, and extending Graceway’s discipleship training to others, creating a self-sustaining movement of evangelism and leadership.",
    icon: "growth"
  }
];

const icons = {
  root: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-highlight">
      <path
        fill="currentColor"
        d="M12 3c1.7 0 3 1.3 3 3 0 1.4-.9 2.6-2.2 2.9v2.1h3.3c.6 0 1 .4 1 1v2.1c1.3.3 2.2 1.5 2.2 2.9 0 1.7-1.3 3-3 3-1.4 0-2.6-.9-2.9-2.2H12v-2.8H9.6c-.3 1.3-1.5 2.2-2.9 2.2-1.7 0-3-1.3-3-3 0-1.4.9-2.6 2.2-2.9V12c0-.6.4-1 1-1H11V8.9C9.7 8.6 8.8 7.4 8.8 6c0-1.7 1.3-3 3-3z"
      />
    </svg>
  ),
  greeting: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent">
      <path
        fill="currentColor"
        d="M7.5 11.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm6.5 2.2c-1 .4-2.1.6-3.2.6s-2.2-.2-3.2-.6C5.7 14.4 4 16.3 4 18.5V20h16v-1.5c0-2.2-1.7-4.1-4-4.8Z"
      />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
      <path
        fill="currentColor"
        d="M4 20h16v2H2V4h2v16Zm2-4 5-5 3 3 6-6 1.4 1.4-7.4 7.4-3-3-3.6 3.6L6 16Z"
      />
    </svg>
  )
};

export default function VisionSection() {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          The Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: "0 18px 50px rgba(11,28,109,0.15)" }}
              className="p-6 bg-white border border-gray-100 rounded-xl shadow-soft"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 border border-gray-200 mb-4">
                {icons[item.icon]}
              </div>
              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}