# Edwin Escobedo — Academic Research Portfolio

Personal, bilingual website for documenting research projects, scientific publications, datasets, research with students, and selected teaching activities.

## Site structure

| Page | Purpose |
| --- | --- |
| `index.html` | Selected research, the three SignoPerú projects, student research and datasets |
| `investigaciones.html` | Searchable catalog of projects and research outputs |
| `proyecto.html?id=...` | Research details: problem, method, findings, collaborators, publications and sources |
| `estudiantes.html` | Selected research with students and documented thesis advising |
| `datasets.html` | Dataset metadata, access status and original repository links |
| `publicaciones.html` | Selected papers with direct DOI links |
| `docencia.html` | Concise teaching record and advising |

The site runs on GitHub Pages without a build step. `content.js` stores bilingual research records; `app.js` handles rendering, language/theme controls and search; `style.css` contains the responsive dark/light design.

## Updating datasets and images

Images in `assets/` are **illustrations, not original images from research datasets or research results**. Replace the relevant file with an approved screenshot/photograph (prefer `.webp`, optimized for the web) and update that item's `image` field in `content.js`. Only upload material authorized for public distribution. For datasets with restricted access, keep the repository URL and its actual access status instead of advertising a public download.

## Editorial policy

Research descriptions use formal academic language; papers link to publishers or DOI records rather than copying PDFs. Project roles and dates should be checked against CRIS Ulima, and advising records against CTI Vitae. Collaborations are distinguished from supervised theses. This is an independent personal website, not an official site of Universidad de Lima.

## Publication

GitHub Pages: branch `main`, folder `/ (root)` at https://edwinescobedo.github.io/.

As of October 2026, this version uses an English default and an initial dark theme. User preferences persist using browser local storage. The optional light theme and Spanish interface can be selected in the header.
