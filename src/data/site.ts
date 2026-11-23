/**
 * Datos centrales del Liceo Lunita de Chía.
 * Edite aquí teléfonos, dirección, redes, eventos y cifras: se reflejan en todo el sitio y en el SEO (JSON-LD).
 */

export const SITE = {
  name: 'Liceo Lunita de Chía',
  shortName: 'Lunita',
  url: 'https://liceolunita.edu.co',
  locale: 'es_CO',
  lang: 'es-CO',
  slogan: 'El Arte, la Educación y la Cultura son el Reflejo de un Pueblo',
  description:
    'Colegio en Chía, Cundinamarca, con más de 25 años de trayectoria. Preescolar, primaria y bachillerato con modelo STHEAMI: ciencia, tecnología, humanidades, ingeniería, artes, matemáticas e inclusión.',
  foundingYears: 25,
  rector: 'Elizabet Barrera',
  phone: '+57 313 432 0295',
  phoneDisplay: '313 432 0295',
  landline: '+57 601 884 9592',
  landlineDisplay: '(601) 884 9592',
  whatsapp: '573134320295',
  email: 'liceoinfantillunita@hotmail.com',
  address: {
    // TODO: completar con la dirección exacta de la sede (mejora el SEO local y Google Maps).
    street: '',
    locality: 'Chía',
    region: 'Cundinamarca',
    postalCode: '250001',
    country: 'CO',
  },
  mapQuery: 'Liceo Lunita de Chía',
  social: {
    facebook: 'https://www.facebook.com/Liceo-Lunita-de-Ch%C3%ADa-1760547990660817/',
    instagram: 'https://www.instagram.com/liceo_lunita_de_chia/',
    youtube: 'https://www.youtube.com/watch?v=ePIOzJrv4NU',
  },
  platforms: {
    aula: 'https://aula2021.liceolunita.edu.co/',
    siga: 'https://siga.liceolunita.edu.co/inicio/panel/index.php',
    matricula: 'https://siga.liceolunita.edu.co/inicio/matricula/',
  },
  googleSiteVerification: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
} as const;

export type Theme = 'sky' | 'green' | 'orange' | 'purple' | 'red' | 'yellow' | 'blue';
export type NavChild = { label: string; href: string; desc?: string; icon?: string; theme?: Theme; ext?: boolean };
export type NavItem = { label: string; href: string; children?: NavChild[] };

/** Navegación principal organizada por intención del usuario (no por el menú antiguo de WordPress). */
export const NAV: NavItem[] = [
  {
    label: 'El Cole',
    href: '/el-cole/',
    children: [
      { label: 'Historia y trayectoria', href: '/el-cole/#historia', desc: 'Más de 25 años en Chía', icon: 'book', theme: 'blue' },
      { label: 'Nuestro nombre', href: '/el-cole/#nombre', desc: 'Homenaje a la diosa Chía', icon: 'moon', theme: 'yellow' },
      { label: 'Misión y visión', href: '/el-cole/#mision', desc: 'Hacia dónde vamos', icon: 'rocket', theme: 'sky' },
      { label: 'Valores', href: '/el-cole/#valores', desc: 'Lo que nos une', icon: 'heart', theme: 'red' },
      { label: 'Símbolos', href: '/el-cole/#simbolos', desc: 'Escudo, bandera e himno', icon: 'shield', theme: 'purple' },
      { label: 'Fines educativos', href: '/el-cole/#fines', desc: 'Nuestros 15 propósitos', icon: 'target', theme: 'green' },
      { label: 'Himno Muyscanto', href: '/el-cole/#himno', desc: 'Escúchalo y canta', icon: 'music', theme: 'blue' },
      { label: 'Logros', href: '/el-cole/#logros', desc: 'Premios y reconocimientos', icon: 'award', theme: 'orange' },
      { label: 'Retos 2026', href: '/retos-2026/', desc: '28 metas institucionales', icon: 'flag', theme: 'purple' },
    ],
  },
  {
    label: 'Aprendizaje',
    href: '/niveles/',
    children: [
      { label: 'Preescolar', href: '/niveles/#preescolar', desc: 'Jardín y Transición', icon: 'sparkle', theme: 'orange' },
      { label: 'Primaria', href: '/niveles/#primaria', desc: 'Primero a Quinto', icon: 'book', theme: 'green' },
      { label: 'Bachillerato', href: '/niveles/#bachillerato', desc: 'Sexto a Once', icon: 'rocket', theme: 'sky' },
      { label: 'Modelo STHEAMI', href: '/modelo-stheami/', desc: 'Nuestro modelo pedagógico', icon: 'globe', theme: 'purple' },
    ],
  },
  {
    label: 'Vida escolar',
    href: '/noticias/',
    children: [
      { label: 'Noticias', href: '/noticias/', desc: 'Lo último del colegio', icon: 'file', theme: 'red' },
      { label: 'Festival de Bandas', href: '/festival-de-bandas/', desc: 'Ciudad de la Luna', icon: 'music', theme: 'purple' },
      { label: 'Cronograma', href: '/comunidad/#cronograma', desc: 'Próximos eventos', icon: 'calendar', theme: 'green' },
    ],
  },
  { label: 'Admisiones', href: '/admisiones/' },
  {
    label: 'Comunidad',
    href: '/comunidad/',
    children: [
      { label: 'Estudiantes', href: '/comunidad/#estudiantes', desc: 'Aula virtual, manual y notas', icon: 'users', theme: 'sky' },
      { label: 'Padres de familia', href: '/comunidad/#padres', desc: 'SIGA, circulares y documentos', icon: 'heart', theme: 'green' },
      { label: 'Docentes', href: '/comunidad/#docentes', desc: 'Plataformas y documentos', icon: 'laptop', theme: 'purple' },
      { label: 'Centro de documentos', href: '/comunidad/#documentos', desc: 'PDFs institucionales', icon: 'file', theme: 'red' },
      { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes/', desc: 'Resolvemos tus dudas', icon: 'help', theme: 'orange' },
    ],
  },
  { label: 'Contacto', href: '/contacto/' },
];

/** Selector "¿Quién eres?": cada perfil ve sus tareas más frecuentes primero. */
export const PROFILES: { id: string; label: string; theme: Theme; icon: string; intro: string; tasks: NavChild[] }[] = [
  {
    id: 'familia-nueva', label: 'Familia nueva', theme: 'yellow', icon: 'sparkle',
    intro: '¿Quieres que tu hijo o hija estudie en Lunita? Empieza aquí.',
    tasks: [
      { label: 'Proceso de admisión', href: '/admisiones/', desc: '4 pasos sencillos', icon: 'check' },
      { label: 'Niveles y grados', href: '/niveles/', desc: 'Preescolar a Once', icon: 'book' },
      { label: 'Modelo STHEAMI', href: '/modelo-stheami/', desc: 'Cómo aprendemos', icon: 'globe' },
      { label: 'Agenda una visita', href: '/contacto/', desc: 'Conoce la sede', icon: 'pin' },
    ],
  },
  {
    id: 'padres', label: 'Padres', theme: 'green', icon: 'heart',
    intro: 'Todo lo que necesitas para acompañar el día a día escolar.',
    tasks: [
      { label: 'Plataforma SIGA', href: SITE.platforms.siga, desc: 'Notas, boletines y pagos', icon: 'report', ext: true },
      { label: 'Cronograma', href: '/comunidad/#cronograma', desc: 'Fechas importantes', icon: 'calendar' },
      { label: 'Documentos', href: '/comunidad/#documentos', desc: 'Manual, SIEE y formatos', icon: 'file' },
      { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes/', desc: 'Respuestas rápidas', icon: 'help' },
    ],
  },
  {
    id: 'estudiantes', label: 'Estudiantes', theme: 'sky', icon: 'users',
    intro: 'Tus clases, tareas y recursos a un clic.',
    tasks: [
      { label: 'Aula Virtual', href: SITE.platforms.aula, desc: 'Clases y tareas', icon: 'laptop', ext: true },
      { label: 'Manual de convivencia', href: '/comunidad/#documentos', desc: 'Nuestros acuerdos', icon: 'book' },
      { label: 'Noticias', href: '/noticias/', desc: 'Lo que pasa en el cole', icon: 'file' },
      { label: 'Banda marcial', href: '/festival-de-bandas/', desc: 'Música y festivales', icon: 'music' },
    ],
  },
  {
    id: 'docentes', label: 'Docentes', theme: 'purple', icon: 'laptop',
    intro: 'Herramientas para tu labor en el aula.',
    tasks: [
      { label: 'Plataforma SIGA', href: SITE.platforms.siga, desc: 'Registro académico', icon: 'report', ext: true },
      { label: 'Aula Virtual', href: SITE.platforms.aula, desc: 'Gestión de cursos', icon: 'laptop', ext: true },
      { label: 'Documentos', href: '/comunidad/#documentos', desc: 'Modelo pedagógico y SIEE', icon: 'file' },
      { label: 'Cronograma', href: '/comunidad/#cronograma', desc: 'Calendario institucional', icon: 'calendar' },
    ],
  },
];

/** Pasos del proceso de admisión (se muestran como "ruta" interactiva). */
export const ADMISSION_STEPS = [
  { title: 'Conócenos', text: 'Explora nuestro modelo STHEAMI y los niveles. Si quieres, agenda una visita a la sede por WhatsApp o teléfono.', icon: 'sparkle' },
  { title: 'Inscríbete en línea', text: 'Diligencia el formulario de matrícula en la plataforma SIGA con los datos del estudiante y del acudiente.', icon: 'laptop' },
  { title: 'Entrega documentos', text: 'Prepara los documentos de la lista de verificación. Puedes marcarlos aquí mismo mientras los reúnes.', icon: 'file' },
  { title: '¡Bienvenido a Lunita!', text: 'Formaliza la matrícula y recibe la información de inicio de clases, uniformes y plataformas.', icon: 'award' },
];

/** Lista de verificación orientativa. Confirmar requisitos vigentes con secretaría. */
export const ADMISSION_DOCS = [
  'Registro civil de nacimiento y/o tarjeta de identidad del estudiante',
  'Documento de identidad de los padres o acudiente',
  'Certificados de estudio de los años anteriores (desde primaria)',
  'Paz y salvo del colegio de procedencia',
  'Certificado de afiliación a EPS',
  'Carné de vacunas (preescolar y primaria)',
  'Fotos tamaño documento',
  'Certificado médico, visual y auditivo',
];

export const FAQ = [
  { q: '¿Qué niveles ofrece el Liceo Lunita de Chía?', a: 'Ofrecemos Preescolar (Jardín y Transición), Primaria (primero a quinto) y Bachillerato (sexto a once), con el modelo pedagógico STHEAMI.', cat: 'Admisiones' },
  { q: '¿Cuándo son las matrículas 2027?', a: 'El proceso de matrículas 2027 está programado del 1 al 17 de diciembre de 2026 y se realiza en línea a través de la plataforma SIGA.', cat: 'Admisiones' },
  { q: '¿Dónde consulto los requisitos y costos?', a: 'Los requisitos y costos actualizados se publican en la plataforma de matrícula SIGA. También puedes escribirnos por WhatsApp para recibir orientación.', cat: 'Admisiones' },
  { q: '¿Qué es el modelo STHEAMI?', a: 'Es nuestro modelo pedagógico propio que integra Ciencia, Tecnología, Humanidades, Ingeniería, Artes, Matemáticas e Inclusión en proyectos interdisciplinarios, junto con la heutagogía: el estudiante como gestor de su propio aprendizaje.', cat: 'Aprendizaje' },
  { q: '¿Qué es la heutagogía?', a: 'Es el aprendizaje autodeterminado: el estudiante aprende a aprender con autonomía y responsabilidad, mientras el docente actúa como guía, mediador y orientador.', cat: 'Aprendizaje' },
  { q: '¿El colegio tiene convenios internacionales?', a: 'Sí. Contamos con un convenio de bachillerato internacional con Florida Global University, además de intercambios culturales y viajes pedagógicos para grado once.', cat: 'Aprendizaje' },
  { q: '¿Cómo accedo a la plataforma SIGA?', a: 'Ingresa desde el botón "Plataforma SIGA" en la sección Comunidad con el usuario y contraseña entregados por el colegio. Si los olvidaste, comunícate con secretaría.', cat: 'Plataformas' },
  { q: '¿Para qué sirve el Aula Virtual?', a: 'En el Aula Virtual los estudiantes encuentran clases, guías, tareas y recursos de cada asignatura, y los docentes gestionan sus cursos.', cat: 'Plataformas' },
  { q: '¿El colegio tiene banda marcial?', a: 'Sí. La Banda Marcial del Liceo Lunita de Chía participa en festivales nacionales e internacionales y el colegio organiza el Festival Internacional de Bandas Marciales "Ciudad de la Luna" desde 2023.', cat: 'Vida escolar' },
  { q: '¿Cómo apoyan el bienestar de los estudiantes?', a: 'Contamos con un equipo interdisciplinar de psicología, fonoaudiología, terapias de lenguaje, terapias físicas y acompañamiento a procesos de inclusión, además de rutas de atención para la convivencia escolar.', cat: 'Vida escolar' },
  { q: '¿Cómo me comunico con el colegio?', a: 'Puedes llamarnos al (601) 884 9592, escribirnos al WhatsApp 313 432 0295 o al correo liceoinfantillunita@hotmail.com.', cat: 'Contacto' },
];

export const STATS = [
  { value: 180, suffix: '+', label: 'Estudiantes graduados' },
  { value: 12, suffix: '', label: 'Promociones' },
  { value: 4, suffix: '°', label: 'Puesto municipal' },
  { value: 13, suffix: '°', label: 'Puesto departamental' },
  { value: 120, suffix: '°', label: 'Puesto nacional' },
];

export const STHEAMI = [
  { k: 'S', name: 'Ciencia', en: 'Science', color: '#1cb0f6', icon: 'flask', text: 'Preguntar, observar y experimentar: del laboratorio al NASA Space Apps Challenge.' },
  { k: 'T', name: 'Tecnología', en: 'Technology', color: '#ce82ff', icon: 'laptop', text: 'Robótica, programación y digitalización para crear, no solo consumir.' },
  { k: 'H', name: 'Humanidades', en: 'Humanities', color: '#ff9600', icon: 'book', text: 'Lectura, palabra e identidad muisca para pensar críticamente el territorio.' },
  { k: 'E', name: 'Ingeniería', en: 'Engineering', color: '#58cc02', icon: 'gear', text: 'Proyectos que resuelven problemas reales con diseño y prototipos.' },
  { k: 'A', name: 'Artes', en: 'Arts', color: '#ff86d0', icon: 'palette', text: 'Banda marcial, música y expresión: el arte como reflejo de un pueblo.' },
  { k: 'M', name: 'Matemáticas', en: 'Mathematics', color: '#ffc800', icon: 'math', text: 'Pensamiento lógico con resultados destacados en pruebas nacionales.' },
  { k: 'I', name: 'Inclusión', en: 'Inclusion', color: '#ff4b4b', icon: 'hands', text: 'Una escuela para todos, con enfoque humano, cultural e inclusivo.' },
];

export const LEVELS = [
  {
    id: 'preescolar',
    theme: 'orange' as Theme,
    name: 'Preescolar',
    grades: 'Jardín y Transición',
    text: 'Aprender jugando: exploración, lenguaje, arte y movimiento en un ambiente lúdico y seguro.',
  },
  {
    id: 'primaria',
    theme: 'green' as Theme,
    name: 'Primaria',
    grades: 'Primero a Quinto',
    text: 'Proyectos STHEAMI, lectura, ciencia y música que despiertan la curiosidad y la autonomía.',
  },
  {
    id: 'bachillerato',
    theme: 'sky' as Theme,
    name: 'Bachillerato',
    grades: 'Sexto a Once',
    text: 'Rigor académico, PREICFES, tecnología e intercambios internacionales. Convenio de bachillerato internacional.',
  },
];

export type SchoolEvent = { start: string; end?: string; title: string; desc: string };
export const EVENTS: SchoolEvent[] = [
  { start: '2026-11-26', title: 'Clausura', desc: 'Ceremonia de cierre del año escolar con toda la comunidad.' },
  { start: '2026-11-27', end: '2026-11-28', title: 'Grados y finalización de la jornada académica', desc: 'Celebramos a la promoción 2026.' },
  { start: '2026-12-01', end: '2026-12-17', title: 'Matrículas 2027', desc: 'Proceso de matrícula en línea a través de la plataforma SIGA.' },
  { start: '2026-12-31', title: 'Despedida año 2026', desc: 'Cerramos un año lleno de logros y sueños cumplidos.' },
];

export const VIDEOS = [
  { id: 'ePIOzJrv4NU', title: 'Liceo Lunita 2026' },
  { id: '3BEbe16Xr4Y', title: 'Ganador de los Premios a la Excelencia Educativa 2026' },
  { id: 'pfNZmSx6BzM', title: 'Festival Internacional de Bandas Marciales — Chía, Ciudad de la Luna 2026' },
  { id: 'stnibsi4clQ', title: 'Festival de Bandas Marciales Chía 2025' },
];

export const PRESS = [
  {
    outlet: 'Semana',
    title: 'La mujer que llevó a sus estudiantes de Chía a la NASA',
    url: 'https://www.semana.com/mejor-colombia/articulo/la-mujer-que-llevo-a-sus-estudiantes-de-chia-a-la-nasa/202505/',
  },
  {
    outlet: 'Cambio',
    title: '“Captura la imaginación de los jóvenes”: Michio Kaku elogió al Liceo Lunita de Chía',
    url: 'https://cambiocolombia.com/pais/captura-la-imaginacion-de-lo-jovenes-michio-kaku-elogio-al-liceo-lunita-de-chia',
  },
];

export const ACHIEVEMENTS = [
  { year: '2026', title: 'Premio a la Mejor Trayectoria en Educación Integral y Transformadora', org: 'Premios Excelencia Educativa' },
  { year: '2025', title: 'Colaboradores del NASA Space Apps Challenge Neiva', org: 'Tras la exitosa edición 2024 en Chía' },
  { year: '2023', title: 'Nace el Festival Internacional de Bandas Marciales “Ciudad de la Luna”', org: 'Hoy en su 4.ª edición' },
  { year: '2019', title: 'Reconocimiento por la celebración del Aniversario Apollo 50', org: 'Instituto de Astrobiología de Colombia' },
  { year: '2018', title: 'Docentes y estudiantes en formación académica en la NASA', org: 'Florida, EE. UU.' },
  { year: '2018', title: 'Quinto puesto nacional en pruebas de matemáticas', org: 'Universidad Nacional de Colombia' },
];

/** Centro de documentos: archivos PDF publicados por el colegio. */
const U = 'https://liceolunita.edu.co/wp-content/uploads';
export const DOCS = [
  { t: 'Manual de convivencia escolar 2025–2026', cat: 'Convivencia', year: '2025', href: `${U}/2025/01/MANUAL-DE-CONVIVENCIA-ESCOLAR-2025-2026.pdf` },
  { t: 'Sistema Institucional de Evaluación de Estudiantes (SIEE)', cat: 'Académico', year: '2025', href: `${U}/2025/02/SISTEMA-INSTITUCIONAL-DE-EVALUACION-DE-ESTUDIANTES.pdf` },
  { t: 'Modelo pedagógico del Liceo Lunita de Chía', cat: 'Académico', year: '2026', href: `${U}/2026/01/6.-MODELO-PEDAGOGICO-DEL-COLEGIO-LICEO-LUNITA-DE-CHIA.pdf` },
  { t: 'Estructura del modelo pedagógico', cat: 'Académico', year: '2026', href: `${U}/2026/01/8.-ESTRUCTURA-DEL-MODELO-PEDAGOGICO-DEL-LICEO-LUNITA-DE-CHIA.pdf` },
  { t: 'Filosofía institucional', cat: 'Institucional', year: '2026', href: `${U}/2026/01/7.-FILOSOFIA-INSTITUCIONAL.pdf` },
  { t: 'Rutas de atención integral para la convivencia escolar', cat: 'Convivencia', year: '2022', href: `${U}/2022/01/RUTAS-DE-ATENCION-INTEGRAL-PARA-LA-CONVIVENCIA-ESCOLAR-2022-pdf.pdf` },
  { t: 'Política de tratamiento de datos (Habeas Data)', cat: 'Legal', year: '2023', href: `${U}/2023/03/HABEAS-DATA.pdf` },
  { t: 'Consentimiento informado', cat: 'Legal', year: '2022', href: `${U}/2022/02/CONSENTIMIENTO-INFORMADO.pdf` },
  { t: 'Anexo 1: Autoevaluación y coevaluación', cat: 'Formatos', year: '2023', href: `${U}/2023/01/ANEXO_1_-AUTOEVALUACION_Y_COEVALUACION.pdf` },
  { t: 'Anexo 2: Formato de compromiso pedagógico', cat: 'Formatos', year: '2023', href: `${U}/2023/01/ANEXO_2_FORMATO_COMPROMISO_PEDAGOGICO.pdf` },
  { t: 'Anexo 3: Formato de aceptación del manual de convivencia', cat: 'Formatos', year: '2023', href: `${U}/2023/01/ANEXO_3_-FORMATO_DE_ACEPTACION_MANUAL_DE_CONVIVENCIA.pdf` },
];
export const DOC = (t: string) => DOCS.find((d) => d.t.startsWith(t))!.href;
