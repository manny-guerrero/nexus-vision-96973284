import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Vision | Sistemas de Seguridad Premium" },
      {
        name: "description",
        content:
          "Instalación premium de cámaras de seguridad y sistemas de alarmas en La Habana. Servicio discreto, tecnología avanzada y confidencialidad total.",
      },
      {
        name: "keywords",
        content:
          "instalación de cámaras de seguridad en La Habana, sistemas de alarmas para hogares y negocios en La Habana, sistemas de seguridad premium, instalaciones de seguridad discretas",
      },
      { property: "og:title", content: "Nexus Vision | Sistemas de Seguridad Premium" },
      {
        property: "og:description",
        content:
          "Instalación discreta de cámaras y alarmas para hogares y negocios. Soporte directo y servicio confidencial en La Habana.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
