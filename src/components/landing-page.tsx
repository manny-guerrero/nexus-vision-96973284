import {
  siteConfig,
  services,
  trustPillars,
  differentiators,
  testimonials,
} from "@/lib/site-config";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const iconPaths = [
  "M3 12h18M12 3v18",
  "M4 12l4-4 4 4 8-8",
  "M12 3a9 9 0 0 0-9 9 9 9 0 1 0 18 0 9 9 0 0 0-9-9Z",
  "M4 6h16v12H4z",
];

export function LandingPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description:
      "Servicios premium y discretos de instalación de cámaras de seguridad y alarmas para hogares y negocios.",
    telephone: siteConfig.phoneLink,
    areaServed: `${siteConfig.city}, ${siteConfig.country}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressCountry: siteConfig.country,
    },
    url: "https://example.com",
    sameAs: [siteConfig.whatsappUrl],
    serviceType: [
      "Instalación de cámaras de seguridad",
      "Sistemas de alarmas",
      "Monitoreo remoto",
      "Configuración personalizada",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main className="relative overflow-hidden bg-blackDeep text-zinc-100 min-h-screen">
        <div className="container-custom section-gap">
          <section className="fade-up rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black p-8 md:p-14">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gold">Nexus Vision</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              {siteConfig.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-300">{siteConfig.heroSubtitle}</p>
            <div className="mt-10">
              <a
                className="button-primary"
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chatear por WhatsApp ahora
              </a>
            </div>
          </section>

          <section className="section-gap">
            <p className="text-center text-lg text-zinc-300">
              Con la confianza de familias y negocios que exigen privacidad, precisión y protección
              constante.
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-center text-sm text-zinc-400">
              Servicio premium de{" "}
              <strong>instalación de cámaras de seguridad en {siteConfig.city}</strong> y{" "}
              <strong>
                sistemas de alarmas para hogares y negocios en {siteConfig.city}
              </strong>
              .
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {trustPillars.map((pillar) => (
                <div key={pillar} className="card-premium fade-up">
                  <h2 className="text-xl font-medium text-white">{pillar}</h2>
                </div>
              ))}
            </div>
          </section>

          <section className="section-gap">
            <h2 className="section-title">Servicios de seguridad</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {services.map((service, index) => (
                <article key={service.title} className="card-premium fade-up">
                  <div className="mb-4 inline-flex rounded-full border border-gold/40 p-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-gold"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        d={iconPaths[index]}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white">{service.title}</h3>
                  <p className="mt-2 text-zinc-300">{service.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-gap rounded-3xl border border-zinc-800 bg-zinc-950 p-8 md:p-12">
            <h2 className="section-title">¿Por qué Nexus Vision?</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {differentiators.map((point) => (
                <div
                  key={point}
                  className="fade-up flex items-center gap-3 rounded-xl border border-zinc-800 p-4"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" aria-hidden />
                  <p className="text-zinc-100">{point}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section-gap">
            <h2 className="section-title">Lo que dicen nuestros clientes</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <figure key={item.author} className="card-premium fade-up">
                  <blockquote className="text-zinc-200">&ldquo;{item.quote}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-sm text-zinc-400">
                    {item.author} - {item.context}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="section-gap grid gap-8 rounded-3xl border border-gold/30 bg-black/40 p-8 md:grid-cols-2 md:p-12">
            <div>
              <h2 className="section-title">Habla ahora con un especialista en seguridad</h2>
              <p className="mt-4 text-zinc-300">
                Cuéntanos sobre tu propiedad y objetivos de seguridad. Te daremos una recomendación
                discreta y personalizada.
              </p>
              <a
                className="mt-8 inline-flex text-gold transition hover:text-white"
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Iniciar por WhatsApp
              </a>
            </div>
            <ContactForm />
          </section>
        </div>

        <footer className="border-t border-zinc-900 py-8">
          <div className="container-custom flex flex-col gap-2 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
            <p>{siteConfig.name}</p>
            <p>Teléfono: {siteConfig.phoneDisplay}</p>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              WhatsApp
            </a>
            <p>Ciudad: {siteConfig.city}</p>
          </div>
        </footer>
      </main>
      <WhatsAppFloat />
    </>
  );
}
