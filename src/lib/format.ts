const df = new Intl.DateTimeFormat('es-CO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const formatDate = (d: Date) => df.format(d);

/** Fecha visible y atributo datetime de una noticia; respeta `dateText` cuando el día exacto no se conoce. */
export const postDate = ({ date, dateText }: { date: Date; dateText?: string }) => ({
  label: dateText ?? formatDate(date),
  iso: dateText ? String(date.getUTCFullYear()) : date.toISOString(),
});

const dm = new Intl.DateTimeFormat('es-CO', { day: '2-digit', timeZone: 'UTC' });
const mm = new Intl.DateTimeFormat('es-CO', { month: 'short', timeZone: 'UTC' });
export const day = (iso: string) => dm.format(new Date(iso));
export const month = (iso: string) => mm.format(new Date(iso)).replace('.', '');

export const readingTime = (text: string) => Math.max(1, Math.round(text.split(/\s+/).length / 200));
