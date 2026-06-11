function pad(n: number): string {
  return String(Math.floor(n)).padStart(2, '0');
}

/** Formats remaining milliseconds as `00d 00h 00m 00s` — shared by card and home countdowns */
export function formatCountdown(ms: number): string {
  if (ms <= 0) return '00d 00h 00m 00s';
  const s   = ms / 1000;
  const d   = Math.floor(s / 86400);
  const h   = Math.floor((s % 86400) / 3600);
  const m   = Math.floor((s % 3600) / 60);
  const sec = Math.floor(s % 60);
  return `${pad(d)}d ${pad(h)}h ${pad(m)}m ${pad(sec)}s`;
}
