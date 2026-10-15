# Edwin Escobedo — academic research website

Source for **https://edwinescobedo.github.io**. Hosted as a static GitHub Pages website in the `main` branch.

## Site structure

- `index.html` + `site.js`: original responsive bilingual portfolio, publications, career, teaching and project overview.
- `site-v3.js` + `site-v3.css`: scientific dataset catalog, three verified research phases of **SignoPerú** (2024–2027), featured **STEM_Play** project, visual illustrations, contact emails and responsive design.
- `datasets.html`: independent searchable/filterable catalog, with real records, access notes and links to Mendeley Data / Zenodo.
- `docencia.html`: independent teaching and mentorship page referencing CTI Vitae.
- `site-core.css`, `site-pages.css`, `site-pages.js`: styling and bilingual user interface for standalone pages.
- `assets/*.svg`: *illustrative* scientific thumbnails; not original photographs or actual project data.

## Editing

Edit `site-v3.js` for current dataset records, English and Spanish explanations and SignoPerú project stages. Edit `site-pages.js` when updating public teaching/thesis records. Users can select Spanish/English and light/dark theme; selections persist via browser local storage when available.

## Source and access notes

- SignoPerú: the program consists of distinct CRIS-reported projects in 2024–2025, 2025–2026 (minimal pairs) and 2026–2027 (VR). They are presented as connected stages but are **not** conflated with the Brazilian Facial-BSL dataset.
- `SIGNO-PERU-ISO`: public Zenodo record with **restricted** files. Researchers must follow the listed Data Usage Agreement. Never label this as freely downloadable.
- `CHINTEXDB-PERU28`: published dataset in Mendeley Data, DOI 10.17632/7vb89k93jn.3.
- `PeruFoodNet`: published dataset in Mendeley Data, DOI 10.17632/hxhbbm497d.3.
- `Facial-BSL`: Brazilian Sign Language research; public dataset landing link still awaits verification.
- Breast thermography data: availability and release permissions not verified. Do not publish private patient information.
- Scientific publications are linked by DOI or bibliographic records and are not mirrored on this personal website.
- STEM_Play product link points to https://stemplay.ulima.edu.pe/stem/ (provided by website owner), with a separate official CRIS project record.
- Illustrations are **synthetic SVG artwork for navigation**, not real dataset samples or authentic screenshots of the research projects. Replace them with approved images and videos when available.
- Contact email addresses, supplied by owner: `eescobed@ulima.edu.pe` and `edu.escobedo88@gmail.com`.
- Researcher portrait is fetched from CRIS Ulima, with GitHub profile avatar fallback. A photo supplied directly by the website owner can be stored locally for resilience; the current remote assets might be blocked by their hosts.
- This is an independent **personal** academic website, not an official institutional website.

## External references

- Personal profile: https://cris.ulima.edu.pe/es/persons/edwin-jonathan-escobedo-cardenas/
- CTI Vitae: https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=162198
- SignoPerú product: https://signoperu.ulima.edu.pe/signo
- STEM_Play product: https://stemplay.ulima.edu.pe/stem/
- Datasets: https://zenodo.org/records/18990737 , https://data.mendeley.com/datasets/7vb89k93jn/3 , https://data.mendeley.com/datasets/hxhbbm497d/3

## Deployment

From GitHub → Settings → Pages, use **Deploy from a branch**, `main`, `/ (root)`. Changes take a few minutes to appear.
