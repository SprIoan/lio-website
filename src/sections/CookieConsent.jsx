"use client";

import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const hasAgreed = localStorage.getItem("cookieConsentAgreed") === "true";
    if (!hasAgreed) {
      setTimeout(() => setShowConsent(true), 800);
    }
  }, []);

  const handleAgree = () => {
    setIsClosing(true);
    setTimeout(() => {
      localStorage.setItem("cookieConsentAgreed", "true");
      setShowConsent(false);
    }, 400);
  };

  if (!showConsent) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isClosing ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="mx-0 mb-0">
        <div className="bg-[#1A1225]/90 backdrop-blur-sm border-t border-purple-800/10">
          <div className="max-w-[1920px] mx-auto px-5 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-purple-100/80 text-xs tracking-wide font-light">
                  We respect your privacy and do not use cookies to track your
                  session.
                </p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={handleAgree}
                  className="bg-transparent hover:bg-purple-900/30 text-purple-200/90 text-xs tracking-wider px-4 py-1.5 rounded-sm border border-purple-700/20 hover:border-purple-700/40 transition-all duration-200"
                >
                  Noted
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
