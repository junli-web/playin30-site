/** Native share sheet on phones; clipboard copy as a fallback on desktop. */
export async function shareOrCopy(data: { title: string; text: string; url: string }): Promise<'shared' | 'copied' | 'failed'> {
  try {
    if (navigator.share) { await navigator.share(data); return 'shared'; }
  } catch (e) {
    if ((e as DOMException)?.name === 'AbortError') return 'failed'; // user closed the sheet
  }
  try { await navigator.clipboard.writeText(data.url); return 'copied'; } catch { return 'failed'; }
}
