import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "./button";

export function CookieConsent() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("eazytaxes-cookie-consent");
        if (!consent) {
            setShow(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("eazytaxes-cookie-consent", "true");
        setShow(false);
    };

    const handleDecline = () => {
        localStorage.setItem("eazytaxes-cookie-consent", "declined");
        setShow(false);
    };

    if (!show) return null;

    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                background: "rgba(15, 23, 42, 0.95)",
                backdropFilter: "blur(12px)",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "1rem 2rem",
                zIndex: 1000,
                boxShadow: "0 -10px 25px -5px rgba(0, 0, 0, 0.3)",
            }}
        >
            <div className="flex flex-col md:flex-row items-center gap-4 py-6 px-8 max-w-[1440px] mx-auto">
                <div className="flex flex-col gap-1 max-w-3xl flex-1">
                    <span className="font-bold text-lg text-white mb-1 tracking-tight">Cookie Notice</span>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        We use cookies to ensure proper functionality and analyze website usage. By clicking "Accept All Cookies",
                        you consent to our use of cookies. For more information, please read our{" "}
                        <Link href="/cookie-notice" className="text-[#3FB9CB] hover:underline transition-all">
                            Cookie Notice
                        </Link>.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={handleDecline}
                        style={{
                            background: "transparent",
                            color: "#94a3b8",
                            fontSize: "14px",
                            fontWeight: "500",
                            borderRadius: "8px",
                            padding: "12px 18px",
                            border: "1px solid rgba(148, 163, 184, 0.3)",
                            cursor: "pointer",
                        }}
                    >
                        Decline Non-Essential
                    </button>
                    <button
                        onClick={handleAccept}
                        style={{
                            background: "linear-gradient(135deg, #3FB9CB 0%, #2563eb 100%)",
                            color: "white",
                            fontSize: "14px",
                            fontWeight: "700",
                            borderRadius: "8px",
                            padding: "12px 24px",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Accept All Cookies
                    </button>
                </div>
            </div>
        </div>
    );
}
