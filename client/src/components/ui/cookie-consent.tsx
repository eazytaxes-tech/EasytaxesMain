import { CookieConsent as ReactCookieConsent } from "react-cookie-consent";
import { Link } from "wouter";

export function CookieConsent() {
    return (
        <ReactCookieConsent
            location="bottom"
            buttonText="Accept All Cookies"
            declineButtonText="Decline Non-Essential"
            enableDeclineButton
            cookieName="eazytaxes-cookie-consent"
            style={{
                background: "rgba(15, 23, 42, 0.95)",
                backdropFilter: "blur(12px)",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "1rem 2rem",
                fontSize: "14px",
                color: "#fff",
                alignItems: "center",
                zIndex: 1000,
                boxShadow: "0 -10px 25px -5px rgba(0, 0, 0, 0.3)",
            }}
            buttonStyle={{
                background: "linear-gradient(135deg, #3FB9CB 0%, #2563eb 100%)",
                color: "white",
                fontSize: "14px",
                fontWeight: "700",
                borderRadius: "8px",
                padding: "12px 24px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
            }}
            declineButtonStyle={{
                background: "transparent",
                color: "#94a3b8",
                fontSize: "14px",
                fontWeight: "500",
                borderRadius: "8px",
                padding: "12px 18px",
                border: "1px solid rgba(148, 163, 184, 0.3)",
                cursor: "pointer",
                transition: "all 0.3s ease",
            }}
            containerClasses="flex flex-col md:flex-row items-center gap-4 py-6 px-8 max-w-[1440px] mx-auto"
            contentStyle={{ margin: "0", flex: "1" }}
            expires={150}
        >
            <div className="flex flex-col gap-1 max-w-3xl">
                <span className="font-bold text-lg text-white mb-1 tracking-tight">Cookie Notice</span>
                <p className="text-slate-300 text-sm leading-relaxed">
                    We use cookies to ensure proper functionality and analyze website usage. By clicking "Accept All Cookies",
                    you consent to our use of cookies. For more information, please read our{" "}
                    <Link href="/cookie-notice" className="text-[#3FB9CB] hover:underline transition-all">
                        Cookie Notice
                    </Link>.
                </p>
            </div>
        </ReactCookieConsent>
    );
}
