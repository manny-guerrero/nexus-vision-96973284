import { siteConfig } from "@/lib/site-config";

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-black px-4 py-3 text-sm text-white shadow-glow transition hover:scale-[1.03] hover:border-gold hover:text-gold"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.83 11.83 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.56 4.2 1.62 6.03L0 24l6.14-1.61A11.95 11.95 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52Zm-8.5 18.5a9.97 9.97 0 0 1-5.08-1.39l-.36-.22-3.64.95.97-3.55-.24-.37A9.97 9.97 0 0 1 2.02 12c0-5.5 4.48-9.98 9.98-9.98 2.67 0 5.18 1.04 7.07 2.93A9.91 9.91 0 0 1 22 12c0 5.5-4.48 9.98-9.98 9.98Zm5.54-7.48c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.66.15-.2.3-.76.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5a9.1 9.1 0 0 1-1.68-2.1c-.18-.3-.02-.46.13-.6.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.66-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.15 4.55.72.31 1.29.5 1.73.64.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35Z" />
      </svg>
      WhatsApp
    </a>
  );
}
