/* LVMR Group — quote request intake: validates the payload and forwards it to the team inbox via Resend. */

type QuotePayload = {
  source?: string;
  service?: string;
  exactService?: string;
  place?: string;
  surface?: string;
  rhythm?: string;
  location?: string;
  files?: string[];
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  message?: string;
  consent?: boolean;
  website?: string;
};

const REQUIRED: (keyof QuotePayload)[] = ["name", "phone", "email"];

const clean = (value: unknown): string =>
  typeof value === "string" ? value.replace(/[<>]/g, "").trim().slice(0, 800) : "";

const htmlEscape = (value: string): string =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function buildRows(payload: QuotePayload): [string, string][] {
  const rows: [string, string][] = [];
  const push = (label: string, value: string) => {
    if (value) rows.push([label, value]);
  };
  push("Nom et prénom", clean(payload.name));
  push("Société / organisme", clean(payload.company));
  push("Téléphone", clean(payload.phone));
  push("E-mail", clean(payload.email));
  push("Adresse du site", clean(payload.location));
  push("Pôle concerné", clean(payload.service));
  push("Prestation recherchée", clean(payload.exactService));
  push("Type de lieu", clean(payload.place));
  push("Surface approximative", clean(payload.surface));
  push("Fréquence / urgence", clean(payload.rhythm));
  push("Documents joints (noms)", Array.isArray(payload.files) ? payload.files.map((f) => clean(f)).filter(Boolean).join(", ") : "");
  push("Message", clean(payload.message));
  push("Source", clean(payload.source) || "Site lvmr-group.fr");
  return rows;
}

export async function POST(request: Request) {
  let payload: QuotePayload;
  try {
    payload = (await request.json()) as QuotePayload;
  } catch {
    return Response.json({ ok: false, error: "Corps de requête invalide." }, { status: 400 });
  }

  /* Honeypot: silently accept bots so they never adapt. */
  if (payload.website) {
    return Response.json({ ok: true });
  }

  const missing = REQUIRED.filter((key) => !clean(payload[key]));
  if (missing.length > 0 || payload.consent !== true) {
    return Response.json(
      { ok: false, error: "Renseignez les champs obligatoires et acceptez la politique de confidentialité." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { ok: false, error: "Le service d’envoi n’est pas encore configuré (RESEND_API_KEY manquant)." },
      { status: 503 },
    );
  }

  const rows = buildRows(payload);
  const from = process.env.DEVIS_FROM_EMAIL || "LVMR Site <devis@lvmr-group.fr>";
  const to = process.env.DEVIS_TO_EMAIL || "contact@lvmr-premium.fr";
  const replyTo = clean(payload.email);
  const subject = `Nouvelle demande de devis — ${clean(payload.name)}`;

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;background:#f5f5f5;padding:24px">
    <div style="max-width:640px;margin:0 auto;background:#202020;color:#ffffff;border-radius:16px;padding:24px 28px">
      <p style="margin:0;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#ffc547">LVMR Group</p>
      <h1 style="margin:10px 0 0;font-size:22px">Nouvelle demande de devis</h1>
    </div>
    <table style="max-width:640px;margin:12px auto 0;width:100%;border-collapse:collapse;background:#ffffff;border-radius:16px;overflow:hidden">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:12px 16px;border-bottom:1px solid #eeeeee;font-size:12px;color:#6b6b6b;white-space:nowrap;vertical-align:top">${htmlEscape(label)}</td><td style="padding:12px 16px;border-bottom:1px solid #eeeeee;font-size:14px;color:#202020">${htmlEscape(value).replace(/\n/g, "<br/>")}</td></tr>`,
        )
        .join("")}
    </table>
    <p style="max-width:640px;margin:16px auto 0;font-size:11px;color:#6b6b6b">Consentement RGPD recueilli sur le site. Répondre directement à ${htmlEscape(replyTo)}.</p>
  </div>`;

  const text = rows.map(([label, value]) => `${label} : ${value}`).join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, reply_to: replyTo || undefined, subject, html, text }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("Resend error", response.status, detail);
    return Response.json({ ok: false, error: "L’envoi a échoué. Réessayez ou contactez-nous par téléphone." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
