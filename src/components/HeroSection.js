"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

export default function HeroSection() {
  return (
    <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid gap-12 md:grid-cols-2 items-center"
      >
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-accent">
            Global Digital Faith Movement
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
            A Generation Marked by Grace.
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Graceway Generation is a global digital movement igniting bold
            believers through evangelism, discipleship, and leadership in the
            modern world.
          </p>
          <button className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 text-sm font-semibold shadow-soft transition hover:opacity-90">
            Become a Founding Member
          </button>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl shadow-soft p-6">
          <WaitlistForm />
        </div>
      </motion.div>
    </section>
  );
}