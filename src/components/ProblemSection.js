import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Faith feels isolated in today’s culture.
        </h2>
        <p className="text-gray-700">
          Young believers are scattered in digital spaces. Many churches were
          never designed for online discipleship. The result is disconnection
          where there should be momentum.
        </p>
      </div>
    </section>
  );
}