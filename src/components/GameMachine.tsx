import { useState } from 'react';
import type { Lang } from '../i18n/ui';
import { BOOKLETS, GAMES, MACHINE_UI, type AgeId, type Minutes, type SceneId } from '../data/games';
import { shareOrCopy } from './share';

// Only the four small machine drawings go into this island's JavaScript bundle.
const ARTS = import.meta.glob('../illustrations/art-*.svg', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const art = (name: string, lang: Lang) => ARTS[`../illustrations/${name}-${lang}.svg`] ?? '';

const SCENES: SceneId[] = ['home', 'restaurant', 'car', 'outdoor'];
const AGES: AgeId[] = ['low', 'mid', 'high'];
const TIMES: Minutes[] = [15, 30, 45];
const TINT: Record<SceneId, string> = { home: 'var(--tint-yellow)', restaurant: 'var(--tint-coral)', car: 'var(--tint-sky)', outdoor: 'var(--tint-mint)' };
const ART: Record<SceneId, string> = { home: 'art-home', restaurant: 'art-restaurant', car: 'art-car', outdoor: 'art-outdoor' };

interface Props { lang: Lang; shareTitle: string; shareText: string; signupAnchor: string }

export default function GameMachine({ lang, shareTitle, shareText, signupAnchor }: Props) {
  const T = MACHINE_UI[lang];
  const [scene, setScene] = useState<SceneId>('home');
  const [age, setAge] = useState<AgeId>('mid');
  const [time, setTime] = useState<Minutes>(30);
  const [copied, setCopied] = useState(false);

  const g = GAMES[lang][scene];
  const lv = AGES.indexOf(age);
  const pdf = BOOKLETS[scene][lang];

  const onShare = async () => {
    const res = await shareOrCopy({ title: shareTitle, text: `${g.title}. ${shareText}`, url: window.location.href.split('#')[0] });
    if (res === 'copied') { setCopied(true); setTimeout(() => setCopied(false), 2500); }
  };

  const Chips = <K extends string | number>({ items, value, label, onPick, tint }: {
    items: K[]; value: K; label: (k: K) => string; onPick: (k: K) => void; tint?: (k: K) => string;
  }) => (
    <div className="chips">
      {items.map((k) => (
        <button key={String(k)} type="button" className="chip" aria-pressed={k === value}
          style={k === value ? undefined : { background: tint ? tint(k) : '#fff' }} onClick={() => onPick(k)}>
          {label(k)}
        </button>
      ))}
    </div>
  );

  return (
    <div className="machine">
      <div className="machine-head">
        <span className="hand machine-title">{T.title}</span>
        <span className="pill pill-yellow">{T.badge}</span>
      </div>
      <fieldset className="machine-row"><legend>1&nbsp;&nbsp;{T.where}</legend>
        <Chips items={SCENES} value={scene} label={(k) => T.scenes[k]} onPick={setScene} tint={(k) => TINT[k]} />
      </fieldset>
      <fieldset className="machine-row"><legend>2&nbsp;&nbsp;{T.age}</legend>
        <Chips items={AGES} value={age} label={(k) => T.ages[k]} onPick={setAge} />
      </fieldset>
      <fieldset className="machine-row"><legend>3&nbsp;&nbsp;{T.time}</legend>
        <Chips items={TIMES} value={time} label={(k) => `${k} ${T.min}`} onPick={setTime} />
      </fieldset>

      <div className="result" style={{ background: TINT[scene] }} aria-live="polite">
        <div className="result-top">
          <span className="result-where">{g.where}, {g.mins} {T.min}</span>
          <span className="pill">{T.level(lv + 1)}</span>
        </div>
        <h3 className="result-title">{g.title}</h3>
        <div className="result-art" dangerouslySetInnerHTML={{ __html: art(ART[scene], lang) }} />
        <p className="result-goal">{T.goal}: {g.levels[lv]}</p>
        <p className="result-opener">{g.opener}</p>
        <p className="result-small">{g.ask}</p>
        <p className="result-small">{T.bring}: {g.need}. {T.science}: {g.principle}.</p>
        <p className="result-extra">{T.extra[time]}</p>
      </div>

      <div className="btn-row">
        {pdf ? (
          <a className="btn btn-primary" href={pdf} target="_blank" rel="noopener" data-event="download" data-scene={scene}>{T.print}</a>
        ) : (
          <a className="btn btn-primary" href={signupAnchor}>{T.soon}</a>
        )}
        <button type="button" className="btn btn-secondary" onClick={onShare}>{copied ? T.copied : T.share}</button>
      </div>
    </div>
  );
}
