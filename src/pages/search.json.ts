/**
 * Índice de búsqueda estático (se genera en la compilación). El buscador lo descarga solo al abrirse.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { COSTS, DOCS, FAQ, LEVELS, NAV, SITE, STHEAMI, TEAM } from '@/data/site';
import { FINES, RETOS } from '@/data/institucional';

export const GET: APIRoute = async () => {
  type Item = { t: string; d: string; u: string; c: string; k?: string };
  const items: Item[] = [
    { t: 'Inicio', d: 'Página principal del Liceo Lunita de Chía', u: '/', c: 'Páginas' },
    { t: 'Admisiones y matrículas 2027', d: 'Pasos, requisitos y lista de documentos', u: '/admisiones/', c: 'Páginas', k: 'matricula inscripcion cupos costos requisitos' },
    { t: 'Preguntas frecuentes', d: 'Respuestas rápidas a las dudas más comunes', u: '/preguntas-frecuentes/', c: 'Páginas', k: 'faq ayuda dudas' },
    { t: 'Contacto', d: `${SITE.phoneDisplay} · ${SITE.email}`, u: '/contacto/', c: 'Páginas', k: 'telefono whatsapp correo direccion ubicacion mapa' },
    { t: 'Mapa del sitio', d: 'Todas las secciones del sitio', u: '/mapa-del-sitio/', c: 'Páginas' },
    { t: 'Plataforma SIGA', d: 'Notas, boletines, pagos y matrícula en línea', u: SITE.platforms.siga, c: 'Plataformas', k: 'notas boletin pagos' },
    { t: 'Aula Virtual', d: 'Clases, guías y tareas en línea', u: SITE.platforms.aula, c: 'Plataformas', k: 'moodle tareas clases' },
  ];
  for (const n of NAV) {
    items.push({ t: n.label, d: `Sección ${n.label}`, u: n.href, c: 'Secciones' });
    for (const c of n.children ?? []) items.push({ t: c.label, d: c.desc ?? '', u: c.href, c: n.label });
  }
  for (const l of LEVELS) items.push({ t: l.name, d: `${l.grades}. ${l.text}`, u: `/niveles/#${l.id}`, c: 'Niveles', k: 'grado curso' });
  for (const s of STHEAMI) items.push({ t: `${s.name} (STHEAMI)`, d: s.text, u: '/modelo-stheami/', c: 'Modelo STHEAMI' });
  for (const r of RETOS) items.push({ t: `Reto ${r.n}: ${r.title}`, d: r.items[0] ?? '', u: '/retos-2026/', c: 'Retos 2026' });
  items.push({ t: `Costos y horarios ${COSTS.year}`, d: 'Matrícula, pensión, formulario y otros costos; horario de clases y de matrículas', u: '/admisiones/#costos', c: 'Admisiones', k: 'precio valor pension matricula costo horario jornada' });
  items.push({ t: 'Nuestra historia año por año', d: 'Línea de tiempo con los hitos del colegio: viajes, ciencia, bandas, competencias y reconocimientos', u: '/noticias/historia/', c: 'Noticias', k: 'historia trayectoria linea de tiempo logros viajes convenios nasa' });
  items.push({ t: 'Nuestro equipo 2026', d: 'Rectora, directivas, docentes y personal de apoyo', u: '/el-cole/#equipo', c: 'El Cole', k: 'profesores docentes rectora organigrama' });
  for (const p of TEAM) items.push({ t: p.name, d: p.role, u: '/el-cole/#equipo', c: 'Equipo', k: 'profesor docente' });
  items.push({ t: 'Fines educativos', d: FINES[0], u: '/el-cole/#fines', c: 'El Cole', k: 'constitución artículo 67' });
  items.push({ t: 'Himno Muyscanto (audio y letra)', d: 'Himno del Resguardo Indígena de Chía con música del Liceo Lunita', u: '/el-cole/#himno', c: 'El Cole', k: 'himno cancion letra muisca' });
  for (const d of DOCS) items.push({ t: d.t, d: `Documento PDF · ${d.cat} · ${d.year}`, u: d.href, c: 'Documentos', k: 'pdf descargar' });
  for (const f of FAQ) items.push({ t: f.q, d: f.a, u: '/preguntas-frecuentes/', c: 'Preguntas frecuentes' });
  const posts = (await getCollection('noticias', ({ data }) => !data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  for (const p of posts) items.push({ t: p.data.title, d: p.data.description, u: `/noticias/${p.id}/`, c: 'Noticias', k: `${p.data.category} ${p.data.date.getUTCFullYear()}` });

  const base = import.meta.env.BASE_URL;
  const withBase = (u: string) => (u.startsWith('/') && !u.startsWith(base) ? `${base}${u.slice(1)}` : u);

  // Deduplicar por URL + título y aplicar base si se publica en subruta
  const seen = new Set<string>();
  const unique = items
    .map((i) => ({ ...i, u: withBase(i.u) }))
    .filter((i) => { const key = i.u + i.t; if (seen.has(key)) return false; seen.add(key); return true; });
  return new Response(JSON.stringify(unique), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
