import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingContactButtons() {
  return (
    <div style={{ position: "fixed", bottom: "2rem", right: "2rem", zIndex: 50, display: "flex", flexDirection: "column", gap: "1rem" }}>
      <a
        href="tel:+917309669000"
        style={{ background: "#222", borderRadius: "50%", width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.2)", border: "2px solid #fff" }}
        title="Call us"
      >
        <Phone color="#00e676" size={28} />
      </a>
      <a
        href="https://wa.me/917309669000"
        target="_blank"
        rel="noopener noreferrer"
        style={{ background: "#222", borderRadius: "50%", width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.2)", border: "2px solid #fff" }}
        title="WhatsApp"
      >
        <FaWhatsapp color="#25d366" size={28} />
      </a>
    </div>
  );
}
