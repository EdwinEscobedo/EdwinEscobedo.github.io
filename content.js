/* Research records grounded in publications, repositories and author-supplied materials. */
window.RESEARCH={
  "profile": {
    "photo": "https://cris.ulima.edu.pe/files-asset/40822754/EEscobedo.jpg?f=jpg&w=640",
    "fallback": "https://avatars.githubusercontent.com/u/30306144?v=4",
    "cti": "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=162198",
    "cris": "https://cris.ulima.edu.pe/es/persons/edwin-jonathan-escobedo-cardenas/",
    "scholar": "https://scholar.google.com/citations?user=PK8d0PkAAAAJ&hl=es",
    "github": "https://github.com/EdwinEscobedo",
    "orcid": "https://orcid.org/0000-0003-2034-513X",
    "contact": [
      "eescobed@ulima.edu.pe",
      "edu.escobedo88@gmail.com"
    ],
    "linkedin": "https://pe.linkedin.com/in/edwin-escobedo"
  },
  "projects": [
    {
      "id": "signo1",
      "year": "2024–2025",
      "category": "Sign language",
      "stage": 1,
      "role": "PI",
      "image": "signoperu-web.webp",
      "title": {
        "en": "SignoPeru · AI sign recognition",
        "es": "SignoPerú · reconocimiento de señas"
      },
      "summary": {
        "en": "SignoPerú investigates automatic recognition of isolated words in Peruvian Sign Language (LSP) as a foundation for inclusive communication technologies. The project develops deep-learning and computer-vision models for dynamic signing and connects this research with a web application for learning and exploring LSP; recognition and text-to-sign functions have different stages of development.",
        "es": "SignoPerú investiga el reconocimiento automático de palabras aisladas en Lengua de Señas Peruana (LSP) como base de tecnologías para la comunicación inclusiva. Desarrolla modelos de aprendizaje profundo y visión computacional para señas dinámicas y articula esta investigación con una plataforma web para aprender y explorar la LSP, cuyos módulos de reconocimiento y texto a señas tienen diferentes niveles de desarrollo."
      },
      "problem": {
        "en": "People who use LSP encounter communication barriers in education, employment and everyday interactions. Scarcity of digital linguistic resources and interpreters limits the practical reach of sign-language technologies.",
        "es": "Las personas usuarias de LSP enfrentan barreras de comunicación en la educación, el empleo y la vida cotidiana. La limitada disponibilidad de recursos lingüísticos digitales e intérpretes dificulta desarrollar herramientas tecnológicas adaptadas a esta lengua."
      },
      "method": {
        "en": "Design of a bounded LSP word-recognition task, collection and curation of sign-language recordings, evaluation of deep-learning models for visual gesture analysis, and integration of interactive learning and sign-recognition functions into a web platform.",
        "es": "Diseño de una tarea delimitada de reconocimiento de palabras en LSP; captura y curación de registros de señas; evaluación de modelos de aprendizaje profundo para análisis de gestos y desarrollo de una plataforma web con funciones interactivas de aprendizaje y reconocimiento."
      },
      "result": {
        "en": "A SignoPerú research and web-application platform was developed. The official site offers interactive LSP learning modules; experimental recognition components should not be confused with a complete continuous-sign-language translation system.",
        "es": "Se desarrolló la línea tecnológica y la plataforma web SignoPerú, con módulos interactivos para el aprendizaje de LSP. Los componentes experimentales de reconocimiento no deben confundirse con un traductor completo de lengua de señas continua."
      },
      "team": "Lourdes Ramírez Cerna; Áurea Rossy Soriano Vargas",
      "links": [
        [
          "Platform",
          "https://signoperu.ulima.edu.pe/signo"
        ],
        [
          "CRIS",
          "https://cris.ulima.edu.pe/es/projects/signoper%C3%BA-reconocimiento-de-palabras-en-lengua-de-se%C3%B1as-peruana-c/"
        ]
      ],
      "papers": [],
      "line": "signoperu",
      "gallery": [
        {
          "image": "signoperu-text-to-sign.webp",
          "label": {
            "en": "Text-to-sign tutorial in the SignoPeru platform",
            "es": "Tutorial Texto a Señas en la plataforma SignoPerú"
          }
        },
        {
          "image": "signoperu-web.webp",
          "label": {
            "en": "Official SignoPeru web interface",
            "es": "Interfaz oficial de SignoPerú"
          }
        }
      ]
    },
    {
      "id": "signo2",
      "year": "2025–2026",
      "category": "Sign language",
      "stage": 2,
      "role": "PI",
      "image": "signoperu-iso-signer.webp",
      "title": {
        "en": "SignoPeru · Minimal-pair recognition",
        "es": "SignoPerú · reconocimiento de pares mínimos"
      },
      "summary": {
        "en": "The second SignoPerú study tackles minimal pairs: signs with similar handshape, location or movement whose small articulatory differences change meaning. It investigates fine-grained recognition with synchronized RGB, depth and skeletal information and documents SIGNO-PERU-ISO, a controlled-access dataset of 18,179 recordings from 17 signers.",
        "es": "La segunda investigación SignoPerú aborda los pares mínimos: señas que comparten forma de la mano, ubicación o movimiento, pero cambian de significado por diferencias articulatorias sutiles. Estudia su reconocimiento fino con información RGB, profundidad y esqueleto, y documenta SIGNO-PERU-ISO, un dataset de acceso controlado con 18 179 registros de 17 signantes."
      },
      "problem": {
        "en": "Automatic recognition is especially challenging when two signs share most visual components. A model may appear accurate on unrelated classes while failing to discriminate meaningful minimal-pair differences.",
        "es": "El reconocimiento automático resulta particularmente complejo cuando dos señas comparten gran parte de sus componentes visuales. Un modelo puede obtener buena exactitud general y aun así confundirse ante diferencias pequeñas pero lingüísticamente relevantes."
      },
      "method": {
        "en": "Analyze dynamic minimal pairs in a multimodal RGB-D setting, study body and hand configurations and temporal trajectories, and compare complementary visual representations. SIGNO-PERU-ISO documents 18,179 sequences from 17 signers across six semantic categories; data access is by request and agreement.",
        "es": "Analizar pares mínimos dinámicos con captura RGB-D multimodal; estudiar configuraciones corporales y manuales y sus trayectorias temporales; y comparar representaciones visuales complementarias. SIGNO-PERU-ISO documenta 18 179 secuencias de 17 signantes en seis categorías semánticas; su acceso requiere solicitud y acuerdo."
      },
      "result": {
        "en": "A documented SIGNO-PERU-ISO dataset and Zenodo data publication provide a resource for evaluating fine-grained LSP recognition. The related SIGNO-PERU-FER publication addresses facial expressions separately; its recordings are not part of ISO.",
        "es": "El dataset SIGNO-PERU-ISO y su publicación de datos en Zenodo constituyen un recurso para evaluar el reconocimiento fino de LSP. La publicación relacionada SIGNO-PERU-FER estudia expresiones faciales por separado; sus grabaciones no forman parte de ISO."
      },
      "team": "Lourdes Ramírez Cerna; Paulo Nazareno Sampaio Maia",
      "links": [
        [
          "Dataset (request access)",
          "https://zenodo.org/records/18990737"
        ],
        [
          "CRIS",
          "https://cris.ulima.edu.pe/es/projects/signoper%C3%BA-estudio-de-pares-m%C3%ADnimos-en-el-reconocimiento-de-palabr/"
        ]
      ],
      "papers": [
        "iso"
      ],
      "line": "signoperu",
      "gallery": [
        {
          "image": "signoperu-iso-signer.webp",
          "label": {
            "en": "Peruvian Sign Language signing sample provided for SIGNO-PERU-ISO.",
            "es": "Muestra de seña en Lengua de Señas Peruana proporcionada para SIGNO-PERU-ISO."
          }
        },
        {
          "image": "signoperu-iso-overview.svg",
          "label": {
            "en": "Technical overview of the SIGNO-PERU-ISO dataset.",
            "es": "Resumen técnico del dataset SIGNO-PERU-ISO."
          }
        },
        {
          "image": "signoperu-fer-modalities.webp",
          "label": {
            "en": "Figure from the related SIGNO-PERU-FER research publication (a separate dataset).",
            "es": "Figura de la investigación relacionada SIGNO-PERU-FER (un dataset diferente)."
          }
        }
      ]
    },
    {
      "id": "signovr",
      "year": "2026–2027",
      "category": "Immersive learning",
      "stage": 3,
      "role": "PI",
      "image": "signoperu-vr.webp",
      "title": {
        "en": "SignoPeruVR · Immersive learning",
        "es": "SignoPerúVR · aprendizaje inmersivo"
      },
      "summary": {
        "en": "SignoPeruVR develops an immersive serious game to learn everyday concepts in Peruvian Sign Language. Designed with Unity and virtual-reality interaction, it combines guided alphabet, number and vocabulary activities with automatic sign recognition and planned feedback on users' signing performance.",
        "es": "SignoPeruVR desarrolla un juego serio inmersivo para aprender conceptos cotidianos de la Lengua de Señas Peruana. Diseñado en Unity con interacción de realidad virtual, combina actividades guiadas de alfabeto, números y vocabulario con reconocimiento automático de señas y retroalimentación prevista sobre la ejecución de los gestos."
      },
      "problem": {
        "en": "LSP learning opportunities are constrained by limited accessible practice settings and immediate feedback. Immersive environments could support repeated practice but require evidence of both usability and learning.",
        "es": "Las oportunidades de aprender LSP están limitadas por la disponibilidad de espacios de práctica accesibles y retroalimentación inmediata. Los entornos inmersivos pueden facilitar la repetición, pero requieren evidencia tanto de usabilidad como de aprendizaje."
      },
      "method": {
        "en": "Development of VR scenes, interactive missions and hand-tracking interactions in Unity; integration of AI-based signing recognition; and a planned pilot with adults without prior LSP knowledge, using usability measures and pretest/posttest learning assessments.",
        "es": "Desarrollo de escenarios de realidad virtual, misiones interactivas y seguimiento de manos en Unity; integración de reconocimiento de señas mediante IA; y diseño de una prueba piloto con adultos sin conocimientos previos de LSP, con instrumentos de usabilidad y evaluaciones de aprendizaje pretest/postest."
      },
      "result": {
        "en": "The project is active (2026–2027). The immersive application and pilot-evaluation protocol are in development; learning gains and usability scores must await empirical evaluation.",
        "es": "Proyecto activo (2026–2027). Se encuentran en desarrollo la aplicación inmersiva y su evaluación piloto; aún no corresponde atribuirle mejoras de aprendizaje ni puntuaciones de usabilidad sin resultados empíricos."
      },
      "team": "Lourdes Ramírez Cerna",
      "links": [
        [
          "CRIS",
          "https://cris.ulima.edu.pe/es/projects/signoperuvr-juego-serio-en-realidad-virtual-para-el-aprendizaje-d/"
        ]
      ],
      "papers": [],
      "line": "signoperu"
    },
    {
      "id": "lspfer",
      "year": "2026",
      "category": "Peruvian Sign Language",
      "role": "Author",
      "image": "fig-fer.webp",
      "title": {
        "en": "Facial expressions in Peruvian Sign Language",
        "es": "Expresiones faciales en Lengua de Señas Peruana"
      },
      "summary": {
        "en": "SIGNO-PERU-FER addresses the non-manual dimension of Peruvian Sign Language: visuo-gestural facial expressions that convey grammatical and semantic information. Its Scientific Data descriptor documents 1,256 synchronized RGB-D recordings of 14 expression categories from 16 native signers, including three-dimensional facial landmarks.",
        "es": "SIGNO-PERU-FER aborda los componentes no manuales de la Lengua de Señas Peruana: expresiones faciales visogestuales que transmiten información gramatical y semántica. Su artículo de datos en Scientific Data documenta 1256 registros RGB-D sincronizados de 14 categorías, realizados por 16 signantes nativos, junto con landmarks faciales tridimensionales."
      },
      "problem": {
        "en": "Manual-only sign recognition overlooks expressions of the face, eyebrows, mouth and head that can change an utterance's meaning. The lack of annotated, synchronized LSP facial datasets limits reproducible research.",
        "es": "El reconocimiento centrado solo en las manos omite expresiones del rostro, cejas, boca y cabeza que pueden modificar el significado de una emisión. La escasez de datasets faciales de LSP anotados y sincronizados limita la investigación reproducible."
      },
      "method": {
        "en": "Recording with Azure Kinect DK under controlled lighting: RGB at 1920 × 1080 and 30 fps, depth at 512 × 512, and 468 three-dimensional facial landmarks. The protocol covers 14 visually challenging expression classes and includes baseline recognition experiments.",
        "es": "Registro con Azure Kinect DK en iluminación controlada: RGB de 1920 × 1080 a 30 fps, profundidad de 512 × 512 y 468 landmarks faciales tridimensionales. El protocolo incluye 14 clases de expresiones visualmente desafiantes y experimentos de reconocimiento de referencia."
      },
      "result": {
        "en": "A peer-reviewed Scientific Data data descriptor documents the multimodal collection, acquisition protocol, validation and benchmark design. It supports studies of visually similar facial expressions without claiming to solve full LSP translation.",
        "es": "Un artículo de datos revisado por pares en Scientific Data documenta la colección multimodal, el protocolo de captura, la validación y los experimentos de referencia. Permite estudiar expresiones faciales similares sin afirmar que resuelve la traducción completa de LSP."
      },
      "team": "Lourdes Ramírez Cerna; Paulo Nazareno Maia Sampaio; Diego Risco Cosavalente; Luis Angel Pumayucra Chauca; Cesar Martin Lujan Cabeza",
      "links": [
        [
          "Scientific paper",
          "https://doi.org/10.1038/s41597-026-08269-x"
        ]
      ],
      "papers": [
        "fer"
      ],
      "group": "institutional",
      "line": "signoperu"
    },
    {
      "id": "libras",
      "year": "2021",
      "category": "Doctoral research · UFOP",
      "role": "Author",
      "image": "libras-ufop-minimal-pairs.webp",
      "group": "doctoral",
      "title": {
        "en": "LIBRAS-UFOP: minimal-pair sign-language dataset",
        "es": "LIBRAS-UFOP: dataset de señas basadas en pares mínimos"
      },
      "summary": {
        "en": "LIBRAS-UFOP provides a multimodal benchmark for discriminating minimal pairs in Brazilian Sign Language, where small differences in articulation distinguish otherwise similar signs. Its 56 sign classes were captured with Microsoft Kinect from five participants, yielding 3,040 RGB, depth and skeletal sequences.",
        "es": "LIBRAS-UFOP constituye un conjunto de referencia multimodal para distinguir pares mínimos de la Lengua de Señas Brasileña, en los que pequeñas diferencias articulatorias separan señas visualmente similares. Sus 56 clases se capturaron con Microsoft Kinect en cinco participantes, obteniendo 3040 secuencias RGB, profundidad y esqueleto."
      },
      "problem": {
        "en": "Many recognition benchmarks emphasize clearly distinct signs, masking the difficulty of fine-grained visual discrimination and reducing insight into errors between semantically different minimal pairs.",
        "es": "Numerosos conjuntos de reconocimiento priorizan señas fácilmente distinguibles, ocultando la dificultad de la discriminación visual fina y las confusiones entre pares mínimos con significados diferentes."
      },
      "method": {
        "en": "Design and expert validation of 56 signs arranged in four minimal-pair groups; synchronized acquisition of RGB video, depth and skeletal coordinates with Microsoft Kinect; evaluation of multimodal spatiotemporal representations and classification baselines.",
        "es": "Diseño y validación por especialistas de 56 señas organizadas en cuatro grupos de pares mínimos; captura sincronizada de video RGB, profundidad y coordenadas esqueléticas con Microsoft Kinect; evaluación de representaciones espaciotemporales multimodales y modelos de referencia."
      },
      "result": {
        "en": "The published Expert Systems with Applications study documents 3,040 sequences from five participants and reports 74.25% recognition in its baseline setting, emphasizing the difficulty of distinguishing visually related signs.",
        "es": "El estudio publicado en Expert Systems with Applications documenta 3040 secuencias de cinco participantes y reporta 74,25 % de reconocimiento en su escenario de referencia, destacando la dificultad de distinguir señas visualmente relacionadas."
      },
      "team": "Lourdes Ramírez Cerna; Edwin Escobedo Cárdenas; Dayse García Miranda; David Menotti; Guillermo Cámara-Chávez",
      "links": [
        [
          "Dataset record (Zenodo)",
          "https://zenodo.org/records/23350484"
        ],
        [
          "Published paper",
          "https://doi.org/10.1016/j.eswa.2020.114179"
        ]
      ],
      "papers": [
        "libras"
      ],
      "line": "libras",
      "gallery": [
        {
          "image": "libras-ufop-rgb-depth-skeleton.webp",
          "label": {
            "en": "Multimodal samples (RGB, depth and skeleton). Figure 4, doctoral research article.",
            "es": "Muestras multimodales (RGB, profundidad y esqueleto). Figura 4 del artículo doctoral."
          }
        },
        {
          "image": "libras-ufop-minimal-pairs.webp",
          "label": {
            "en": "Examples of minimal pairs in Brazilian Sign Language. Figure 5, doctoral research article.",
            "es": "Ejemplos de pares mínimos en Libras. Figura 5 del artículo doctoral."
          }
        }
      ]
    },
    {
      "id": "bsl",
      "year": "2025",
      "category": "Brazilian Sign Language · Collaboration",
      "role": "Author",
      "image": "facial-bsl-expressions.webp",
      "group": "collaborative",
      "title": {
        "en": "Facial expression recognition in Brazilian Sign Language",
        "es": "Reconocimiento de expresiones faciales en lengua de señas brasileña"
      },
      "summary": {
        "en": "This research examines facial expressions as non-manual linguistic cues in Brazilian Sign Language using the Facial-BSL RGB-D dataset. A two-stream Swin Transformer integrates facial appearance from RGB images with motion-texture representations to characterize expression dynamics and evaluate recognition performance.",
        "es": "Esta investigación estudia las expresiones faciales como señales lingüísticas no manuales de la Lengua de Señas Brasileña mediante el dataset RGB-D Facial-BSL. Un Swin Transformer de dos flujos integra apariencia facial en imágenes RGB y representaciones de textura de movimiento para caracterizar la dinámica expresiva y evaluar el reconocimiento."
      },
      "problem": {
        "en": "Recognition systems often neglect facial expression or treat it as generic emotion, despite its contribution to grammar and meaning in signed communication.",
        "es": "Los sistemas de reconocimiento frecuentemente omiten la expresión facial o la reducen a emociones genéricas, pese a su función gramatical y semántica en la comunicación signada."
      },
      "method": {
        "en": "Construction of Facial-BSL with eight expression categories; extraction of RGB facial appearance and dynamic motion-texture maps; integration in a two-stream Swin Transformer and comparative testing against additional facial-expression datasets.",
        "es": "Construcción de Facial-BSL con ocho categorías de expresiones; extracción de apariencia facial RGB y mapas dinámicos de textura de movimiento; integración mediante un Swin Transformer de dos flujos y pruebas comparativas con otros conjuntos de expresiones faciales."
      },
      "result": {
        "en": "The published study evaluates its multimodal architecture on Facial-BSL and three external benchmarks. The dataset is independently recorded on Zenodo; it is distinct from the Peruvian SIGNO-PERU-FER collection.",
        "es": "El estudio publicado evalúa su arquitectura multimodal en Facial-BSL y tres conjuntos externos. El dataset dispone de una ficha independiente en Zenodo y es distinto de la colección peruana SIGNO-PERU-FER."
      },
      "team": "Lourdes Ramírez Cerna; José Rodríguez Melquiades; Edwin Jonathan Escobedo Cárdenas; Guillermo Cámara-Chávez; Dayse García Miranda",
      "links": [
        [
          "Facial-BSL dataset record",
          "https://zenodo.org/records/22865192"
        ],
        [
          "Published paper",
          "https://doi.org/10.13053/CyS-29-2-5119"
        ]
      ],
      "papers": [
        "fer2"
      ],
      "line": "libras"
    },
    {
      "id": "stem",
      "year": "2025–2026",
      "category": "Educational technology",
      "role": "CoI",
      "image": "stemplay-home.webp",
      "title": {
        "en": "STEM_Play · Career exploration",
        "es": "STEM_Play · orientación vocacional"
      },
      "summary": {
        "en": "STEM_PLAY is a mission-based serious game that lets secondary students explore nine STEM-related career tracks through contextualized professional challenges. Grounded in SCCT, ARCS and MDA, it was evaluated with 339 students aged 13–17 from seven schools in Lima, Trujillo and Piura using pre/post perception measures and game-experience questionnaires.",
        "es": "STEM_PLAY es un juego serio basado en misiones que permite a estudiantes de secundaria explorar nueve trayectorias profesionales relacionadas con STEM mediante desafíos contextualizados. Fundamentado en SCCT, ARCS y MDA, se evaluó con 339 estudiantes de 13 a 17 años de siete colegios de Lima, Trujillo y Piura mediante mediciones pre/post de percepción vocacional y cuestionarios de experiencia de juego."
      },
      "problem": {
        "en": "Gender stereotypes, limited vocational guidance and little first-hand knowledge of professional activities may influence adolescents' perceptions of STEM careers before they choose postsecondary studies.",
        "es": "Los estereotipos de género, la orientación vocacional limitada y el escaso conocimiento de las actividades profesionales pueden influir en la percepción adolescente sobre carreras STEM antes de elegir estudios superiores."
      },
      "method": {
        "en": "Design of nine career-based gameplay tracks using Social Cognitive Career Theory, ARCS motivation and Mechanics–Dynamics–Aesthetics. Following a 40-minute intervention, 339 students completed career-perception pre/post measures and an educational-game user-experience instrument, with expert content validation and nonparametric analysis.",
        "es": "Diseño de nueve recorridos profesionales según la teoría sociocognitiva de carrera (SCCT), el modelo motivacional ARCS y Mechanics–Dynamics–Aesthetics. Tras una intervención de 40 minutos, 339 estudiantes respondieron mediciones pre/post de percepción vocacional e instrumentos de experiencia de juego, con validación de contenido por expertos y análisis no paramétrico."
      },
      "result": {
        "en": "Mean overall career-perception scores increased from 65.49 to 66.54 (Wilcoxon p = .011), but the effect was small and individual responses heterogeneous. The evidence supports feasibility for career exploration, not a causal claim of sustained changes in career choice.",
        "es": "La percepción vocacional global pasó de 65,49 a 66,54 puntos (Wilcoxon p = 0,011), con efecto pequeño y respuestas individuales heterogéneas. La evidencia respalda su uso para exploración vocacional, pero no permite atribuir cambios causales sostenidos en la elección de carrera."
      },
      "team": "Lourdes Ramírez Cerna; Rosa Flor Gómez Risco; Madeleine Gillian Rabines Floreano; Diego Renato Risco Cosavalente",
      "links": [
        [
          "Open STEM_Play",
          "https://stemplay.ulima.edu.pe/stem/"
        ],
        [
          "CRIS",
          "https://cris.ulima.edu.pe/es/projects/stemplay-juego-serio-para-estudiantes-de-educaci%C3%B3n-secundaria-par/"
        ]
      ],
      "papers": [],
      "line": "stem"
    },
    {
      "id": "thermal",
      "year": "2026-2027",
      "category": "Medical AI",
      "role": "CoI",
      "image": "breast-thermography-app.webp",
      "title": {
        "en": "AI-assisted breast thermography",
        "es": "Termografía mamaria asistida por IA"
      },
      "summary": {
        "en": "This ongoing project develops a mobile research prototype for complementary analysis of breast thermograms using deep learning. It investigates thermal-image preprocessing, breast region-of-interest segmentation, benign/malignant classification, explainability and multiview exploration, while treating external validation and clinical applicability as separate research questions.",
        "es": "Este proyecto en ejecución desarrolla un prototipo móvil de investigación para analizar termografías mamarias mediante aprendizaje profundo. Investiga preprocesamiento térmico, segmentación de regiones de interés, clasificación benigno/maligno, explicabilidad y exploración multivista, diferenciando la validación externa de cualquier posible aplicabilidad clínica."
      },
      "problem": {
        "en": "Thermograms present variation in acquisition conditions, body contours, temperature distribution and data sources. A model with promising internal scores may still generalize poorly to independent populations.",
        "es": "Las termografías presentan variaciones de adquisición, contornos corporales, distribución de temperaturas y fuentes de datos. Un modelo con buen desempeño interno puede generalizar deficientemente a poblaciones independientes."
      },
      "method": {
        "en": "Analysis of public breast-thermography datasets with patient-disjoint splits; preprocessing and ROI comparisons; CNN training and image/patient-level evaluation; exploratory model explanations and mobile deployment. Separate tests examine robustness to external data and multiview availability.",
        "es": "Análisis de datasets públicos de termografía mamaria con particiones independientes por paciente; comparación de preprocesamiento y regiones de interés; entrenamiento de CNN y evaluación por imagen y paciente; explicaciones de modelos y despliegue móvil exploratorio. Se estudia por separado la robustez externa y la disponibilidad de múltiples vistas."
      },
      "result": {
        "en": "A functional experimental mobile interface and comparative model-evaluation pipeline have been developed. Internal breast-thermography findings are research-stage and do not establish diagnostic validity or reliable performance across external clinical datasets.",
        "es": "Se dispone de una interfaz móvil experimental funcional y de un pipeline comparativo de evaluación de modelos. Los resultados internos de termografía son preliminares y no acreditan validez diagnóstica ni desempeño confiable en conjuntos clínicos externos."
      },
      "team": "Lourdes Ramírez Cerna; Luis Ángel Pumayucra Chauca; external collaborators",
      "links": [
        [
          "CRIS",
          "https://cris.ulima.edu.pe/es/projects/prototipo-m%C3%B3vil-para-la-clasificaci%C3%B3n-de-lesiones-mamarias-en-ter/"
        ]
      ],
      "papers": [],
      "line": "other",
      "group": "institutional",
      "gallery": [
        {
          "image": "breast-thermography-app.webp",
          "label": {
            "en": "Mobile prototype: model attribution map and reconstructed views.",
            "es": "Prototipo móvil: mapa de atribución del modelo y vistas reconstruidas."
          }
        },
        {
          "image": "breast-thermography-results.webp",
          "label": {
            "en": "Mobile prototype: processing and case-review interface.",
            "es": "Prototipo móvil: interfaz de procesamiento y revisión de casos."
          }
        }
      ]
    },
    {
      "id": "bats",
      "year": "2025-2026",
      "category": "Environmental AI",
      "role": "PI",
      "image": "desmodus-app.webp",
      "title": {
        "en": "Thermal vision for wildlife monitoring",
        "es": "Visión térmica para monitoreo de fauna"
      },
      "summary": {
        "en": "The project develops computer-vision support for identifying and monitoring the vampire bat Desmodus rotundus in livestock environments. Its proposed workflow combines a species image collection, low-light and thermal experiments, model comparison and a mobile application linked to a thermal camera for field observation.",
        "es": "El proyecto desarrolla herramientas de visión computacional para identificar y monitorear al murciélago hematófago Desmodus rotundus en entornos ganaderos. Su flujo de trabajo contempla una colección de imágenes de la especie, experimentos con poca iluminación y termografía, comparación de modelos y una aplicación móvil vinculada a una cámara térmica para observación en campo."
      },
      "problem": {
        "en": "Identifying D. rotundus is challenging in darkness and with conventional field procedures. Reliable visual differentiation matters for monitoring the livestock-related impact of the species.",
        "es": "La identificación de D. rotundus es difícil en condiciones de oscuridad y mediante procedimientos convencionales de campo. La diferenciación visual confiable es relevante para el monitoreo de su impacto en el ganado."
      },
      "method": {
        "en": "Five-stage research plan: construction of a bat-image dataset; selection of vision architectures suited to low-light thermal data; training and comparison of models; mobile application integrated with a support thermal camera; and performance evaluation.",
        "es": "Plan de investigación en cinco etapas: construcción de un dataset de murciélagos; selección de arquitecturas para imágenes térmicas de baja iluminación; entrenamiento y comparación de modelos; integración de aplicación móvil con cámara térmica de apoyo; y evaluación del rendimiento."
      },
      "result": {
        "en": "CRIS records the project as completed in March 2026. A mobile prototype is presented, but numerical recognition benchmarks should not be asserted without an accompanying technical report.",
        "es": "CRIS registra el proyecto como finalizado en marzo de 2026. Se presenta un prototipo móvil, pero no se atribuyen métricas de reconocimiento que no estén respaldadas por un informe técnico."
      },
      "team": "Fabrizio Sebastian Sioux Romero Salas; Jesu Francesco Amoretti Herrera",
      "links": [
        [
          "CRIS",
          "https://cris.ulima.edu.pe/es/projects/desarrollo-de-un-aplicativo-m%C3%B3vil-de-an%C3%A1lisis-de-im%C3%A1genes-t%C3%A9rmica/"
        ]
      ],
      "papers": [],
      "line": "other",
      "group": "institutional"
    },
    {
      "id": "chintex",
      "year": "2026",
      "category": "Research output",
      "role": "Coauthor",
      "image": "fig-textile.webp",
      "title": {
        "en": "CHINTEXDB-PERU28 · Textile heritage",
        "es": "CHINTEXDB-PERU28 · patrimonio textil"
      },
      "summary": {
        "en": "CHINTEXDB-PERU28 is a curated visual dataset documenting handwoven textile iconographies from Chinchero, Cusco. Its 1,358 images represent 28 classes of Andean textile motifs collected during fieldwork with local artisan communities, combining cultural-heritage documentation and reproducible image-recognition research.",
        "es": "CHINTEXDB-PERU28 es un conjunto visual documentado de iconografías textiles artesanales de Chinchero, Cusco. Reúne 1358 imágenes de 28 clases de motivos andinos obtenidas en trabajo de campo con comunidades artesanas, vinculando la documentación del patrimonio cultural con la investigación reproducible en reconocimiento de imágenes."
      },
      "problem": {
        "en": "Computer-vision research has few curated resources representing the symbolic motifs, textures and visual variability of traditional Andean weaving. This limits reproducible work on locally relevant cultural imagery.",
        "es": "La investigación en visión computacional dispone de pocos recursos curados que representen motivos simbólicos, texturas y variabilidad visual del tejido tradicional andino, lo que limita los estudios reproducibles sobre patrimonio cultural local."
      },
      "method": {
        "en": "Photographic acquisition in textile production centers in Chinchero, organization and annotation of 1,358 images into 28 motif classes, quality review and documentation of acquisition conditions, followed by distribution through Mendeley Data.",
        "es": "Captura fotográfica en centros de producción textil de Chinchero, organización y anotación de 1358 imágenes en 28 clases de motivos, revisión de calidad y documentación de las condiciones de adquisición, con publicación en Mendeley Data."
      },
      "result": {
        "en": "The dataset is publicly available through Mendeley Data and described in a 2026 Data in Brief article (volume 66, article 112835). The contribution is an annotated heritage-image resource rather than a claim of a deployed cultural-recognition product.",
        "es": "El conjunto está disponible públicamente en Mendeley Data y documentado en un artículo de Data in Brief de 2026 (volumen 66, artículo 112835). Su contribución principal es un recurso anotado de imágenes patrimoniales, no un producto desplegado de reconocimiento cultural."
      },
      "team": "Gabriela Farfan Enriquez; Ruben Ancco Peralta; Edwin Jonathan Escobedo Cárdenas; Hernán Nina Hanco; Lauro Enciso Rodas; Carlos Fernando Montoya Cubas",
      "links": [
        [
          "Open dataset (Mendeley Data)",
          "https://data.mendeley.com/datasets/7vb89k93jn/1"
        ],
        [
          "Data article",
          "https://doi.org/10.1016/j.dib.2026.112835"
        ]
      ],
      "papers": [
        "chintex"
      ],
      "group": "collaborative",
      "line": "other"
    },
    {
      "id": "perufood",
      "year": "2025",
      "category": "Research with students",
      "role": "Coauthor",
      "image": "fig-food.webp",
      "title": {
        "en": "PeruFoodNet · Peruvian food dataset",
        "es": "PeruFoodNet · dataset de gastronomía peruana"
      },
      "summary": {
        "en": "PeruFoodNet addresses the lack of representative visual resources for Peruvian gastronomy. It assembles 4,000 labeled photographs of 40 traditional dishes, with 100 images per class, and associates the categories with ingredient information relevant to research on potential food allergens.",
        "es": "PeruFoodNet aborda la escasez de recursos visuales representativos de la gastronomía peruana. Reúne 4000 fotografías etiquetadas de 40 platos tradicionales, con 100 imágenes por clase, y vincula las categorías con información de ingredientes pertinente para investigar posibles alérgenos alimentarios."
      },
      "problem": {
        "en": "Widely used food-image datasets underrepresent traditional Peruvian dishes, making it difficult to benchmark models across local presentations, ingredients and visual appearances.",
        "es": "Los conjuntos de imágenes de alimentos más utilizados representan poco a los platos tradicionales peruanos, lo que dificulta evaluar modelos ante sus presentaciones, ingredientes y apariencias visuales."
      },
      "method": {
        "en": "Capture and curation of a balanced dataset with 40 dish categories and 100 photographs per category, followed by image labeling and documentation of potentially allergenic ingredients based on recipe information.",
        "es": "Captura y curación de un conjunto equilibrado de 40 categorías de platos y 100 fotografías por categoría, con etiquetado de imágenes y documentación de ingredientes potencialmente alergénicos a partir de información de recetas."
      },
      "result": {
        "en": "The 4,000-image dataset is accessible on Mendeley Data and documented in a 2025 Data in Brief publication. It provides a reproducible resource for culinary image classification and food-ingredient research without implying that an allergen detector was clinically validated.",
        "es": "El conjunto de 4000 imágenes está disponible en Mendeley Data y documentado en una publicación de Data in Brief de 2025. Ofrece un recurso reproducible para clasificación de comida e investigación sobre ingredientes sin afirmar que se haya validado clínicamente un detector de alérgenos."
      },
      "team": "María Franchesca Arzola Gutierrez; Edgar Alexander Canchari Muñoz; Edwin Jonathan Escobedo Cárdenas",
      "links": [
        [
          "Open dataset (Mendeley Data)",
          "https://data.mendeley.com/datasets/hxhbbm497d/3"
        ],
        [
          "Data article",
          "https://doi.org/10.1016/j.dib.2025.111604"
        ]
      ],
      "papers": [
        "food"
      ],
      "group": "student",
      "line": "students"
    },
    {
      "id": "lowlight",
      "year": "2026",
      "category": "Research with students",
      "role": "Coauthor",
      "image": "fig-lowlight.webp",
      "group": "student",
      "title": {
        "en": "Low-light image enhancement and mobile human detection",
        "es": "Mejora de imágenes con baja iluminación y detección de personas en móviles"
      },
      "summary": {
        "en": "The study proposes a generative image-enhancement pipeline for scenes with insufficient illumination, combining a GAN-based restoration model with adaptive ratio-log processing. It also measures whether enhanced images improve downstream YOLO-based person detection and explores Android deployment.",
        "es": "El estudio propone un pipeline generativo para mejorar escenas con iluminación insuficiente, combinando un modelo de restauración basado en GAN con procesamiento adaptativo ratio-log. También analiza si las imágenes mejoradas favorecen la detección posterior de personas con YOLO y explora su implementación en Android."
      },
      "problem": {
        "en": "Poor illumination removes texture and contrast needed by object detectors; visual enhancement must be evaluated not only with image-quality indices but also through its effect on the intended recognition task.",
        "es": "La poca iluminación reduce las texturas y el contraste necesarios para detectar objetos; por ello, la mejora visual debe evaluarse tanto con índices de calidad como por sus efectos en la tarea posterior de reconocimiento."
      },
      "method": {
        "en": "Development of an encoder–decoder GAN using residual components and adaptive ratio-log illumination fusion; benchmarking of restored images on LOLv1 with PSNR and SSIM; testing YOLO person-detection confidence before and after enhancement; and mobile-app integration.",
        "es": "Desarrollo de una GAN codificador–decodificador con componentes residuales y fusión adaptativa ratio-log de iluminación; evaluación de imágenes restauradas en LOLv1 mediante PSNR y SSIM; comparación de confianza de detección de personas con YOLO antes y después de la mejora; e integración móvil."
      },
      "result": {
        "en": "In the reported experiments, the method achieved PSNR 25.15 dB and SSIM 0.909 on LOLv1. Mean YOLO detection confidence in the evaluated scenarios increased from 0.44 to 0.78, illustrating benefits for downstream detection under those conditions.",
        "es": "En los experimentos reportados, el método obtuvo PSNR de 25,15 dB y SSIM de 0,909 en LOLv1. La confianza media de detección con YOLO en los escenarios evaluados aumentó de 0,44 a 0,78, mostrando mejoras en la detección bajo esas condiciones."
      },
      "team": "Sebastián Enrique Camayo Ramos; Edwin Jonathan Escobedo Cárdenas",
      "links": [
        [
          "Code (GitHub)",
          "https://github.com/Seboot2002/image-enhancement-low-light-gan"
        ]
      ],
      "papers": [
        "lowlight"
      ],
      "line": "students"
    },
    {
      "id": "taekwondo",
      "year": "2026",
      "category": "Research with students",
      "role": "Coauthor",
      "image": "fig-sports.webp",
      "group": "student",
      "title": {
        "en": "Predicting Taekwondo match outcomes",
        "es": "Predicción de resultados de combates de taekwondo"
      },
      "summary": {
        "en": "This study explores the prediction of taekwondo match results using competition records from Peru in 2023–2024. It compares eight machine-learning approaches in two formulations—sequential competition history and direct head-to-head encounters—to assess how the structure of historical evidence affects forecasts.",
        "es": "El estudio investiga la predicción de resultados de combates de taekwondo utilizando registros competitivos del Perú de 2023 y 2024. Compara ocho métodos de aprendizaje automático en dos enfoques —historial secuencial de competencias y enfrentamientos directos— para analizar cómo la estructura de los antecedentes influye en el pronóstico."
      },
      "problem": {
        "en": "Predicting outcomes in combat sports is difficult because competitive records are sparse or uneven and a fighter's general history may not describe a specific opponent matchup.",
        "es": "Predecir resultados en deportes de combate es complejo porque los antecedentes son dispersos o desiguales y el historial general de un deportista puede no representar adecuadamente un enfrentamiento particular."
      },
      "method": {
        "en": "Compilation and preprocessing of federation competition histories, construction of sequential and head-to-head predictive datasets, comparison of eight machine-learning models and evaluation using F1-scores on the respective prediction tasks.",
        "es": "Recopilación y preprocesamiento de historiales competitivos de la federación, construcción de datasets predictivos secuenciales y de enfrentamientos directos, comparación de ocho modelos de aprendizaje automático y evaluación del F1 en cada tarea."
      },
      "result": {
        "en": "LightGBM obtained 84% F1 on the sequence formulation, whereas XGBoost reached 75% F1 on head-to-head prediction in the reported study. These findings are specific to the curated historical data and evaluation protocol.",
        "es": "LightGBM obtuvo F1 de 84 % en el enfoque secuencial, mientras que XGBoost alcanzó F1 de 75 % en la predicción de enfrentamientos directos. Los resultados corresponden a los registros históricos curados y al protocolo de evaluación del estudio."
      },
      "team": "Daphne Solange Velásquez Chávez; Ximena Nataly Utani Bendezu; Edwin Jonathan Escobedo Cárdenas",
      "links": [],
      "papers": [
        "taekwondo"
      ],
      "line": "students"
    },
    {
      "id": "contact",
      "year": "2026",
      "category": "Research with students",
      "role": "Coauthor",
      "image": "contact-method.webp",
      "group": "student",
      "title": {
        "en": "Customer contact-channel recommendation",
        "es": "Recomendación de canales de contacto con clientes"
      },
      "summary": {
        "en": "Research on recommending communication channels to prospective customers through audience segmentation and hybrid machine-learning models. Using a third-party survey dataset, the study compares K-means with self-organizing maps, K-means with XGBoost and Gaussian mixtures with XGBoost, finding distinct Instagram, Pinterest and Telegram usage patterns across groups.",
        "es": "Investigación sobre la recomendación de canales de comunicación para clientes potenciales mediante segmentación de audiencias y modelos híbridos de aprendizaje automático. Con datos de encuestas de terceros, compara K-means con mapas autoorganizados, K-means con XGBoost y mezclas gaussianas con XGBoost, identificando diferencias entre grupos en el uso de Instagram, Pinterest y Telegram."
      },
      "problem": {
        "en": "A uniform digital-marketing strategy overlooks customer groups with distinct social-media habits and communication preferences, leading to poorly targeted outreach.",
        "es": "Una estrategia uniforme de marketing digital ignora grupos de clientes con hábitos y preferencias distintas en redes sociales, lo que dificulta dirigir adecuadamente las comunicaciones."
      },
      "method": {
        "en": "Survey-data preparation followed by a 70/30 train/test split; evaluation of three hybrid clustering/classification strategies (K-means–SOM, K-means–XGBoost and GMM–XGBoost), with segmentation indices and predictive performance metrics.",
        "es": "Preparación de datos de encuestas y partición 70/30 de entrenamiento/prueba; evaluación de tres estrategias híbridas de agrupamiento y clasificación (K-means–SOM, K-means–XGBoost y GMM–XGBoost), con índices de segmentación y métricas predictivas."
      },
      "result": {
        "en": "GMM–XGBoost reported the strongest recall (0.7727) with silhouette coefficient 0.385. Usage patterns varied by segment, suggesting that educational and commercial outreach should account for audience characteristics rather than apply a single channel universally.",
        "es": "GMM–XGBoost reportó el mejor recall (0,7727) con coeficiente de silueta de 0,385. Los patrones de uso variaron entre segmentos, por lo que las estrategias de comunicación deben considerar las características de cada audiencia en lugar de aplicar un canal único."
      },
      "team": "Natalia Urquizo; Lía Sandoval; Guillermo Dávila; Edwin Escobedo",
      "links": [
        [
          "External Mendeley dataset",
          "https://data.mendeley.com/datasets/2s47yznh4k/1"
        ]
      ],
      "papers": [
        "channels"
      ],
      "line": "students",
      "gallery": [
        {
          "image": "contact-method.webp",
          "label": {
            "en": "Five-stage methodological procedure (Figure 1)",
            "es": "Procedimiento metodológico en cinco etapas (Figura 1)"
          }
        },
        {
          "image": "contact-clusters.webp",
          "label": {
            "en": "Cluster visualization (Figure 5)",
            "es": "Visualización de los segmentos (Figura 5)"
          }
        }
      ]
    },
    {
      "id": "phish",
      "year": "2025",
      "category": "Research with students",
      "role": "Coauthor",
      "image": "fig-phish.webp",
      "group": "student",
      "title": {
        "en": "PhishFind: real-time phishing detection",
        "es": "PhishFind: detección de phishing en tiempo real"
      },
      "summary": {
        "en": "PhishFind is a browser-oriented phishing warning prototype that classifies suspicious URLs and webpage indicators with machine learning. It combines the PhishingLong research dataset, assembled from sources including PhishTank and Majestic, with a REST-based service and an interface designed to explain risks while browsing.",
        "es": "PhishFind es un prototipo de advertencias contra phishing para navegadores que clasifica URL e indicadores de páginas sospechosas mediante aprendizaje automático. Integra el dataset de investigación PhishingLong, construido con fuentes como PhishTank y Majestic, un servicio REST y una interfaz orientada a explicar riesgos durante la navegación."
      },
      "problem": {
        "en": "Phishing sites imitate trusted services, while opaque security alerts can prevent users from understanding why a link is dangerous or how to respond.",
        "es": "Los sitios de phishing imitan servicios confiables, mientras que las alertas de seguridad poco transparentes dificultan comprender por qué un enlace es peligroso y cómo actuar."
      },
      "method": {
        "en": "Curate phishing and legitimate-site indicators from source datasets, generate URL/webpage features, compare classification algorithms and integrate the selected model into a REST service and browser-facing extension for timely warnings.",
        "es": "Curar indicadores de sitios legítimos y de phishing desde datasets de origen, generar variables de URL y páginas web, comparar clasificadores e integrar el modelo seleccionado en un servicio REST y una extensión para emitir advertencias oportunas."
      },
      "result": {
        "en": "Gradient Boosting achieved a reported F1-score of 97.34% on the study evaluation. The browser interface demonstrates a potential real-time application; no public download link for the complete PhishingLong collection has been verified.",
        "es": "Gradient Boosting alcanzó F1 reportado de 97,34 % en la evaluación del estudio. La interfaz del navegador demuestra una aplicación potencial en tiempo real; no se ha verificado un enlace de descarga pública de la colección PhishingLong completa."
      },
      "team": "Diego O. Mendoza Vega; Dylan O. Díaz Mercado; Edwin J. Escobedo Cárdenas",
      "links": [],
      "papers": [
        "phish"
      ],
      "line": "students"
    },
    {
      "id": "zoo",
      "year": "2025",
      "category": "Research with students",
      "role": "Coauthor",
      "image": "fig-zoo.webp",
      "group": "student",
      "title": {
        "en": "ZooSQL: interactive SQL learning",
        "es": "ZooSQL: aprendizaje interactivo de SQL"
      },
      "summary": {
        "en": "ZooSQL is an educational serious game designed to strengthen SQL, relational algebra and PL/SQL through progressive tasks rather than passive exercises. Its mechanics and feedback were developed following the MDA framework, and its evaluation combined MEEGA+ user-experience measures with before-and-after knowledge assessments.",
        "es": "ZooSQL es un juego serio educativo para fortalecer SQL, álgebra relacional y PL/SQL mediante desafíos progresivos en lugar de ejercicios pasivos. Sus mecánicas y retroalimentación se diseñaron con el marco MDA y su evaluación combinó medidas de experiencia de usuario MEEGA+ con pruebas de conocimiento antes y después."
      },
      "problem": {
        "en": "Students often struggle to transfer database theory into executable queries and to understand the feedback needed to correct errors in increasingly complex SQL tasks.",
        "es": "Los estudiantes suelen tener dificultades para convertir conceptos teóricos de bases de datos en consultas ejecutables y comprender la retroalimentación necesaria para corregir errores en tareas SQL de complejidad creciente."
      },
      "method": {
        "en": "Design gameplay challenges covering relational algebra and SQL/PLSQL, structure progression and feedback using Mechanics–Dynamics–Aesthetics, then evaluate learning change with pre/post tests and player experience with MEEGA+.",
        "es": "Diseñar desafíos de juego sobre álgebra relacional y SQL/PLSQL; organizar progresión y retroalimentación mediante Mechanics–Dynamics–Aesthetics; y evaluar cambios en conocimiento con pretest/postest y experiencia de juego con MEEGA+."
      },
      "result": {
        "en": "The study reported an average improvement of 3.35 correct answers, corresponding to 13.96%, between the knowledge assessments. The game provides an example of practice-oriented database instruction; further controlled evaluation would be needed to isolate its causal effect.",
        "es": "El estudio reportó una mejora promedio de 3,35 respuestas correctas, equivalente al 13,96 %, entre evaluaciones de conocimientos. El juego constituye una propuesta de enseñanza práctica de bases de datos; serían necesarias evaluaciones controladas adicionales para aislar su efecto causal."
      },
      "team": "Eduardo Patrick Miñan Panduro; Paolo Giuliano Zapata Albújar; José Jesús Valdivia Caballero; Edwin Escobedo Cárdenas",
      "links": [
        [
          "Play ZooSQL",
          "https://patrickmp201.itch.io/zoosql?secret=O7u4sXUXMzxj6jBXQKN3QldkE"
        ]
      ],
      "papers": [
        "zoo"
      ],
      "line": "students"
    },
    {
      "id": "fraud",
      "year": "2025",
      "category": "Research with students",
      "role": "Coauthor",
      "image": "fraud-confusion.webp",
      "group": "student",
      "title": {
        "en": "Credit card fraud detection using clickstream behavior",
        "es": "Detección de fraude con tarjetas mediante comportamiento de navegación"
      },
      "summary": {
        "en": "A controlled comparison tested whether clickstream-derived behavioral variables improve credit-card fraud detection beyond transaction data. XGBoost, CatBoost, LSTM and Random Forest were evaluated with imbalance handling and Bayesian tuning: transaction-only XGBoost yielded 94% accuracy and fraud F1 of 64%, whereas CatBoost with clickstream features reached 96% accuracy and fraud F1 of 78%.",
        "es": "Una comparación controlada evaluó si las variables conductuales derivadas de clickstream mejoran la detección de fraude con tarjetas frente al uso exclusivo de transacciones. Se estudiaron XGBoost, CatBoost, LSTM y Random Forest con manejo del desbalance y ajuste bayesiano: XGBoost logró 94 % de exactitud y F1 de fraude de 64 % solo con transacciones, frente al 96 % y F1 de 78 % de CatBoost al incorporar clickstream."
      },
      "problem": {
        "en": "Credit-card fraud is a rare-event classification problem; transactional patterns alone can miss behavioral signals embedded in the sequence of online interactions.",
        "es": "El fraude con tarjetas es un problema de clasificación con eventos poco frecuentes; las transacciones por sí solas pueden omitir señales conductuales presentes en la secuencia de interacciones digitales."
      },
      "method": {
        "en": "Two scenarios (transactional-only versus transactional plus clickstream), feature engineering, SMOTE-ENN to address class imbalance, standardized or encoded features as appropriate, K-fold validation and Bayesian hyperparameter search across XGBoost, CatBoost, LSTM and Random Forest.",
        "es": "Dos escenarios (solo transacciones frente a transacciones más clickstream), ingeniería de variables, SMOTE-ENN para el desbalance, normalización o codificación según el modelo, validación K-fold y optimización bayesiana de XGBoost, CatBoost, LSTM y Random Forest."
      },
      "result": {
        "en": "Scenario 1: XGBoost, 94% overall accuracy and 64% F1 for fraud. Scenario 2: CatBoost, 96% accuracy and 78% fraud F1. The result supports adding browsing behavior under this experimental protocol, not a proven improvement in every deployment.",
        "es": "Escenario 1: XGBoost con 94 % de exactitud y F1 de 64 % para fraude. Escenario 2: CatBoost con 96 % de exactitud y F1 de 78 % para fraude. El resultado respalda incorporar patrones de navegación en este protocolo, sin demostrar que la mejora se reproduzca en cualquier implementación."
      },
      "team": "Renzo Saucedo; Piero Inga; Edwin Escobedo",
      "links": [
        [
          "External Kaggle dataset",
          "https://www.kaggle.com/datasets/mohammadbolandraftar/my-dataset/data"
        ]
      ],
      "papers": [
        "fraud"
      ],
      "line": "students",
      "gallery": [
        {
          "image": "fraud-confusion.webp",
          "label": {
            "en": "CatBoost confusion matrix, clickstream-enhanced scenario (Figure 4)",
            "es": "Matriz de confusión de CatBoost con variables de navegación (Figura 4)"
          }
        },
        {
          "image": "fraud-features.webp",
          "label": {
            "en": "Feature importance for CatBoost (Figure 5)",
            "es": "Importancia de variables para CatBoost (Figura 5)"
          }
        }
      ]
    },
    {
      "id": "viz",
      "year": "2025",
      "category": "Research with students",
      "role": "Coauthor",
      "image": "viz-input-output.webp",
      "group": "student",
      "title": {
        "en": "Machine learning for tabular visualization recommendation",
        "es": "Recomendación de visualizaciones tabulares mediante aprendizaje automático"
      },
      "summary": {
        "en": "BiDA4Sales addresses automatic chart recommendation from both tabular sales data and the user's analytical intention expressed in natural language. BERT representations with bidirectional attention recommend one of seven chart types; a complementary LLaMA 3-70B Instruct step proposes columns. The study reports 90.24% F1 for chart selection and 79.08% correct column recommendations.",
        "es": "BiDA4Sales aborda la recomendación automática de gráficos a partir de datos tabulares de ventas y la intención analítica expresada en lenguaje natural. Representaciones BERT con atención bidireccional recomiendan entre siete tipos de gráficos; una etapa complementaria con LLaMA 3-70B Instruct propone las columnas. El estudio reporta F1 de 90,24 % en selección de gráficos y 79,08 % de recomendaciones correctas de columnas."
      },
      "problem": {
        "en": "Choosing a meaningful chart requires interpreting numerical/categorical table structure together with what the analyst is trying to ask. Data type alone does not determine the best representation.",
        "es": "Elegir un gráfico adecuado exige interpretar la estructura numérica o categórica de una tabla junto con la pregunta del analista. El tipo de dato por sí solo no determina la mejor visualización."
      },
      "method": {
        "en": "The ML4VIS pipeline encodes the table and a natural-language request, uses BERT and bidirectional attention to classify visualization types, then prompts LLaMA 3-70B Instruct for relevant columns. Experiments include 517 annotated visualization-intent examples.",
        "es": "El pipeline ML4VIS codifica la tabla y una consulta en lenguaje natural, utiliza BERT y atención bidireccional para clasificar el tipo de visualización y luego consulta LLaMA 3-70B Instruct para seleccionar columnas. Los experimentos incluyen 517 ejemplos anotados de intención de visualización."
      },
      "result": {
        "en": "BiDA4Sales achieved 90.24% F1 on visualization-type recommendation. Column recommendations from the LLM were correct in 79.08% of cases, supporting a two-stage approach rather than treating general-purpose text generation as the entire recommender.",
        "es": "BiDA4Sales alcanzó F1 de 90,24 % para recomendar el tipo de gráfico. El LLM seleccionó correctamente las columnas en el 79,08 % de los casos, lo que respalda una solución de dos etapas en lugar de delegar toda la recomendación a generación general de texto."
      },
      "team": "Jenis Arnold Alvarado Gonzales; Edwin Jonathan Escobedo Cárdenas",
      "links": [],
      "papers": [
        "viz"
      ],
      "line": "students",
      "gallery": [
        {
          "image": "viz-input-output.webp",
          "label": {
            "en": "Inputs and outputs of the proposed model (Figure 1)",
            "es": "Entradas y salidas del modelo propuesto (Figura 1)"
          }
        },
        {
          "image": "viz-model.webp",
          "label": {
            "en": "BiDA4Sales architecture (Figure 2)",
            "es": "Arquitectura BiDA4Sales (Figura 2)"
          }
        }
      ]
    },
    {
      "id": "captcha",
      "year": "2025",
      "category": "Research with students",
      "role": "Coauthor",
      "image": "captcha-adversarial.webp",
      "group": "student",
      "title": {
        "en": "Robustness of text CAPTCHAs against automated attacks",
        "es": "Robustez de CAPTCHAs de texto frente a ataques automatizados"
      },
      "summary": {
        "en": "This study examines how adversarial perturbations can harden text CAPTCHAs against automated deep-learning recognition while preserving human readability. FGSM, PGD and GAN-generated variants are evaluated against an OCR-CNN attack model; a human study explores the trade-off between recognition resistance and usability.",
        "es": "El estudio examina cómo las perturbaciones adversariales pueden aumentar la resistencia de CAPTCHA de texto al reconocimiento automatizado sin perder legibilidad humana. Variantes FGSM, PGD y generadas con GAN se evalúan frente a un modelo atacante OCR-CNN; una evaluación con personas analiza el equilibrio entre resistencia y usabilidad."
      },
      "problem": {
        "en": "OCR-based deep learning can automatically read many text CAPTCHAs; adding distortion may impede bots but can also make legitimate users unable to solve the challenge.",
        "es": "Los modelos de aprendizaje profundo basados en OCR pueden descifrar numerosos CAPTCHA de texto; incrementar las distorsiones puede dificultar a los bots, pero también perjudicar a quienes intentan resolverlos legítimamente."
      },
      "method": {
        "en": "Train and evaluate a baseline OCR-CNN, produce adversarial text images with FGSM and PGD and GAN-based variants, compare attack success under each condition, and obtain human judgments of CAPTCHA readability.",
        "es": "Entrenar y evaluar un OCR-CNN de referencia, generar CAPTCHA adversariales con FGSM y PGD y variantes mediante GAN, comparar el éxito del ataque en cada condición y recoger valoraciones humanas de legibilidad."
      },
      "result": {
        "en": "The unmodified-image OCR baseline reached 99.04% accuracy in the reported setting. Adversarial variants reduced machine recognition, but the paper emphasizes the need to calibrate perturbations to avoid excessive degradation of human usability.",
        "es": "El OCR de referencia alcanzó 99,04 % de exactitud sobre imágenes sin modificar en el escenario estudiado. Las variantes adversariales redujeron el reconocimiento automático, pero el artículo destaca la necesidad de calibrar las perturbaciones para no perjudicar excesivamente la usabilidad humana."
      },
      "team": "Luciana Vásquez Montenegro; Giancarlo López García; Edwin Jonathan Escobedo Cárdenas",
      "links": [],
      "papers": [
        "captcha"
      ],
      "line": "students",
      "gallery": [
        {
          "image": "captcha-pipeline.webp",
          "label": {
            "en": "Proposed adversarial evaluation workflow (Figure 1)",
            "es": "Flujo de evaluación adversarial (Figura 1)"
          }
        },
        {
          "image": "captcha-adversarial.webp",
          "label": {
            "en": "Original and FGSM-perturbed text CAPTCHAs (Figure 3)",
            "es": "CAPTCHAs originales y perturbados con FGSM (Figura 3)"
          }
        },
        {
          "image": "captcha-gan.webp",
          "label": {
            "en": "CAPTCHA variants with PGD and GAN (Figure 5)",
            "es": "Variantes de CAPTCHA mediante PGD y GAN (Figura 5)"
          }
        }
      ]
    },
    {
      "id": "risk",
      "year": "2025",
      "category": "Research with students",
      "role": "Coauthor",
      "image": "fig-risk.webp",
      "group": "student",
      "title": {
        "en": "Credit-risk prediction with boosting algorithms",
        "es": "Predicción de riesgo crediticio con algoritmos boosting"
      },
      "summary": {
        "en": "A comparative study of credit-risk prediction with boosting methods—XGBoost, LightGBM and Boosted Random Forest—across five public UCI financial datasets. It investigates whether preprocessing, categorical encodings, K-means-derived features and hyperparameter optimization improve the identification of borrowers with different risk profiles.",
        "es": "Estudio comparativo de predicción de riesgo crediticio mediante XGBoost, LightGBM y Boosted Random Forest sobre cinco datasets financieros públicos de UCI. Examina si el preprocesamiento, las codificaciones categóricas, las variables derivadas de K-means y la optimización de hiperparámetros mejoran la identificación de perfiles de riesgo."
      },
      "problem": {
        "en": "Credit-risk modeling must address heterogeneous variables, dataset-specific class balance and reliable evaluation, since high aggregate accuracy can hide mistakes involving financially important minority cases.",
        "es": "El modelado de riesgo crediticio debe considerar variables heterogéneas, desbalances distintos entre conjuntos y evaluación confiable, ya que una exactitud global elevada puede ocultar errores en casos minoritarios relevantes."
      },
      "method": {
        "en": "Experimental pipelines across five UCI datasets, including data cleaning, categorical encoding, clustering-based feature creation, supervised model training and cross-validated hyperparameter searches for three boosting-family approaches.",
        "es": "Pipelines experimentales sobre cinco conjuntos UCI que incluyen limpieza, codificación de variables categóricas, creación de características basadas en clustering, entrenamiento supervisado y búsqueda de hiperparámetros con validación cruzada para tres métodos de boosting."
      },
      "result": {
        "en": "The paper identifies XGBoost as the strongest overall performer under its benchmark configuration, while performance differs by dataset and preprocessing choices. This is a controlled model comparison, not validation for automated lending decisions.",
        "es": "El artículo identifica a XGBoost como el método de mejor desempeño global en su configuración experimental, aunque el rendimiento varía según el dataset y el preprocesamiento. Es una comparación controlada de modelos, no una validación para tomar decisiones crediticias automatizadas."
      },
      "team": "Renzo Orlando Villanueva Mora; Edwin Jonathan Escobedo Cárdenas",
      "links": [
        [
          "External UCI datasets",
          "https://archive.ics.uci.edu/"
        ]
      ],
      "papers": [
        "risk"
      ],
      "line": "students"
    },
    {
      "id": "masked",
      "year": "2023",
      "category": "Research with students",
      "role": "Coauthor",
      "image": "fig-resnet.webp",
      "group": "student",
      "title": {
        "en": "Facial recognition with surgical-mask occlusion",
        "es": "Reconocimiento facial con oclusión por mascarilla"
      },
      "summary": {
        "en": "This study compares convolutional and vision-transformer architectures for face identification when surgical masks occlude the lower face. A dataset involving 30 participants supports evaluation of ResNet-50, VGG-16, Vision Transformer and Swin Transformer in masked and unmasked recognition conditions.",
        "es": "El estudio compara arquitecturas convolucionales y transformadores visuales para reconocer rostros cuando una mascarilla quirúrgica oculta la parte inferior de la cara. Un conjunto con 30 participantes permite evaluar ResNet-50, VGG-16, Vision Transformer y Swin Transformer en condiciones con y sin mascarilla."
      },
      "problem": {
        "en": "Surgical-mask occlusion removes visible landmarks normally used by facial-recognition systems; algorithms must rely on the remaining features without assuming performance matches unoccluded images.",
        "es": "La oclusión por mascarilla quirúrgica elimina referencias visuales utilizadas por sistemas de reconocimiento facial; los algoritmos deben trabajar con las regiones visibles sin asumir un rendimiento equivalente al de rostros descubiertos."
      },
      "method": {
        "en": "Create masked and unmasked facial-image evaluation groups from 30 subjects, train or fine-tune ResNet-50, VGG-16, ViT and Swin Transformer, and compare recognition accuracy across occlusion conditions.",
        "es": "Construir conjuntos de evaluación facial con y sin mascarilla a partir de 30 sujetos, entrenar o ajustar ResNet-50, VGG-16, ViT y Swin Transformer, y comparar la exactitud de reconocimiento entre condiciones de oclusión."
      },
      "result": {
        "en": "Vision Transformer attained 96% test accuracy for images without surgical masks and 87% with masks in the reported experiment, illustrating the performance gap under lower-face occlusion.",
        "es": "Vision Transformer alcanzó 96 % de exactitud en prueba con rostros sin mascarilla y 87 % con mascarilla en el experimento reportado, evidenciando la reducción del rendimiento ante la oclusión facial inferior."
      },
      "team": "Brenda Xiomara Tafur Acenjo; Martín Alexis Tello Pariona; Edwin Jonathan Escobedo Cárdenas",
      "links": [
        [
          "Open dataset (ULima repository)",
          "https://repositorio.ulima.edu.pe/item/e2fc9a2e-1fa2-4bdb-8053-e15d71e76d19"
        ],
        [
          "Scientific paper",
          "https://doi.org/10.26439/interfases2023.n017.6361"
        ]
      ],
      "papers": [
        "masked"
      ],
      "line": "students"
    }
  ],
  "publications": [
    {
      "id": "channels",
      "year": 2026,
      "venue": "Springer COMIA 2026",
      "title": "Machine Learning Models for Customers Contact Channel Recommendation",
      "url": "https://doi.org/10.1007/978-3-032-37438-7_25",
      "area": "Recommender systems",
      "line": "students"
    },
    {
      "id": "fraud",
      "year": 2025,
      "venue": "IEEE INTERCON",
      "title": "Enhancing Credit Card Fraud Detection with Clickstream-Based Behavioral Features",
      "url": "https://doi.org/10.1109/INTERCON67304.2025.11244652",
      "area": "Finance",
      "line": "students"
    },
    {
      "id": "captcha",
      "year": 2025,
      "venue": "Springer COMIA 2025",
      "title": "Improvement of Text CAPTCHA Codes by Comparing Adversarial Techniques Against Deep Learning Model Attacks",
      "url": "https://doi.org/10.1007/978-3-031-97913-2_11",
      "area": "Cybersecurity",
      "line": "students"
    },
    {
      "id": "risk",
      "year": 2025,
      "venue": "Computación y Sistemas",
      "title": "Optimizing Credit Risk Prediction in the Financial Sector Using Boosting Algorithms: A Comparative Study with Financial Datasets",
      "url": "https://doi.org/10.13053/CyS-29-2-5173",
      "area": "Finance",
      "line": "students"
    },
    {
      "id": "viz",
      "year": 2025,
      "venue": "IEEE CLEI",
      "title": "Recommendation For Tabular Data Visualization Utilizing Machine Learning Applied To The Sales Domain",
      "url": "https://doi.org/10.1109/CLEI67442.2025.11420611",
      "area": "Data visualization",
      "line": "students"
    },
    {
      "id": "masked",
      "year": 2023,
      "venue": "Interfases",
      "title": "Comparativa entre RESNET-50, VGG-16, Vision Transformer y Swin Transformer para el reconocimiento facial con oclusión de una mascarilla",
      "url": "https://doi.org/10.26439/interfases2023.n017.6361",
      "area": "Computer vision",
      "line": "students"
    },
    {
      "id": "iso",
      "year": 2026,
      "venue": "Zenodo · Research dataset publication",
      "title": "SIGNO-PERU-ISO: A Minimal-Pair Dataset of Isolated Signs for Peruvian Sign Language Recognition",
      "url": "https://doi.org/10.5281/zenodo.18990737",
      "area": "Multimodal Peruvian Sign Language data",
      "line": "signoperu"
    },
    {
      "id": "fer",
      "year": 2026,
      "venue": "Scientific Data",
      "title": "A Multimodal RGB-D Dataset of Visuo-Gestural Facial Expressions in Peruvian Sign Language",
      "url": "https://doi.org/10.1038/s41597-026-08269-x",
      "area": "Sign language",
      "line": "signoperu"
    },
    {
      "id": "libras",
      "year": 2021,
      "venue": "Expert Systems with Applications",
      "title": "A multimodal LIBRAS-UFOP Brazilian sign language dataset of minimal pairs using a microsoft Kinect sensor",
      "url": "https://doi.org/10.1016/j.eswa.2020.114179",
      "area": "Sign language",
      "line": "libras"
    },
    {
      "id": "fer2",
      "year": 2025,
      "venue": "Computacion y Sistemas",
      "title": "Facial Expressions Recognition in Sign Language Based on a Two-Stream Swin Transformer Model Integrating RGB and Texture Map Images",
      "url": "https://doi.org/10.13053/CyS-29-2-5119",
      "area": "Computer vision",
      "line": "libras"
    },
    {
      "id": "food",
      "year": 2025,
      "venue": "Data in Brief",
      "title": "PeruFoodNet: A unique dataset of traditional peruvian food for image recognition systems and allergenic ingredient inference",
      "url": "https://doi.org/10.1016/j.dib.2025.111604",
      "area": "Datasets",
      "line": "students"
    },
    {
      "id": "chintex",
      "year": 2026,
      "venue": "Data in Brief",
      "title": "CHINTEXDB-PERU28: A unique dataset of traditional textile iconographies from Chinchero, Peru for cultural preservation and image recognition",
      "url": "https://doi.org/10.1016/j.dib.2026.112835",
      "area": "Datasets",
      "line": "other"
    },
    {
      "id": "lowlight",
      "year": 2026,
      "venue": "Signal, Image and Video Processing",
      "title": "A robust GAN-based model for low-light image enhancement and human detection on mobile devices",
      "url": "https://doi.org/10.1007/s11760-025-05085-5",
      "area": "Student collaboration",
      "line": "students"
    },
    {
      "id": "fake",
      "year": 2025,
      "venue": "Springer / COMIA",
      "title": "Fake News Detection in a Real-World Spanish Dataset: A Neural Network and Transformer-Based Approach",
      "url": "https://doi.org/10.1007/978-3-031-97913-2_10",
      "area": "NLP",
      "line": "students"
    },
    {
      "id": "zoo",
      "year": 2025,
      "venue": "IEEE CHILECON",
      "title": "ZooSQL: Interactive Serious Game to Strengthen SQL and Relational Algebra Skills for University Students",
      "url": "https://doi.org/10.1109/CHILECON66915.2025.11476443",
      "area": "Educational technology",
      "line": "students"
    },
    {
      "id": "phish",
      "year": 2025,
      "venue": "ACM CIIS 2025",
      "title": "PhishFind: A Machine Learning-Based System for Real-Time Phishing Detection",
      "url": "https://doi.org/10.1145/3771678.3771683",
      "area": "Cybersecurity",
      "line": "students"
    },
    {
      "id": "taekwondo",
      "year": 2026,
      "venue": "International Journal of Sports Science & Coaching",
      "title": "Predictive machine learning models for match outcomes in taekwondo based on competitive history",
      "url": "https://doi.org/10.1177/17479541251363562",
      "area": "Student collaboration",
      "line": "students"
    }
  ],
  "students": [
    {
      "id": "lowlight",
      "project": "lowlight",
      "year": "2026",
      "person": "Sebastián Enrique Camayo Ramos",
      "image": "fig-lowlight.webp",
      "pub": "lowlight",
      "title": {
        "en": "Low-light image enhancement and mobile human detection",
        "es": "Mejora de imágenes con baja iluminación y detección de personas en móviles"
      },
      "summary": {
        "en": "A GAN with an adaptive ratio-log illumination module restores poorly lit images and supports YOLO-based human detection on a mobile device.",
        "es": "Una GAN con módulo de iluminación adaptativa ratio-log mejora imágenes oscuras y apoya la detección de personas mediante YOLO en un dispositivo móvil."
      },
      "advised": true
    },
    {
      "id": "fake",
      "project": "fake",
      "year": "2025",
      "person": "Fiorella Nina; Angelina Arana",
      "image": "fig-fake.webp",
      "pub": "fake",
      "title": {
        "en": "Spanish-language fake news detection",
        "es": "Detección de noticias falsas en español"
      },
      "summary": {
        "en": "Spanish-language misinformation classification using neural networks and transformer representations, supported by a dataset collected from digital news and social platforms.",
        "es": "Clasificación de desinformación en español mediante redes neuronales y representaciones transformer, con un dataset elaborado a partir de prensa digital y plataformas sociales."
      },
      "advised": false
    },
    {
      "id": "phish",
      "project": "phish",
      "year": "2025",
      "person": "Diego O. Mendoza Vega; Dylan O. Díaz Mercado",
      "image": "fig-phish.webp",
      "pub": "phish",
      "title": {
        "en": "PhishFind: real-time phishing detection",
        "es": "PhishFind: detección de phishing en tiempo real"
      },
      "summary": {
        "en": "A browser extension combines machine-learning analysis of URLs and webpage content with explanations of suspicious sites.",
        "es": "Extensión para navegadores que combina análisis de URL y contenido web mediante aprendizaje automático con explicaciones de páginas sospechosas."
      },
      "advised": false
    },
    {
      "id": "perufood",
      "project": "perufood",
      "year": "2025",
      "person": "María Franchesca Arzola Gutierrez; Edgar Alexander Canchari Muñoz",
      "image": "fig-food.webp",
      "pub": "food",
      "title": {
        "en": "PeruFoodNet: Peruvian food image data",
        "es": "PeruFoodNet: dataset de platos peruanos"
      },
      "summary": {
        "en": "Developed and published 4,000 photographs of 40 traditional Peruvian dishes to support recognition and allergen research.",
        "es": "Desarrollo y publicación de 4 000 imágenes de 40 platos peruanos para reconocimiento visual y estudio de alérgenos."
      },
      "advised": false
    },
    {
      "id": "zoo",
      "project": "zoo",
      "year": "2025",
      "person": "Eduardo Patrick Miñan Panduro; Paolo Giuliano Zapata Albújar; José Jesús Valdivia Caballero",
      "image": "fig-zoo.webp",
      "pub": "zoo",
      "title": {
        "en": "ZooSQL: interactive SQL learning",
        "es": "ZooSQL: aprendizaje interactivo de SQL"
      },
      "summary": {
        "en": "A serious game teaches SQL, relational algebra and PL/SQL through progressively more complex challenges, feedback and game mechanics.",
        "es": "Juego serio que enseña SQL, álgebra relacional y PL/SQL mediante retos progresivos, retroalimentación y mecánicas lúdicas."
      },
      "advised": false
    },
    {
      "id": "fraud",
      "project": "fraud",
      "year": "2025",
      "person": "Renzo Saucedo; Piero Inga",
      "image": "fraud-confusion.webp",
      "pub": "fraud",
      "title": {
        "en": "Credit card fraud detection using clickstream behavior",
        "es": "Detección de fraude con tarjetas mediante comportamiento de navegación"
      },
      "summary": {
        "en": "Comparative classification using transaction records and behavioral clickstream features to evaluate whether browsing patterns improve fraud detection.",
        "es": "Clasificación comparativa con registros transaccionales y variables de navegación para determinar si el comportamiento digital mejora la detección de fraude."
      },
      "advised": false
    },
    {
      "id": "viz",
      "project": "viz",
      "year": "2025",
      "person": "Jenis Arnold Alvarado Gonzales",
      "image": "viz-input-output.webp",
      "pub": "viz",
      "title": {
        "en": "Machine learning for tabular visualization recommendation",
        "es": "Recomendación de visualizaciones tabulares mediante aprendizaje automático"
      },
      "summary": {
        "en": "BiDA4Sales recommends chart types from tabular attributes and natural-language user intent; a language model suggests suitable columns.",
        "es": "BiDA4Sales recomienda tipos de gráficos a partir de datos tabulares e intenciones en lenguaje natural; un modelo de lenguaje sugiere las columnas apropiadas."
      },
      "advised": false
    },
    {
      "id": "captcha",
      "project": "captcha",
      "year": "2025",
      "person": "Luciana Vásquez Montenegro; Giancarlo López García",
      "image": "captcha-adversarial.webp",
      "pub": "captcha",
      "title": {
        "en": "Robustness of text CAPTCHAs against automated attacks",
        "es": "Robustez de CAPTCHAs de texto frente a ataques automatizados"
      },
      "summary": {
        "en": "Evaluates adversarial perturbations and GAN-generated text CAPTCHAs against an OCR-CNN attack model and measures usability with people.",
        "es": "Evalúa perturbaciones adversariales y CAPTCHAs generados con GAN frente a un atacante OCR-CNN, e incorpora validación de usabilidad con personas."
      },
      "advised": false
    },
    {
      "id": "taekwondo",
      "project": "taekwondo",
      "year": "2026",
      "person": "Daphne Solange Velásquez Chávez; Ximena Nataly Utani Bendezu",
      "image": "fig-sports.webp",
      "pub": "taekwondo",
      "title": {
        "en": "Predicting Taekwondo match outcomes",
        "es": "Predicción de resultados de combates de taekwondo"
      },
      "summary": {
        "en": "Machine-learning models use historical competition records to predict results under sequence-based and head-to-head formulations.",
        "es": "Modelos de aprendizaje automático emplean historiales de competencia para predecir resultados en enfoques secuenciales y de enfrentamientos."
      },
      "advised": true
    },
    {
      "id": "masked",
      "project": "masked",
      "year": "2023",
      "person": "Brenda Xiomara Tafur Acenjo; Martín Alexis Tello Pariona",
      "image": "fig-resnet.webp",
      "pub": "masked",
      "title": {
        "en": "Facial recognition with surgical-mask occlusion",
        "es": "Reconocimiento facial con oclusión por mascarilla"
      },
      "summary": {
        "en": "Compares convolutional and transformer architectures for identifying people with and without face masks using a dataset recorded for the study.",
        "es": "Compara arquitecturas convolucionales y transformers para identificar personas con y sin mascarilla utilizando un dataset elaborado para el estudio."
      },
      "advised": false
    },
    {
      "id": "risk",
      "project": "risk",
      "year": "2025",
      "person": "Renzo Orlando Villanueva Mora",
      "image": "fig-risk.webp",
      "pub": "risk",
      "title": {
        "en": "Credit-risk prediction with boosting algorithms",
        "es": "Predicción de riesgo crediticio con algoritmos boosting"
      },
      "summary": {
        "en": "Compares XGBoost, LightGBM and Boosted Random Forest on five UCI credit-risk datasets, incorporating clustering-derived features.",
        "es": "Compara XGBoost, LightGBM y Boosted Random Forest en cinco datasets de riesgo crediticio de UCI, incorporando variables obtenidas mediante clustering."
      },
      "advised": false
    },
    {
      "id": "contact",
      "project": "contact",
      "year": "2026",
      "person": "Natalia Urquizo; Lía Sandoval; Guillermo Dávila",
      "image": "contact-method.webp",
      "pub": "channels",
      "title": {
        "en": "Customer contact-channel recommendation",
        "es": "Recomendación de canales de contacto con clientes"
      },
      "summary": {
        "en": "Uses clustering and customer interaction patterns to recommend communication channels, considering differences between audience segments.",
        "es": "Utiliza clustering y patrones de interacción para recomendar canales de comunicación según los segmentos de clientes."
      },
      "advised": false
    }
  ],
  "theses": [
    [
      "2023",
      "Brenda Xiomara Tafur Acenjo; Martin Alexis Tello Pariona",
      "Universidad de Lima"
    ],
    [
      "2025",
      "Renzo Orlando Villanueva Mora",
      "Universidad de Lima"
    ],
    [
      "2025",
      "Ximena Nataly Utani Bendezu; Daphne Solange Velasquez Chavez",
      "Universidad de Lima"
    ],
    [
      "2025",
      "Jonathan Bruce Cardenas Rondoño; Ners Armando Vasquez Espinoza",
      "Universidad de Lima"
    ],
    [
      "2025",
      "Alvaro Francisco Flores Guerra Arrieta",
      "Universidad de Lima"
    ],
    [
      "2025",
      "Lourdes Ramirez Cerna",
      "Universidad Nacional de Trujillo · Doctorado"
    ],
    [
      "2026",
      "Sebastian Enrique Camayo Ramos",
      "Universidad de Lima"
    ]
  ],
  "datasets": [
    {
      "id": "iso",
      "name": "SIGNO-PERU-ISO",
      "kind": "RGB-D",
      "image": "signoperu-iso-signer.webp",
      "status": "restricted",
      "count": "18,179",
      "license": "Access by request / DUA",
      "url": "https://zenodo.org/records/18990737",
      "project": "signo2",
      "description": {
        "en": "SIGNO-PERU-ISO is an RGB-D dataset developed within the SignoPerú research line to study isolated signs and challenging minimal-pair distinctions in Peruvian Sign Language. It contains 18,179 sequences from 17 native signers in six semantic categories. The related SIGNO-PERU-FER dataset addresses facial expressions as a separate, complementary research output. ISO data access requires a request and Data Usage Agreement.",
        "es": "SIGNO-PERU-ISO es un conjunto RGB-D desarrollado dentro de la línea de investigación SignoPerú para estudiar señas aisladas y distinciones complejas entre pares mínimos de la Lengua de Señas Peruana. Contiene 18 179 secuencias de 17 signantes nativos en seis categorías semánticas. SIGNO-PERU-FER estudia las expresiones faciales como otro producto científico complementario. El acceso a los datos ISO requiere solicitud y acuerdo de uso."
      },
      "origin": "SignoPerú · Minimal-pair recognition research project",
      "paper": "iso"
    },
    {
      "id": "fer",
      "name": "SIGNO-PERU-FER",
      "kind": "RGB-D",
      "image": "fig-fer.webp",
      "status": "paper",
      "count": "1,256 sequences",
      "license": "Controlled / DUA",
      "url": "https://zenodo.org/records/18665352",
      "project": "lspfer",
      "description": {
        "en": "14 facial-expression classes, 16 native LSP signers, synchronized RGB and depth. Access by request under the paper’s Data Use Agreement.",
        "es": "14 expresiones faciales, 16 signantes de LSP y modalidades RGB y profundidad sincronizadas. Acceso mediante solicitud y acuerdo de uso."
      },
      "origin": "SignoPerú · Institutional project",
      "paper": "fer"
    },
    {
      "id": "libras",
      "name": "LIBRAS-UFOP",
      "kind": "RGB-D",
      "image": "libras-ufop-rgb-depth-skeleton.webp",
      "status": "record",
      "count": "3,040 sequences",
      "license": "Verify on Zenodo",
      "url": "https://zenodo.org/records/23350484",
      "origin": "Doctoral research · Universidade Federal de Ouro Preto",
      "project": "libras",
      "description": {
        "en": "Original LIBRAS-UFOP dataset from doctoral research: 56 signs, 3,040 sequences, five signers, recorded in RGB, depth and skeleton formats.",
        "es": "Dataset LIBRAS-UFOP de la investigación doctoral: 56 señas, 3040 secuencias y cinco signantes; modalidades RGB, profundidad y esqueleto."
      },
      "paper": "libras"
    },
    {
      "id": "bsl",
      "name": "Facial-BSL",
      "kind": "RGB-D",
      "image": "facial-bsl-expressions.webp",
      "status": "record",
      "count": "8 classes",
      "license": "Verify on Zenodo",
      "url": "https://zenodo.org/records/22865192",
      "origin": "Scientific collaboration · Brazilian Sign Language",
      "project": "bsl",
      "description": {
        "en": "Brazilian Sign Language facial expressions with RGB and depth representations. User-supplied Zenodo record; file accessibility not independently verified.",
        "es": "Expresiones faciales en Libras con representaciones RGB y profundidad. Ficha de Zenodo proporcionada; acceso a archivos sin verificación independiente."
      },
      "paper": "fer2"
    },
    {
      "id": "perufood",
      "name": "PeruFoodNet",
      "kind": "Images",
      "image": "fig-food.webp",
      "status": "public",
      "count": "4,000",
      "license": "CC BY 4.0",
      "url": "https://data.mendeley.com/datasets/hxhbbm497d/3",
      "project": "perufood",
      "description": {
        "en": "Images of 40 Peruvian traditional dishes for image recognition.",
        "es": "Imágenes de 40 platos tradicionales peruanos para reconocimiento visual."
      },
      "origin": "Research with students",
      "paper": "food"
    },
    {
      "id": "chintex",
      "name": "CHINTEXDB-PERU28",
      "kind": "Images",
      "image": "fig-textile.webp",
      "status": "public",
      "count": "1,358",
      "license": "CC BY 4.0",
      "url": "https://data.mendeley.com/datasets/7vb89k93jn/1",
      "project": "chintex",
      "description": {
        "en": "Annotated images of 28 traditional textile iconography classes from Chinchero.",
        "es": "Imágenes anotadas de 28 clases de iconografía textil de Chinchero."
      },
      "origin": "Scientific collaboration",
      "paper": "chintex"
    },
    {
      "id": "masked",
      "name": "Masked / unmasked face recognition dataset",
      "kind": "Images",
      "image": "fig-mask.webp",
      "status": "public",
      "count": "30 subjects",
      "license": "ULima repository",
      "url": "https://repositorio.ulima.edu.pe/item/e2fc9a2e-1fa2-4bdb-8053-e15d71e76d19",
      "origin": "Created with students",
      "project": "masked",
      "description": {
        "en": "Face images with and without masks recorded for the ResNet-50, VGG-16, ViT and Swin Transformer comparison; public Universidad de Lima repository record.",
        "es": "Imágenes faciales con y sin mascarilla para comparar ResNet-50, VGG-16, ViT y Swin Transformer; ficha en el repositorio de la Universidad de Lima."
      },
      "paper": "masked"
    },
    {
      "id": "fake",
      "name": "Spanish-language fake news dataset",
      "kind": "Text",
      "image": "fig-fake.webp",
      "status": "public",
      "count": "Student research",
      "license": "See GitHub",
      "url": "https://github.com/fiorellaninaa/FakeNewsEspa-ol2024",
      "origin": "Created with students",
      "project": "fake",
      "description": {
        "en": "Research dataset of real and false Spanish-language news, with associated code and data documented in the authors’ GitHub repository.",
        "es": "Dataset de noticias reales y falsas en español, con datos y código publicados por sus autores en GitHub."
      },
      "paper": "fake"
    }
  ],
  "imageCredits": {
    "fig-food.webp": "Research figure from the cited publication",
    "fig-textile.webp": "Research figure from the cited publication",
    "fig-lowlight.webp": "Research figure from the cited publication",
    "fig-zoo.webp": "Research figure from the cited publication",
    "fig-phish.webp": "Research figure from the cited publication",
    "fig-fake.webp": "Original conceptual artwork derived from the research, not an original experiment figure",
    "fig-viz.webp": "Original conceptual artwork derived from the research, not an original experiment figure",
    "fig-resnet.webp": "Research figure from the cited publication",
    "fig-risk.webp": "Research figure from the cited publication",
    "fig-captcha.webp": "Original conceptual artwork derived from the research, not an original experiment figure",
    "fig-sports.webp": "Research figure from the cited publication",
    "fig-fraud.webp": "Original conceptual artwork derived from the research, not an original experiment figure",
    "fig-bsl.webp": "Research figure from the cited publication",
    "fig-libras.webp": "Research figure from the cited publication",
    "fig-fer.webp": "Research figure from the cited publication",
    "fig-mask.webp": "Research figure from the cited publication",
    "fig-contact.webp": "Original conceptual artwork derived from the research, not an original experiment figure",
    "signoperu-web.webp": "Research image supplied by the author",
    "signoperu-recognition.webp": "Research image supplied by the author",
    "signoperu-vr.webp": "Research image supplied by the author",
    "stemplay-home.webp": "Research image supplied by the author",
    "libras-sequence.webp": "Research image supplied by the author",
    "facial-bsl-expressions.webp": "Figure 3, Ramirez-Cerna et al., 2025",
    "desmodus-app.webp": "Research image supplied by the author",
    "libras-ufop-rgb-depth-skeleton.webp": "Original research paper, LIBRAS-UFOP (Figure 4)",
    "libras-ufop-minimal-pairs.webp": "Original research paper, LIBRAS-UFOP (Figure 5)",
    "breast-thermography-app.webp": "Research image supplied by the author",
    "breast-thermography-results.webp": "Research image supplied by the author",
    "signoperu-iso-visual.webp": "Original conceptual artwork derived from the research, not an original experiment figure",
    "signoperu-concept.webp": "Original conceptual artwork derived from the research, not an original experiment figure",
    "viz-model.webp": "Figure from the research publication (author-supplied PDF)",
    "viz-input-output.webp": "Figure from the research publication (author-supplied PDF)",
    "captcha-pipeline.webp": "Figure from the research publication (author-supplied PDF)",
    "captcha-adversarial.webp": "Figure from the research publication (author-supplied PDF)",
    "captcha-gan.webp": "Figure from the research publication (author-supplied PDF)",
    "contact-method.webp": "Figure from the research publication (author-supplied PDF)",
    "contact-clusters.webp": "Figure from the research publication (author-supplied PDF)",
    "fraud-confusion.webp": "Figure from the research publication (author-supplied PDF)",
    "fraud-features.webp": "Figure from the research publication (author-supplied PDF)",
    "signoperu-text-to-sign.webp": "Research image supplied by the author",
    "signoperu-vr-learning.webp": "Research image supplied by the author",
    "signoperu-fer-modalities.webp": "Figure from the related SIGNO-PERU-FER scientific publication",
    "signoperu-iso-overview.svg": "Technical schematic based on public SIGNO-PERU-ISO metadata (not a dataset frame)",
    "signoperu-iso-signer.webp": "Author-supplied authentic image for the SIGNO-PERU-ISO dataset"
  },
  "editorialVersion": "13.1"
};
