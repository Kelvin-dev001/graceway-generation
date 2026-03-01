import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.jpeg" alt="Graceway Generation" width={44} height={44} />
          <div>
            <p className="font-bold text-primary leading-tight">Graceway Generation</p>
            <p className="text-xs text-gray-500">A Generation Centered in Christ</p>
          </div>
        </div>

        <a
          href="#join"
          className="rounded-full bg-primary text-white px-5 py-2 text-sm font-semibold hover:bg-accent transition"
        >
          Join the Movement
        </a>
      </div>
    </header>
  );
}