import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
      setTimeout(() => setLoading(false), 800); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-black z-[9999] transition-opacity duration-700 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src="/logo-white.png"
          alt="Loading..."
          className="w-24 h-24 animate-spin-slow"
        />
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
          filter: drop-shadow(0 0 12px rgba(168, 85, 247, 0.6));
        }
      `}</style>
    </>
  );
};

export default Preloader;