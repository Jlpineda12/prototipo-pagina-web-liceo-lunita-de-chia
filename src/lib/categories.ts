/** Categorías del blog y su color de tema. Fuente única para tarjetas, filtros, artículos y la línea de tiempo. */
export const CATEGORIES = ['Noticias', 'Bandas', 'Celebraciones', 'Académico', 'Excursiones', 'Ciencia', 'Logros'] as const;
export type Category = (typeof CATEGORIES)[number];

export const CAT_THEME: Record<Category, string> = {
  Noticias: 't-red',
  Bandas: 't-purple',
  Celebraciones: 't-orange',
  Académico: 't-green',
  Excursiones: 't-sky',
  Ciencia: 't-blue',
  Logros: 't-yellow',
};

/** Etiqueta visible de cada categoría en filtros y la línea de tiempo. */
export const CAT_LABEL: Record<Category, string> = {
  Noticias: 'Noticias',
  Bandas: 'Bandas',
  Celebraciones: 'Celebraciones',
  Académico: 'Académico',
  Excursiones: 'Viajes y excursiones',
  Ciencia: 'Ciencia y espacio',
  Logros: 'Logros y competencias',
};

export const CAT_ICON: Record<Category, string> = {
  Noticias: 'file',
  Bandas: 'music',
  Celebraciones: 'sparkle',
  Académico: 'book',
  Excursiones: 'globe',
  Ciencia: 'rocket',
  Logros: 'award',
};
