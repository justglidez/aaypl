import React from "react";

interface WhatsAppButtonProps {
  phone: string;
  message?: string;
}

export function WhatsAppButton({ phone, message = "" }: WhatsAppButtonProps) {
  const url = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-green-500 text-white rounded-full font-bold shadow hover:bg-green-600 transition"
    >
      WhatsApp
    </a>
  );
}