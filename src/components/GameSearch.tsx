import { useEffect, useMemo, useState } from 'react';
import type { Lang } from '../i18n/ui';
import { BOOKLET_FILES, LIBRARY, MATERIALS, type MaterialId } from '../data/library';

interface Props {
  lang: Lang;
  t: {
    placeholder: string; popular: string; boxTitle: string; boxHint: string; results: string;
    noResults: string; needAlso: string; haveAll: string; print: string; scenes: Record<string, string>;
    min: string; clear: string; count: string;
  };
}

const STORE = 'p30-box';

export default function GameSearch({ lang, t }: Props) {
  const [q, setQ] = useState('');
  const [box, setBox] = useState<MaterialId[]>([]);
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    try { const raw = localStorage.getItem(STORE); if (raw) setBox(JSON.parse(raw)); } catch { /* storage blocked */ }
  }, []);
  const toggle = (id: MaterialId) => {
    setBox((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try { localStorage.setItem(STORE, JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  };

  const label = (id: MaterialId) => MATERIALS.find((m) => m.id === id)?.label[lang] ?? id;

  /** Which materials does this query name? Matches labels and everyday synonyms. */
  const matched = useMemo<MaterialId[]>(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return MATERIALS.filter((m) =>
      [m.label.en, m.label.zh, ...m.alias.en, ...m.alias.zh].some((w) => {
        const v = w.toLowerCase();
        return v.includes(s) || s.includes(v);
      }),
    ).map((m) => m.id);
  }, [q]);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    const list = LIBRARY.filter((g) => {
      if (!s) return true;
      if (g.needs.some((n) => matched.includes(n))) return true;
      return [g.title.en, g.title.zh, g.principle.en, g.principle.zh].some((v) => v.toLowerCase().includes(s));
    }).map((g) => ({ game: g, missing: g.needs.filter((n) => n !== 'none' && !box.includes(n)) }));
    return list.sort((a, b) => a.missing.length - b.missing.length || a.game.minutes - b.game.minutes);
  }, [q, matched, box]);

  const popular: MaterialId[] = ['none', 'tube', 'carton', 'paper', 'rubberband', 'coin', 'cup', 'string'];

  return (
    <div className="search">
      <div className="search-bar">
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.placeholder} aria-label={t.placeholder} />
        {q && <button type="button" className="chip" onClick={() => setQ('')}>{t.clear}</button>}
      </div>

      <div className="search-popular">
        <span className="muted">{t.popular}</span>
        {popular.map((id) => (
          <button key={id} type="button" className="chip chip-small" onClick={() => setQ(label(id))}>{label(id)}</button>
        ))}
      </div>

      <div className="card box-card">
        <button type="button" className="box-toggle" aria-expanded={showBox} onClick={() => setShowBox(!showBox)}>
          <span><strong>{t.boxTitle}</strong> <span className="muted">{box.length} {t.count}</span></span>
          <span aria-hidden="true">{showBox ? '−' : '+'}</span>
        </button>
        {showBox && (
          <>
            <p className="muted">{t.boxHint}</p>
            <div className="box-grid">
              {MATERIALS.filter((m) => m.id !== 'none').map((m) => (
                <label key={m.id} className="box-item">
                  <input type="checkbox" checked={box.includes(m.id)} onChange={() => toggle(m.id)} />
                  <span>{m.label[lang]}</span>
                </label>
              ))}
            </div>
          </>
        )}
      </div>

      <p className="muted">{t.results}: {results.length}</p>
      <ul className="result-list">
        {results.slice(0, 12).map(({ game, missing }) => {
          const pdf = game.booklet ? BOOKLET_FILES[game.booklet]?.[lang] : undefined;
          return (
            <li key={game.id} className="card result">
              <div className="result-head">
                <h3>{game.title[lang]}</h3>
                <span className="pill">{t.scenes[game.scene]}, {game.minutes} {t.min}</span>
              </div>
              <p className="muted">{game.principle[lang]}</p>
              <p className="needs">
                {game.needs.map((n) => (
                  <span key={n} className={missing.includes(n) ? 'need need-missing' : 'need'}>{label(n)}</span>
                ))}
              </p>
              <p className="missing-line">
                {missing.length === 0 ? t.haveAll : `${t.needAlso}: ${missing.map(label).join('、')}`}
              </p>
              {pdf && <a className="btn btn-secondary btn-small" href={pdf} target="_blank" rel="noopener">{t.print}</a>}
            </li>
          );
        })}
      </ul>
      {results.length === 0 && <p>{t.noResults}</p>}
    </div>
  );
}
