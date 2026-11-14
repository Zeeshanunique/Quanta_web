/**
 * Sends a "Book a demo" request.
 *
 * Configure in `.env` (see `.env.example`):
 *   VITE_CONTACT_ENDPOINT    — any URL that accepts a JSON POST
 *                              (Formspree: https://formspree.io/f/xxxx,
 *                               Web3Forms: https://api.web3forms.com/submit, or your own API)
 *   VITE_CONTACT_ACCESS_KEY  — optional, sent as `access_key` (needed by Web3Forms)
 *   VITE_CONTACT_EMAIL       — fallback: opens the visitor's mail app addressed here
 *
 * Resolves to 'sent' | 'mailto'. Throws on failure or if nothing is configured.
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;
const ACCESS_KEY = import.meta.env.VITE_CONTACT_ACCESS_KEY;
const EMAIL = import.meta.env.VITE_CONTACT_EMAIL;

export const demoFormConfigured = Boolean(ENDPOINT || EMAIL);

export async function submitDemoRequest(data) {
  const payload = {
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
      throw new Error(body?.message || body?.error || `Request failed (${res.status})`);
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
