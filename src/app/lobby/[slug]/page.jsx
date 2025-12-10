// app/lobby/[slug]/page.jsx
"use client";
import ShareButton from "@/components/ShareButton";

export default function LobbyDetail({ params }) {

  // -------------------------
  // ❗ Placeholder data dulu
  // Nanti kamu ambil dari Laravel pakai slug:
  // const lobby = await fetch(...params.slug)
  // const link = lobby.link;
  // -------------------------
  const link = "https://wa.me/628123456789"; 
  // const link = lobby.link;

  // ---- Logic Deteksi Link ----
  function getButtonType(url) {
    if (!url) return "default";

    // WhatsApp
    if (url.includes("wa.me") || url.includes("whatsapp.com")) {
      return "whatsapp";
    }

    // Discord
    if (url.includes("discord.gg") || url.includes("discord.com")) {
      return "discord";
    }

    return "default";
  }

  const btnType = getButtonType(link);

  const buttonStyle = {
    whatsapp: "bg-green-600 hover:bg-green-500 text-white",
    discord: "bg-[#4f46e5] hover:bg-[#4338ca] text-white",
    default: "bg-slate-700 hover:bg-slate-600 text-white",
  }[btnType];

  const buttonText = {
    whatsapp: "Chat WhatsApp",
    discord: "Join Discord",
    default: "Kunjungi Link",
  }[btnType];

  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-[#0F172A] border border-slate-800 rounded-2xl p-8 shadow-2xl relative">
        
        {/* Tombol Back */}
        <a href="/" className="text-slate-400 hover:text-white text-sm mb-6 inline-block">
          &larr; Kembali cari squad
        </a>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700">
            <span className="font-bold text-xl">HOK</span>
          </div>
          <div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold">Push Rank Mythic Fast</h1>
            <p className="text-yellow-400 font-medium mt-1">Tier: Grandmaster V keatas</p>
          </div>
        </div>

        {/* Detail */}
        <div className="space-y-4 mb-8 text-slate-300 leading-relaxed border-t border-b border-slate-800 py-6">
          <p>Dicari roamer dan mage yang peka map. No toxic, mic on kalau bisa. Kita main jam 8 malam ini sampai winstreak.</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Minimal WR 55%</li>
            <li>Bisa open mic</li>
            <li>Serius tapi santai</li>
          </ul>
        </div>

        <div className="flex gap-4">

          {/* Tombol Kontak (Dynamic WA / Discord) */}
          <a 
            href={link}
            target="_blank"
            className={`flex-1 font-bold py-3 rounded-xl text-center transition-all flex items-center justify-center gap-2 ${buttonStyle}`}
          >
            {buttonText}
          </a>

          {/* Tombol Share */}
          <ShareButton />
        </div>

      </div>
    </main>
  );
}


