# Edwin Escobedo — Academic Research Portfolio V8

A bilingual, responsive academic research website organized by **research lines**, not by CV entries.

## Editorial order

1. **SignoPerú**: three successive institutional research projects (2024–2027), with related Peruvian Sign Language scientific outputs.
2. **LIBRAS**: one research section presenting two associated studies together—LIBRAS-UFOP (PhD research at Universidade Federal de Ouro Preto) and Facial-BSL (facial-expression recognition in Brazilian Sign Language).
3. **STEM_Play**: serious-game research and evaluation in secondary education.
4. Other institutional projects: mammary thermography, wildlife thermal imaging and CHINTEXDB-PERU28, a scientific collaboration.
5. Scientific research with students: individual paper records, names, methodological summaries, DOI links and datasets or source code when provided.

The pages are `index.html`, `investigaciones.html`, `proyecto.html?id=...`, `estudiantes.html`, `datasets.html`, `publicaciones.html`, `docencia.html`.

Research and dataset metadata live in `content.js`; layout and site interactions are in `app.js` and `style.css`. No framework, bundler or server application is needed. Deploy to GitHub Pages from the `main` branch, root directory.

## Source and reuse notes

- All scientific figures named `fig-*.webp` are reduced-resolution images extracted from user-supplied scientific manuscripts. They are credited in interface captions as research figures. Their public reuse must comply with the original publisher license and consent requirements. Photographs and project screenshots named `signoperu-*.webp`, `stemplay-*.webp`, `libras-sequence.webp`, and `desmodus-app.webp` were supplied by the author. The `facial-bsl-expressions.webp` visual is a crop of the original published research figure. All illustrations in `.svg` are conceptual drawings, and explicitly labeled as such.
- For image datasets requiring participants' consent, the figure selection avoids presenting raw participant imagery as open image assets unless cleared.
- Project descriptions are summaries of supplied papers, project records and repository links, not substitutes for the original publications.
- DOI links lead to the publisher, without uploading published-paper PDFs. External third-party datasets are marked as third-party datasets. Zenodo items with unverified file accessibility link to the record rather than offering false direct downloads.
- **Caracol:** a reliable project title, supporting source and public URL were not present in the materials reviewed. No research entry or scientific result was invented for it. This can be added once the source is provided.
- The website is independent from Universidad de Lima and is not an official institutional publication.

## Local testing

Open `index.html`, or serve with `python -m http.server 8080` in this directory. Use the EN/ES language toggle and light/dark theme toggle. The latter persists in browser storage.

## V8 layout

LIBRAS combines the PhD dataset and Facial-BSL as equally weighted cards under one thematic heading. There is no redundant programme explanation between the two cards. The project and dataset index pages keep their independent records and DOI links.


## Version 9 — dataset audit and source imagery

- LIBRAS-UFOP uses cropped Figure 4 and Figure 5 from the original UFOP doctoral paper, not examples from SIGNO-PERU.
- Breast thermography now uses frames captured from the research team’s supplied mobile-app demonstration video. The application is an investigational prototype, not a clinically validated diagnostic device.
- Dataset index lists eight authored or collaboratively developed datasets with identifiable records/repositories. External datasets used in credit card fraud and customer contact studies, an unverified PhishingLong download, and internal thermography research data are **not** listed as independently published datasets. Their use remains documented in the relevant research cases.
- Fake News is represented by its dataset entry and its paper in Publications, rather than a duplicate project card.
- The LIBRAS and thermography detail pages have source-image galleries.
