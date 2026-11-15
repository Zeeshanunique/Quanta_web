/**
 * Sends a "Book a demo" request.
 *
 * By default requests go to Factum's access-request endpoint (Quanta's own org). Override in `.env`:
 *   VITE_CONTACT_ENDPOINT    — any URL that accepts a JSON POST
 *                              (Formspree: https://formspree.io/f/xxxx,
 *                               Web3Forms: https://api.web3forms.com/submit, or your own API)
 *   VITE_CONTACT_ACCESS_KEY  — optional, sent as `access_key` (needed by Web3Forms)
 *   VITE_CONTACT_EMAIL       — fallback: opens the visitor's mail app addressed here
 *
 * Resolves to 'sent' | 'mailto'. Throws on failure or if nothing is configured.
 */
// Default: Factum's access-request endpoint, so every lead lands in Quanta's org (its bell, `factum access-requests`).
const FACTUM_REQUESTS = 'https://factum.quanta.co.in/api/access-requests';
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || FACTUM_REQUESTS;
const ACCESS_KEY = import.meta.env.VITE_CONTACT_ACCESS_KEY;
const EMAIL = import.meta.env.VITE_CONTACT_EMAIL;

export const demoFormConfigured = Boolean(ENDPOINT || EMAIL);

export async function submitDemoRequest(data) {
  const extra = [data.phone && `Phone: ${data.phone}`, data.industry && `Industry: ${data.industry}`].filter(Boolean);
  const payload =
    ENDPOINT === FACTUM_REQUESTS
      ? // The fields Factum's endpoint takes; phone and industry travel in the message.
        {
          name: data.name,
          email: data.email,
          company: data.company,
          interest: data.interest,
          message: [data.message, ...extra].filter(Boolean).join('\n\n'),
        }
      : {
          ...data,
          subject: `Demo request — ${data.company || data.name}`,
          source: typeof window !== 'undefined' ? window.location.href : '',
          ...(ACCESS_KEY ? { access_key: ACCESS_KEY } : {}),
        };

  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    let body = null;
    try {
      body = await res.json();
    } catch {
      /* non-JSON response */
    }
    if (!res.ok || body?.success === false) {
      throw new Error(body?.detail || body?.message || body?.error || `Request failed (${res.status})`);
    }
    return 'sent';
  }

  if (EMAIL) {
    const lines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company}`,
      `Phone: ${data.phone}`,
      `Industry: ${data.industry}`,
      `Interested in: ${data.interest}`,
      '',
      data.message,
    ];
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(
      lines.join('\n')
    )}`;
    return 'mailto';
  }

  throw new Error('The demo form is not connected yet. Please email us directly.');
}
