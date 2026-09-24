import { useState } from 'react';
import { shareOrCopy } from './share';

interface Props { label: string; copiedLabel: string; title: string; text: string; className?: string }

export default function ShareButton({ label, copiedLabel, title, text, className = 'btn btn-primary btn-big' }: Props) {
  const [copied, setCopied] = useState(false);
  const onClick = async () => {
    const res = await shareOrCopy({ title, text, url: window.location.origin + window.location.pathname });
    if (res === 'copied') { setCopied(true); setTimeout(() => setCopied(false), 2500); }
  };
  return <button type="button" className={className} onClick={onClick}>{copied ? copiedLabel : label}</button>;
}
