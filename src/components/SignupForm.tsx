import { useState, type FormEvent } from 'react';
import type { Lang } from '../i18n/ui';

interface Props {
  lang: Lang;
  t: { email: string; age: string; ageOptions: string[]; consent: string; submit: string; sending: string; ok: string; error: string; notConfigured: string };
}

type State = 'idle' | 'sending' | 'ok' | 'error';

export default function SignupForm({ lang, t }: Props) {
  const [state, setState] = useState<State>('idle');
  const endpoint = import.meta.env.PUBLIC_SIGNUP_ENDPOINT;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (form.get('company')) return; // honeypot: bots fill hidden fields
    if (!endpoint) { setState('error'); return; }
    setState('sending');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: form.get('email'), child_age: form.get('age'), lang, consent: true, source: window.location.pathname }),
      });
      setState(res.ok ? 'ok' : 'error');
    } catch { setState('error'); }
  };

  if (state === 'ok') return <p className="signup-ok" role="status">{t.ok}</p>;

  return (
    <form className="signup" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="su-email">{t.email}</label>
        <input id="su-email" name="email" type="email" required autoComplete="email" inputMode="email" />
      </div>
      <div className="field">
        <label htmlFor="su-age">{t.age}</label>
        <select id="su-age" name="age" defaultValue={t.ageOptions[1]}>
          {t.ageOptions.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="su-company">Company</label>
        <input id="su-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="consent">
        <input id="su-consent" name="consent" type="checkbox" required />
        <label htmlFor="su-consent">{t.consent}</label>
      </div>
      <button className="btn btn-primary" type="submit" disabled={state === 'sending'}>{state === 'sending' ? t.sending : t.submit}</button>
      {state === 'error' && <p className="signup-error" role="alert">{endpoint ? t.error : t.notConfigured}</p>}
    </form>
  );
}
