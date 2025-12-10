'use client'; 

import React, { useState } from 'react';
import { User } from 'lucide-react';

// Data Mockup Lobby
const ALL_LOBBIES = [
  {
    id: 1,
    game: 'HOK',
    title: 'Push Rank : ROAD TO LEGEND',
    rank: 'Grandmaster',
    time: 'Just Now',
    tagColor: 'bg-indigo-900/50 text-indigo-300'
  },
  {
    id: 2,
    game: 'MLBB',
    title: 'Cari Team untuk Push rank',
    rank: 'Mythical Glory',
    time: 'Just Now',
    tagColor: 'bg-blue-900/50 text-blue-300'
  },
  {
    id: 3,
    game: 'Valorant',
    title: 'Push Rank : ROAD TO LEGEND',
    rank: 'Radiant',
    time: 'Just Now',
    tagColor: 'bg-purple-900/50 text-purple-300'
  },
  {
    id: 4,
    game: 'PUBG',
    title: 'Bantu Push sampai Ace',
    rank: 'Crown',
    time: '5m ago',
    tagColor: 'bg-yellow-900/50 text-yellow-300'
  },
  {
    id: 5,
    game: 'COD',
    title: 'Push Rank Sampai LEGEND!',
    rank: 'Grandmaster',
    time: '12m ago',
    tagColor: 'bg-green-900/50 text-green-300'
  },
  {
    id: 6,
    game: 'HOK',
    title: 'Mabar santai Classic',
    rank: 'Platinum',
    time: '15m ago',
    tagColor: 'bg-indigo-900/50 text-indigo-300'
  },
];

const CATEGORIES = ['ALL', 'HOK', 'MLBB', 'VALORANT', 'PUBG', 'COD'];

export default function FindTeamPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  // Logic Filter
  const filteredLobbies = activeCategory === 'ALL' 
    ? ALL_LOBBIES 
    : ALL_LOBBIES.filter(lobby => lobby.game.toUpperCase() === activeCategory);

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-purple-500 selection:text-white">
      
      {/* --- NAVBAR --- */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-8 md:gap-12">
          <div className="flex gap-6 text-lg font-bold">
            <a href="/" className="text-[#5C5CFF] hover:text-[#4a4ae0] transition">Home</a>
            
            {/* PENTING: Tombol Create Team mengarah ke halaman FORM (/create-lobby) */}
            <a href="/create-lobby" className="text-gray-300 hover:text-white transition">
              Create Team
            </a>
            
            {/* Halaman ini sendiri (/find-team) */}
            <a href="/find-team" className="text-white border-b-2 border-[#5C5CFF] pb-1 transition">
              Find Team
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:block font-bold text-xl text-gray-200">Guest User</span>
          {/* Link ke Login */}
          <a href="/login" className="w-12 h-12 rounded-full border-2 border-[#5C5CFF] flex items-center justify-center cursor-pointer hover:bg-[#5C5CFF]/20 transition group">
             <User size={28} className="text-[#5C5CFF] group-hover:text-white transition" />
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
        
        {/* --- HERO BANNER (Visual Lobby) --- */}
        <div className="w-full h-48 md:h-[300px] rounded-3xl overflow-hidden mb-10 relative group border border-gray-800">
           {/* Pastikan gambar ada di public folder */}
           <img 
            src="/lobby-banner.jpg" 
            alt="Lobby Banner" 
            className="w-full h-full object-cover"
            onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.style.background = 'linear-gradient(to right, #3b82f6, #8b5cf6)'; 
            }}
           />
           <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <h1 className="text-4xl md:text-6xl font-black text-yellow-400 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] uppercase tracking-widest text-center" style={{ fontFamily: 'monospace' }}>
                FIND TEAM
              </h1>
              <p className="text-white font-bold text-xl mt-2 drop-shadow-md">Temukan partner mabar terbaikmu disini</p>
           </div>
        </div>

        {/* --- FILTERS --- */}
        <div className="flex flex-wrap gap-4 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2 rounded-full text-sm font-bold border-2 transition-all duration-300 uppercase tracking-wider ${
                activeCategory === cat
                  ? 'bg-[#5C5CFF] border-[#5C5CFF] text-white shadow-[0_0_15px_rgba(92,92,255,0.5)]'
                  : 'bg-transparent border-[#1e2230] text-gray-400 hover:border-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- CARD GRID (Daftar Lobby) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLobbies.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#0F172A] border border-[#1e2230] rounded-3xl p-6 hover:border-[#5C5CFF] hover:shadow-[0_0_20px_rgba(92,92,255,0.15)] transition-all duration-300 group flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                    <span className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider ${item.tagColor} bg-opacity-20`}>
                    {item.game}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">{item.time}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {item.title}
                </h3>

                <div className="flex items-center gap-2 mb-8">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span className="text-sm text-yellow-500 font-medium">{item.rank}</span>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl border border-[#2a2f42] bg-[#131620] text-gray-400 text-sm font-bold hover:bg-[#5C5CFF] hover:text-white hover:border-[#5C5CFF] transition-all duration-300">
                Lihat detail
              </button>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredLobbies.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p>Tidak ada lobby ditemukan.</p>
          </div>
        )}

      </main>
    </div>
  );
}