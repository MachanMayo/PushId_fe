"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Russo_One } from "next/font/google";
const russo = Russo_One({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
  const path = usePathname();

  const menu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Find Team", href: "/find-team" },
  ];

  return (
    <nav className="w-full bg-[#020617]/80 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="font-heading text-2xl font-extrabold tracking-wide">
          PUSH ID
        </Link>

        {/* NAV MENU */}
        <div className="flex gap-6">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition ${
                path === item.href
                  ? "text-indigo-400"              // active page
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}
