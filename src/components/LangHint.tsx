import { useEffect, useState } from 'react';

/**
 * Suggests the other language instead of auto-redirecting. Auto-redirects hurt SEO
 * (crawlers would never see one of the versions) and annoy people on shared devices.
 */
export default function LangHint({ target, href, text, go, dismiss }: { target: 'en' | 'zh'; href: string; text: string; go: string; dismiss: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (localStorage.getItem('p30-lang-hint')) return;
      const prefers = (navigator.languages?.[0] || navigator.language || '').toLowerCase();
      if (prefers.startsWith(target)) setShow(true);
    } catch { /* storage blocked: stay quiet */ }
  }, [target]);
  if (!show) return null;
  const close = () => { try { localStorage.setItem('p30-lang-hint', '1'); } catch {} setShow(false); };
  return (
    <div className="lang-hint" role="region" aria-label={go}>
      <span>{text}</span>
      <a href={href} onClick={() => { try { localStorage.setItem('p30-lang-hint', '1'); } catch {} }}>{go}</a>
      <button type="button" onClick={close} aria-label={dismiss}>×</button>
    </div>
  );
}
