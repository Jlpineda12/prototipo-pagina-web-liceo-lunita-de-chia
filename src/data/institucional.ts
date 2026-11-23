/**
 * Contenido institucional migrado del sitio original del Liceo Lunita de Chía
 * (Fines educativos, Himno Muyscanto y Retos 2026). Generado a partir de liceolunita.edu.co.
 */
import type { Theme } from './site';

export const FINES: string[] = [
  "El pleno desarrollo de la personalidad sin más limitaciones que las que le imponen los derechos de los demás y el orden jurídico, dentro de un proceso de formación integral, física, psíquica, intelectual, moral, espiritual, social, afectiva, ética, cívica y demás valores humanos.",
  "La formación en el respeto a la vida y a los demás derechos humanos, a la paz, a los principios democráticos, de convivencia, pluralismo, justicia, solidaridad y equidad, así como en el ejercicio de la tolerancia y de la libertad.",
  "La formación para facilitar la participación de todos en las decisiones que los afectan en la vida económica, política, administrativa y cultural de la Nación.",
  "La formación en el respeto a la autoridad legítima y a la ley, a la cultura nacional, a la historia colombiana y a los símbolos patrios.",
  "La adquisición y generación de los conocimientos científicos y técnicos más avanzados, humanísticos, históricos, sociales, geográficos y estéticos, mediante la apropiación de hábitos intelectuales adecuados para el desarrollo del saber.",
  "El estudio y la comprensión crítica de la cultura nacional y de la diversidad étnica y cultural del país, como fundamento de la unidad nacional y de su identidad.",
  "El acceso al conocimiento, la ciencia, la técnica y demás bienes y valores de la cultura, el fomento de la investigación y el estímulo a la creación artística en sus diferentes manifestaciones.",
  "La creación y fomento de una conciencia de la soberanía nacional y para la práctica de la solidaridad y la integración con el mundo, en especial con Latinoamérica y el Caribe.",
  "El desarrollo de la capacidad crítica, reflexiva y analítica que fortalezca el avance científico y tecnológico nacional, orientado con prioridad al mejoramiento cultural y de la calidad de la vida de la población, a la participación en la búsqueda de alternativas de solución a los problemas y al progreso social y económico del país.",
  "La adquisición de una conciencia para la conservación, protección y mejoramiento del medio ambiente, de la calidad de la vida, del uso racional de los recursos naturales, de la prevención de desastres, dentro de una cultura ecológica y del riesgo y la defensa del patrimonio cultural de la Nación.",
  "La formación en la práctica del trabajo, mediante los conocimientos técnicos y habilidades, así como en la valoración del mismo como fundamento del desarrollo individual y social.",
  "La estimulación hacia el estudio de una segunda lengua (inglés-francés) como herramienta básica para acceder a un mundo profesional de mejor calidad y proyección.",
  "La formación para la promoción y preservación de la salud y la higiene, la prevención integral de problemas socialmente relevantes, la educación física, la recreación, el deporte y la utilización adecuada del tiempo libre",
  "La promoción en la persona y en la sociedad de la capacidad para crear, investigar, adoptar la tecnología que se requiere en los procesos de desarrollo del país y le permita al educando ingresar al sector productivo.",
  "La formación en diferentes modalidades (presencial, alternancia o virtual), articulada a un enfoque de gestión integral del riesgo, promoción de la salud y bienestar escolar, que garantice entornos seguros, resilientes y protectores para toda la comunidad educativa, en coherencia con el modelo STHEAMI."
];

export const HIMNO = {
  title: 'Muyscanto',
  subtitle: 'Himno del Resguardo Indígena de Chía · Música Liceo Lunita de Chía',
  audio: '/audio/himno-muyscanto.mp3',
  estrofas: [
  "Con orgullo de raza llevamos sangre muisca de la madre tierra que amamos (bis).",
  "A zue y Chía respeto guardamos símbolos ancestrales como escudo forjamos.",
  "En Iguaque tenemos origen Bachué nos brindó caricias maternales Bochica labor y virtud Nemqueteba las artes manuales nuestros tesoros cuidan los mohanes y Chiminigagua es padre de deidades (bis).",
  "Madre tierra amada y bendita generosa das lo que se necesita de tu vientre salud y comida para quien te ama y te cultiva torrentes de agua fuente de vida.",
  "Con orgullo de raza llevamos sangre muisca de la madre tierra que amamos.",
  "A zue y Chía respeto guardamos símbolos ancestrales como escudo forjamos.",
  "Fonqueta cerca de piedra cerros de occidente las cunas tribales manto verde terruño de Chía testigo de luchas ancestrales por generaciones aquí viviremos nuestro territorio lo preservaremos."
] as string[],
  credit: "La letra del Muiscanto fue compuesta por Pedro Milciades Socha Toro (jica cha), la música fue creada por Ingrid Hernández, profesora de música del Resguardo y arreglos musicales y voces Grupo Liceo Lunita Fivati",
};

export const RETO_CATS: Record<string, { label: string; theme: Theme; icon: string }> = {
  "stheami": {
    "label": "STHEAMI e innovación",
    "theme": "purple",
    "icon": "atom"
  },
  "ciencia": {
    "label": "Ciencia y astronomía",
    "theme": "sky",
    "icon": "rocket"
  },
  "academico": {
    "label": "Excelencia académica",
    "theme": "green",
    "icon": "award"
  },
  "idiomas": {
    "label": "Idiomas e inclusión",
    "theme": "orange",
    "icon": "chat"
  },
  "cultura": {
    "label": "Arte, cultura e identidad",
    "theme": "red",
    "icon": "palette"
  },
  "valores": {
    "label": "Convivencia y valores",
    "theme": "yellow",
    "icon": "heart"
  },
  "mundo": {
    "label": "Educación internacional",
    "theme": "blue",
    "icon": "globe"
  }
};

export const RETOS: { n: number; title: string; items: string[]; cat: string }[] = [
 {
  "n": 1,
  "title": "Fortalecer el Modelo pedagógico STHEAMI",
  "items": [
   "Estrechar lazos con instituciones educativas de Asia, Europa y Norte América para el conocimiento y aplicación del modelo STHEAMI.",
   "Coordinar y realizar la conmemoración de los «26 Años de Educación Aeroespacial» del Liceo Lunita, destacando su labor como líder en la comunidad y en el ámbito educativo, así como su papel pionero en la implementación de modelos pedagógicos innovadores como STHEAMI."
  ],
  "cat": "stheami"
 },
 {
  "n": 2,
  "title": "Vincular la formación STHEAMI con estándares globales",
  "items": [
   "Liderar el STEAM CONF realizado en la Universidad de la Sabana: con la participación internacional de los mejores colegios del mundo, permitiendo elevar la calidad educativa regional mediante la transferencia de modelos pedagógicos innovadores."
  ],
  "cat": "stheami"
 },
 {
  "n": 3,
  "title": "Formar a nuestros estudiantes para el futuro profesional",
  "items": [
   "Fomentar el desarrollo de trabajos académicos para lograr la promoción según la complejidad de cada grado. En octavo, se elaborará un ensayo; en noveno, un artículo investigativo; y en educación media (décimo y once), una monografía. Todo ello con el fin de promover el pensamiento crítico y la rigurosidad en la elaboración de estos textos.Aproximar a los estudiantes a diferentes instituciones de educación superior como estrategia de orientación profesional y ambientación al sistema universitario.",
   "Involucrar al estudiante en espacios de ciencia, investigación, tecnología y la aplicación de sus contenidos.",
   "Orientar al estudiante y sus familias para aplicar a diferentes oportunidades para continuar con su formación en educación superior.",
   "Formar líderes a nivel nacional e internacional en el diseño y desarrollo de artefactos, ponencias e inventos, integrando conocimientos científicos en áreas como las actividades aeroespaciales, con el propósito de impulsar la innovación y el avance tecnológico en dichos campos."
  ],
  "cat": "academico"
 },
 {
  "n": 4,
  "title": "Fortalecer el espíritu participativo y la interacción cultural de la comunidad educativa a nivel local e internacional",
  "items": [
   "Fortalecer la integración de la comunidad educativa mediante actividades de intercambio cultural que promuevan el sentido de pertenencia, la responsabilidad social, el respeto y el compromiso con la institución y su entorno, favoreciendo una mayor participación social y académica.",
   "Gestionar y consolidar la participación de invitados internacionales de Brasil y delegaciones de El Salvador, Honduras, Panamá, Venezuela, México y Costa Rica, con el fin de enriquecer la formación integral de los estudiantes, promover el intercambio artístico y cultural, y dinamizar el turismo cultural en el municipio."
  ],
  "cat": "cultura"
 },
 {
  "n": 5,
  "title": "Proyectar el talento artístico institucional a nivel continental",
  "items": [
   "Realizar una gira cultural en Honduras representando a Chía como embajadores de disciplina y arte, fortaleciendo el orgullo nacional.",
   "Participar en el Festival de Bandas en Honduras como espacio de proyección internacional, intercambio cultural y reconocimiento del talento artístico institucional, fortaleciendo la identidad, la disciplina y el sentido de pertenencia."
  ],
  "cat": "cultura"
 },
 {
  "n": 6,
  "title": "Fomentar hábitos de disciplina y organización para fomentar el aprovechamiento del tiempo",
  "items": [
   "Desarrollar hábitos socio – culturales para facilitar el conocimiento y cumplimiento del Manual de Convivencia en derechos, procesos y deberes.",
   "Rescatar los principios fundamentales de la educación tradicional mostrando la disciplina como un orden adecuado para cumplir con los objetivos personales, familiares y académicos."
  ],
  "cat": "valores"
 },
 {
  "n": 7,
  "title": "Fomentar en la comunidad educativa un comportamiento responsable con el medio ambiente",
  "items": [
   "Sensibilizar a nuestros niños y jóvenes sobre la importancia de la conservación y cuidado de su entorno.",
   "Desarrollar actividades orientadas al cuidado y conservación de los ecosistemas. (exploración de plantas y hervarios)",
   "Consolidar el proyecto de educación ambiental."
  ],
  "cat": "valores"
 },
 {
  "n": 8,
  "title": "Permanecer en el nivel muy superior de las pruebas de estado (saber-pro) y superar el promedio obtenido el año 2022 de 339 alcanzando un promedio de 350",
  "items": [
   "Continuar convenios con entidades especializadas (Preicfes.net, Universidad Nacional de Antioquia y Universidad de la Sabana) en orientación y presentación de pruebas que le permitan a la institución continuar con el avance proyectándonos entre los 1000 mejores colegios del país y los mejores 10 del departamento a nivel Saber 11.",
   "Realizar capacitación constante con el equipo de docentes, padres y estudiantes generando alto sentido de compromiso orientado siempre hacia la excelencia.",
   "Fortalecer el proceso de implementación del Proyecto Educativo Institucional y del Modelo Pedagógico del Colegio Liceo Lunita de Chía.",
   "Inmersión cultural donde nuestros estudiantes tendrán la oportunidad de interactuar con invitados internacionales dentro de la institución para la práctica de lenguas extranjeras y así fortalecer el enfoque comunicativo."
  ],
  "cat": "academico"
 },
 {
  "n": 9,
  "title": "Fomentar la lectura diaria y la expresión oral y escrita dentro y fuera de la institución",
  "items": [
   "Desarrollar el programa de lectura en voz alta que abarca a toda la comunidad académica (pre jardín a 11°).",
   "Estimular en los padres de familia la importancia de la lectura como habito en los procesos de enseñanza – aprendizaje."
  ],
  "cat": "valores"
 },
 {
  "n": 10,
  "title": "Ampliar el alcance de las ferias artesanales y científicas",
  "items": [
   "Aumentar la participación de la comunidad del municipio de Chía mediante la difusión de estos eventos en diferentes medios publicitarios.",
   "Extender la invitación a colegios públicos y privados para su participación como asistentes.",
   "Demostrar que todos nuestros niños, jóvenes y estudiantes del municipio de chía están en la capacidad de estimular, desarrollar e integrar el manejo de los dos hemisferios en términos de aprendizaje.",
   "Fomentar el aprendizaje significativo y el espíritu emprendedor en los estudiantes, a partir de los saberes adquiridos en las ferias artesanales y científicas, promoviendo la aplicación práctica del conocimiento, la creatividad y la iniciativa como herramientas para la construcción de proyectos de vida y el desarrollo local."
  ],
  "cat": "cultura"
 },
 {
  "n": 11,
  "title": "Disminuir el índice de estudiantes que presentan nivelaciones al finalizar el año escolar",
  "items": [
   "Aumentar el acompañamiento escolar diario por parte de los docentes y auxiliares de aula.",
   "Realizar seguimiento académico a los estudiantes con menor desempeño con el fin de generar estrategias que permitan superar las deficiencias presentadas.",
   "Integrar el uso de la plataforma SIGA y herramientas digitales para crear tutorías entre pares, donde estudiantes destacados apoyen a quienes presentan dificultades en áreas STHEAMI."
  ],
  "cat": "academico"
 },
 {
  "n": 12,
  "title": "Consolidar a la institución como un referente en robótica y astronomía, impulsando la innovación y el aprendizaje científico con proyección nacional e internacional",
  "items": [
   "Participar en eventos nacionales e internacionales logrando reconocimiento de la Institución en el desarrollo de procesos de innovación en estas áreas.",
   "Implementar nuevas herramientas para el desarrollo de las actividades de estos dos clubes.",
   "Establecer un espacio pedagógico permanente para la enseñanza y divulgación de la astronomía en la institución, que fortalezca el pensamiento científico, la observación del universo y el aprendizaje experimental en los estudiantes."
  ],
  "cat": "ciencia"
 },
 {
  "n": 13,
  "title": "Integrar y potenciar la formación en valores humanos y espirituales en cada una de las asignaturas que se trabajan en el Liceo Lunita de Chía",
  "items": [
   "Incentivar un momento de reflexión diaria al comenzar las clases para fomentar la práctica de valores, gratitud y el pensamiento ético.",
   "Celebrar el sentido religioso de los momentos más significativos durante el año escolar (miércoles de Ceniza, Viacrucis, Semana Santa, Día de la madre, Día del Niño, etc.)"
  ],
  "cat": "valores"
 },
 {
  "n": 14,
  "title": "Liderar procesos de innovación en el ámbito pedagógico en el que sin importar la modalidad en la implementación del procesos educativo, se fomenta en el estudiante un espíritu de autonomía en la adquisición del conocimiento",
  "items": [
   "A través de la implementación de estrategias y el fortalecimiento de convenios con entidades científica y educativas de renombre nacional e internacional, se fomenta un aprendizaje autónomo y reflexivo en el estudiante que sin importar la modalidad en la que sea impartido el conocimiento creará en sí significancia por cada uno de los saber que adquiere y en los que logra profundizar de manera personal.",
   "Se capacitará al personal docente en el uso y manejo de las diferentes herramientas que se implementan en el proceso formativo.",
   "Promover la implementación de metodologías activas e innovadoras que integren el uso pedagógico de la tecnología, la investigación y el aprendizaje basado en proyectos, fortaleciendo la autonomía, el pensamiento crítico y la construcción significativa del conocimiento en los estudiantes."
  ],
  "cat": "stheami"
 },
 {
  "n": 15,
  "title": "Liderar la implementación de procesos pedagógicos a través del empleo de diferentes herramientas TIC",
  "items": [
   "A través del fortalecimiento de las diferentes plataformas implementadas por la institución.",
   "Fortalecer el uso integral de las plataformas académicas y de gestión, tales como Moodle para el aprendizaje virtual, Siga en la administración escolar, y las herramientas de Creativos Digitales, Instruimos y Liyhi, garantizando un entorno tecnológico robusto que facilite el seguimiento pedagógico y el acceso a recursos de calidad.",
   "Potenciar la informática como un área transversal, orientada al diseño, la programación digital y el uso de herramientas tecnológicas que estimulen el desarrollo del pensamiento científico y la resolución de problemas en los estudiantes."
  ],
  "cat": "stheami"
 },
 {
  "n": 16,
  "title": "Motivar e incentivar la enseñanza y aprendizaje del francés y portugués como lengua Extranjera",
  "items": [
   "Presentar desde una perspectiva dinámica y ligada a la concreción del nivel A1 de los niveles de francés y Portugues basados en el Marco común europeo para el aprendizaje de segundas lenguas. Con la intención de motivar el aprendizaje de otros idiomas y culturas como aspectos importantes desde la formación de un ser autónomo y crítico de acuerdo a las necesidades de las sociedades actuales.",
   "Promover espacios de interculturación mediante la participación de invitados de Brasil en la institución, con el propósito de fortalecer el aprendizaje del idioma portugués y el reconocimiento de la diversidad cultural."
  ],
  "cat": "idiomas"
 },
 {
  "n": 17,
  "title": "Afianzar los procesos de Enseñanza aprendizaje del inglés como lengua extranjera",
  "items": [
   "Afianzar el uso del inglés como lengua Extranjera dentro de las clases, por parte de docentes y Alumnos en los grados mayores.",
   "Incentivar a la comunicación en inglés como lengua Extranjera, haciendo uso de expresiones cotidianas y de uso diario por parte de estudiantes y docentes con los grados inferiores.",
   "Tener en cuenta los requerimientos del Marco común Europeo de referencia para el aprendizaje de Idiomas y las bases epistemológicas y pedagógicas que promueve el Liceo Lunita de Chía, para la adecuación de los diferentes contenidos y metodología."
  ],
  "cat": "idiomas"
 },
 {
  "n": 18,
  "title": "Desarrollar muestras académicas desde el inglés- francés y portugués, en procesos institucionales y cierres de procesos académicos",
  "items": [
   "Desarrollar intervenciones o muestras académicas, que den muestra a la comunidad educativa en general de los avances obtenidos a lo largo de los procesos y periodos académicos desde el inglés, francés y Portugués.",
   "Mostrar y dar valor a las voces de los estudiantes de acuerdo con visiones de mundo y el análisis de situaciones reales por medio de producciones lingüísticas."
  ],
  "cat": "idiomas"
 },
 {
  "n": 19,
  "title": "Reconocer los idiomas como puentes de entendimiento, integrando la lengua de señas y el muysccubun como expresiones de diversidad, inclusión e identidad cultural",
  "items": [
   "Conocer y valorar las particularidades de los diferentes idiomas, incluyendo la lengua de señas y la lengua muysccubun, como herramientas para la formación de individuos conscientes, inclusivos y respetuosos de la diversidad cultural y social.",
   "Promover espacios pedagógicos que fortalezcan el aprendizaje básico de las lenguas, favoreciendo el reconocimiento del ser en sociedad y la comprensión de distintas concepciones de mundo acordes con las realidades particulares.",
   "Entender el aprendizaje de las lenguas como medio para la transformación de un ser capaz de solucionar problemas, asumir diferentes posturas, ampliar el pensamiento y la concepción de realidad desde diferentes puntos de vista."
  ],
  "cat": "idiomas"
 },
 {
  "n": 20,
  "title": "L.S.C.-Lengua de señas colombianas",
  "items": [
   "Generar los escenarios adecuados para realizar una práctica pedagógica inclusiva, mediada por tecnologías educativas y un factor humano altamente capacitado.",
   "Establecer las pautas generales que permitan a los miembros de la comunidad educativa ampliar sus capacidades comunicativas en L.S.C."
  ],
  "cat": "idiomas"
 },
 {
  "n": 21,
  "title": "Liderar la divulgación científica y astronómica regional",
  "items": [
   "Festival de Astronomía en Villa de Leyva: Implementar talleres de observación y pensamiento científico. Aporte: Fomentar mentes curiosas y conocimiento del universo en la comunidad"
  ],
  "cat": "ciencia"
 },
 {
  "n": 22,
  "title": "Política y Gobierno",
  "items": [
   "Fortalecer el gobierno estudiantil de la Institución mediante la articulación con la Alcaldía del municipio de Chía, promoviendo la participación activa de los estudiantes en proyectos y espacios de incidencia juvenil que contribuyan a la formación democrática y al ejercicio responsable de la ciudadanía.",
   "Fortalecer la democracia escolar a través del robustecimiento del gobierno estudiantil impulsando el liderazgo de los jóvenes que busquen el bien común de la Institución."
  ],
  "cat": "valores"
 },
 {
  "n": 23,
  "title": "Continuar con el proyecto Corredor Científico de la sabana",
  "items": [
   "Fortalecer el corredor científico de la sabana propiciando una cultura de investigación científica entre los jóvenes.",
   "Promover y generar alianzas estratégicas para incluir diferentes organizaciones de carácter público y privado para ampliar el rango de acción y la población objeto.",
   "Conocer y establecer lazos con mujeres astronautas, trayendo a chía y al colegio una de ellas para el crecimiento del corredor científico de la sabana.",
   "Participar en los desafíos de programación y ciencia aeroespacial de NASA Space en Cali y Hackaton en Barcelona, trayendo soluciones tecnológicas de vanguardia para aplicarlas al entorno local y al Corredor Científico de la Sabana."
  ],
  "cat": "ciencia"
 },
 {
  "n": 24,
  "title": "Excursión pedagógica",
  "items": [
   "Visita a Europá, conocer los diferentes sitios de interés histórico y cultural de dicho país, conocer las estrategias educativas más trascendentales, para fortalecer las competencias STHEAMI de la comunidad educativa del Liceo Lunita."
  ],
  "cat": "mundo"
 },
 {
  "n": 25,
  "title": "Superar puestos en olimpiadas Instruimos, lograr posicionar los estudiantes de grado decimo y once en los primeros 32 puestos de las olimpiada",
  "items": [
   "Realizar capacitación constante con el equipo de docentes, padres y estudiantes generando alto sentido de compromiso orientado siempre hacia la excelencia.",
   "Fortalecer el proceso de implementación del Proyecto Educativo Institucional y del Modelo Pedagógico del Colegio Liceo Lunita de Chía.",
   "Realizar seguimiento constante en las diferentes actividades de la plataforma instruimos para una óptima preparación para las pruebas.",
   "Incentivar la presentación de las pruebas por dinero de la plataforma instruimos, teniendo en cuenta que es un incentivo académico y monetario para las familias de los estudiantes del liceo lunita."
  ],
  "cat": "academico"
 },
 {
  "n": 26,
  "title": "Educación Internacional",
  "items": [
   "Afianzar los lazos creados con las instituciones internacionales American Elite School y Florida Global University.",
   "Lograr vínculos con más instituciones educativas internacionales",
   "Motivar a los estudiantes a cursar las diferentes asignaturas para obtener la doble titulación de bachiller internacional."
  ],
  "cat": "mundo"
 },
 {
  "n": 27,
  "title": "Alfabeto Braille",
  "items": [
   "Generar los escenarios adecuados para realizar una práctica pedagógica inclusiva, mediada por tecnologías educativas y un factor humano altamente capacitado.",
   "Establecer las pautas generales que permitan a los miembros de la comunidad educativa ampliar sus capacidades comunicativas en alfabeto braille."
  ],
  "cat": "idiomas"
 },
 {
  "n": 28,
  "title": "Tejido Muysca: arte ancestral y construcción social",
  "items": [
   "Reconocer el tejido Muysca como un lenguaje ancestral que articula saberes artesanales y relaciones sociales, fortaleciendo la identidad cultural, el trabajo colectivo y la transmisión intergeneracional de conocimientos como base para la construcción de comunidad en la sociedad actual.",
   "Promover la enseñanza del tejido Muysca en el espacio educativo como una práctica pedagógica que integra el hacer manual, la memoria cultural y el aprendizaje colaborativo, favoreciendo la formación de sujetos sensibles, creativos y conscientes de su herencia ancestral.",
   "Trabajar en convenio con nuestro Resguardo Indígena de Chía continuando con el proceso de rescate de la lengua muysccubun."
  ],
  "cat": "cultura"
 }
];
