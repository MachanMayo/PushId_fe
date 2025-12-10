"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from "@/components/Navbar";

const LOBBIES = [
  { id: 1, title: "Push Rank Mythic Fast", game: "HOK", rank: "Grandmaster", slug: "push-rank-mythic-hok" },
  { id: 2, title: "Butuh Healer No Toxic", game: "MLBB", rank: "Epic", slug: "butuh-healer-mlbb" },
  { id: 3, title: "Valorant Santai Unrated", game: "VALORANT", rank: "Silver", slug: "valorant-santai" },
];

export default function Home() {
  const [filter, setFilter] = useState("ALL");

  const filteredLobbies = filter === "ALL" 
    ? LOBBIES 
    : LOBBIES.filter(l => l.game === filter);

  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 font-body selection:bg-indigo-500 selection:text-white">

      {/* === NAVBAR ADA DI SINI === */}
      <Navbar />

      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5 pointer-events-none"></div>
        
        <div className="z-10 text-center px-4 max-w-4xl">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            STOP PLAYING <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">SOLO.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Find your dream team and become the winner. Platform pencarian teman mabar terpercaya.
          </p>

          <Link href="/create-lobby" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all hover:scale-105">
            JOIN SQUAD NOW!
          </Link>
        </div>
      </section>

      {/* Section Filter */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {["ALL", "HOK", "MLBB", "VALORANT"].map((game) => (
            <button
              key={game}
              onClick={() => setFilter(game)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all border ${
                filter === game 
                ? "bg-white text-[#020617] border-white"
                : "bg-transparent text-slate-400 border-slate-700 hover:border-slate-500"
              }`}
            >
              {game}
            </button>
          ))}
        </div>

        {/* Daftar Lobbies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLobbies.map((lobby) => (
            <Link key={lobby.id} href={`/lobby/${lobby.slug}`} className="group">
              <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-6 hover:border-indigo-500 transition-all hover:shadow-lg hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500 blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded bg-slate-800 text-indigo-400 border border-slate-700">
                    {lobby.game}
                  </span>
                  <span className="text-xs text-slate-500">Just now</span>
                </div>

                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                  {lobby.title}
                </h3>

                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className="text-sm text-yellow-400 font-medium">{lobby.rank}</span>
                </div>

                <div className="w-full py-2 text-center border border-slate-700 rounded-lg text-sm text-slate-300 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all">
                  Lihat Detail
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
