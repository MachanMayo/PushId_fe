'use client'; // Wajib karena ada interaksi user

import React, { useState } from 'react';
// import Link from 'next/link'; // Gunakan ini di project asli
import { Eye, EyeOff, CheckSquare, Square } from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    // LAYOUT UTAMA: h-screen dan overflow-hidden agar pas satu layar tanpa scroll
    <div className="flex h-screen overflow-hidden bg-[#050511] text-white font-sans">
      
      {/* --- BAGIAN KIRI (GAMBAR) --- */}
      <div className="hidden lg:flex w-1/2 relative bg-[#0a0a16] items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050511] z-10"></div>
        
        <img 
          src="/image-login-register.png" 
          alt="Register Character" 
          // UPDATE: Menambahkan 'object-top' agar posisi gambar fokus di atas (sama seperti Login)
          className="w-full h-full object-contain opacity-90"
          onError={(e) => {
            e.target.style.display = 'none'; 
            e.target.parentNode.style.backgroundColor = '#1e1b4b'; 
          }}
        />
      </div>

      {/* --- BAGIAN KANAN (FORM REGISTER) --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-12 py-12 relative z-20 h-full overflow-y-auto">
        
        <div className="w-full max-w-md space-y-6">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-1xl font-black bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider mb-2">
              PUSH ID
            </h1>
            <h2 className="text-3xl font-bold text-gray-200 tracking-wide">
              Create your Account
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-6 text-lg font-semibold mt-6 mb-2">
            {/* Menggunakan <a> untuk preview, ganti ke <Link> di project asli */}
            <a href="/login" className="text-gray-500 hover:text-gray-300 transition pb-1">
              Login
            </a>
            <button className="text-blue-500 border-b-2 border-blue-500 pb-1">
              Sign up
            </button>
          </div>

          {/* Form Inputs */}
          <form className="space-y-5">
            
            {/* Input Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Your name</label>
              <input 
                type="text" 
                placeholder="Enter your name..." 
                className="w-full bg-[#131620] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your Email Address..." 
                className="w-full bg-[#131620] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter Your Password..." 
                  className="w-full bg-[#131620] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center gap-2 text-xs md:text-sm">
              <button 
                type="button" 
                onClick={() => setAgreeTerms(!agreeTerms)}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition"
              >
                {agreeTerms ? (
                  <CheckSquare size={18} className="text-blue-500" /> 
                ) : (
                  <Square size={18} className="text-gray-600" />
                )}
                <span className="text-gray-400">I agree to terms & conditions</span>
              </button>
            </div>

            {/* Join Button */}
            <button 
                type="button" 
                className="w-full bg-[#5C5CFF] hover:bg-[#4a4ae0] text-white font-bold py-3.5 rounded-xl transition shadow-[0_0_20px_rgba(92,92,255,0.3)] hover:shadow-[0_0_30px_rgba(92,92,255,0.5)] active:scale-95"
            >
              Join Now!
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center py-2">
            <div className="h-px bg-gray-800 w-full absolute"></div>
            <span className="bg-[#050511] px-3 text-xs font-bold text-gray-600 relative z-10 uppercase">
              OR
            </span>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-transparent border border-blue-900/50 hover:border-blue-500 hover:bg-[#0f1219] text-gray-300 font-semibold py-3 rounded-xl flex items-center justify-center gap-3 transition group">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.04-1.133 7.973-2.96 1.96-1.933 2.507-4.84 2.507-7.253 0-.72-.053-1.387-.16-2.027H12.48z" />
              </svg>
              Continue With Google
            </button>

            <button className="w-full bg-transparent border border-blue-900/50 hover:border-blue-500 hover:bg-[#0f1219] text-gray-300 font-semibold py-3 rounded-xl flex items-center justify-center gap-3 transition">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.48-1.03 3.93-.68 1.63.38 2.85 1.16 3.75 2.43-3.29 1.98-2.78 6.45.68 7.93-.57 1.34-1.33 2.67-2.44 3.55zM12.03 7.25c-.25-2.28 1.63-4.14 3.63-4.25.32 2.54-2.82 4.43-3.63 4.25z" />
              </svg>
              Continue With Apple
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}