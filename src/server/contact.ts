import { createServerFn } from "@tanstack/react-start";

export type ContactInput = {
  name: string;
  phone: string;
  message: string;
};

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: ContactInput) => {
    const name = (data?.name ?? "").trim();
    const phone = (data?.phone ?? "").trim();
    const message = (data?.message ?? "").trim();

    if (name.length < 3 || phone.length < 8 || message.length < 10) {
      throw new Error("Datos inválidos");
    }

    return { name, phone, message };
  })
  .handler(async ({ data }) => {
    // Lead persistence/email could be wired here later.
    console.log("[contact] New lead:", data);

    return {
      message: "Lead recibido",
      data,
    };
  });
