"use client";

export default function ShareButton() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Ayo mabar!",
          text: "Lihat squad ini",
          url: window.location.href,
        });
      } catch (e) {
        console.log("Share dibatalkan:", e);
      }
    } else {
      alert("Browser tidak mendukung fitur share");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="px-4 py-3 border border-slate-700 rounded-xl hover:bg-slate-800 transition-all text-slate-400"
    >
      Share
    </button>
  );
}
