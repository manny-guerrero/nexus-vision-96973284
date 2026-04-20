import { createFileRoute } from "@tanstack/react-router";

type ContactPayload = {
  name?: string;
  phone?: string;
  message?: string;
};

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as ContactPayload;
        const name = body.name?.trim() ?? "";
        const phone = body.phone?.trim() ?? "";
        const message = body.message?.trim() ?? "";

        if (name.length < 3 || phone.length < 8 || message.length < 10) {
          return Response.json({ message: "Datos inválidos" }, { status: 400 });
        }

        // Log lead server-side (extend later with email/DB persistence)
        console.log("[contact] New lead:", { name, phone, message });

        return Response.json(
          {
            message: "Lead recibido",
            data: { name, phone, message },
          },
          { status: 200 },
        );
      },
    },
  },
});
