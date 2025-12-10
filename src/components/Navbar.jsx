import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center max-w-7xl mx-auto absolute top-0 left-0 right-0 z-50">
      {/* LOGO */}
      <div className="text-2xl md:text-3xl font-black tracking-tighter text-white font-heading">
        PUSH <span className="text-white">ID</span>
      </div>

      {/* MENU LINKS */}
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/" className="text-white font-bold hover:text-indigo-400 transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-slate-300 font-bold hover:text-indigo-400 transition-colors">
          About
        </Link>
        <Link href="/lobby" className="text-slate-300 font-bold hover:text-indigo-400 transition-colors">
          Find Team
        </Link>
      </div>

      {/* MOBILE MENU BUTTON (Hiasan dulu) */}
      <div className="md:hidden text-white text-2xl">☰</div>
    </nav>
  );
}