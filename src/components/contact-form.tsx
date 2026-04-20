import { type FormEvent, useMemo, useState } from "react";
import { siteConfig } from "@/lib/site-config";

type FormState = {
  name: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const isValid = useMemo(() => {
    return (
      form.name.trim().length > 2 &&
      form.phone.trim().length > 7 &&
      form.message.trim().length > 10
    );
  }, [form]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValid) {
      setStatus("error");
      setFeedback("Por favor, completa todos los campos con información válida.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setFeedback("Solicitud recibida. Te contactaremos en breve.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setFeedback("Hubo un error al enviar tu solicitud. Escríbenos por WhatsApp.");
    }
  }

  return (
    <form
      className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-medium text-white">Formulario de contacto</h3>

      <label className="block text-sm text-zinc-300">
        Nombre
        <input
          className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none transition focus:border-gold"
          type="text"
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          placeholder="Tu nombre completo"
          required
        />
      </label>

      <label className="block text-sm text-zinc-300">
        Teléfono
        <input
          className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none transition focus:border-gold"
          type="tel"
          value={form.phone}
          onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
          placeholder="+53..."
          required
        />
      </label>

      <label className="block text-sm text-zinc-300">
        Mensaje
        <textarea
          className="mt-1 min-h-28 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none transition focus:border-gold"
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          placeholder="Cuéntanos qué necesitas proteger"
          required
        />
      </label>

      <button
        className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando..." : "Enviar solicitud"}
      </button>

      {feedback && (
        <p
          className={status === "success" ? "text-sm text-emerald-400" : "text-sm text-red-400"}
          role="status"
        >
          {feedback}
        </p>
      )}

      <a
        className="inline-flex text-sm text-gold hover:text-white"
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        ¿Prefieres respuesta inmediata? Escríbenos por WhatsApp
      </a>
    </form>
  );
}
