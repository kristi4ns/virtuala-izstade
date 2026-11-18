# Virtuālā izstāde – tīmekļa vietnes izstrādes projekts

## 1. Projekta apraksts

Projekts ir izstrādāts prakses laikā, izmantojot HTML5, CSS3 un JavaScript.

**Projekta mērķis** ir izveidot interaktīvu un responsīvu tīmekļa vietni – virtuālu izstādi par izvēlēto tēmu.

**Izstādes tēma:** Kosmoss un zinātniskie atklājumi

**Izstādes nosaukums:** Kosmoss un zinātniskie atklājumi

## 2. Komandas dalībnieki

1. Kristiāns Kļava
2. Leonards Luns

## 3. GitHub repozitorijs

Projekta pirmkods un izstrādes vēsture ir pieejama GitHub repozitorijā:

**GitHub Repository:** [ievietojiet saiti uz repozitoriju](https://github.com/)

## 4. Izmantotās tehnoloģijas

- **HTML5** – tīmekļa vietnes struktūras izveidei (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`).
- **CSS3** – tīmekļa vietnes dizainam, Box Model, Flexbox/Grid un responsīvajam izkārtojumam (`@media`).
- **JavaScript** – interaktīvu funkciju un attēlu karuseļa izveidei.
- **GitHub** – projekta failu versiju kontrolei un komandas sadarbībai.

## 5. Tīmekļa vietnes funkcionalitāte

Izstrādātajā tīmekļa vietnē ir:

- Galvene un navigācijas izvēlne (telefonā izvēlne atveras ar pogu ☰).
- Galvenā sadaļa ar izstādes nosaukumu, aprakstu, galveno attēlu un pogu „Apskatīt izstādi”.
- Izstādes apraksts: mērķis, īsa kosmosa izpētes vēsture un trīs idejas, kas mainīja astronomiju.
- Attēlu galerija – 8 kosmosa atklājumi no 1610. līdz 2022. gadam (CSS Grid).
- Interaktīvs attēlu karuselis – 6 attēli ar nosaukumiem un aprakstiem.
- Manuāla (pogas „Iepriekšējais” un „Nākamais”) un automātiska (ik pēc 5 s) attēlu pārslēgšana.
- Poga automātiskās pārslēgšanas apturēšanai un atsākšanai.
- Responsīvs dizains datoram, planšetei un telefonam.
- Lapas kājene ar informāciju par projekta autoriem, saitēm un autortiesībām.

### Failu struktūra

```
virtuala-izstade/
├── index.html        lapas struktūra
├── css/
│   └── style.css     viss noformējums un @media
├── js/
│   └── script.js     mobilā izvēlne un karuselis
├── images/           16 attēli (hero, about, gallery-*, carousel-*)
└── README.md
```

### Kur kas atrodas kodā

| Prasība | Kur atrast |
|---|---|
| Flexbox | `.header__inner`, `.hero__inner`, `.ideas`, `.carousel__controls` |
| Grid | `.facts`, `.about`, `.gallery`, `.footer__inner` |
| Box Model | `.idea-card`, `.gallery-card` (border, padding), `.gallery-card__image` (width, height), `.container` (margin, padding) |
| Media Queries | `style.css` beigās: 900px un 600px |
| Event Listeners | `script.js`: izvēlnes poga un karuseļa pogas |
| DOM manipulācijas | `show_slide()` maina slaidu klases un skaitītāja tekstu, `start_autoplay()` / `stop_autoplay()` maina pogas tekstu |

JavaScript kods ir rakstīts PEP-8 līdzīgā stilā: 4 atstarpju atkāpe, pilni nosaukumi (`current_slide_index`, `show_next_slide`), konstantes ar lielajiem burtiem (`AUTOPLAY_DELAY_IN_MILLISECONDS`).

## 6. Projekta palaišana

1. Lejupielādējiet projekta failus vai klonējiet GitHub repozitoriju.
2. Atveriet projekta mapi.
3. Atveriet failu `index.html` tīmekļa pārlūkprogrammā.
4. Pārbaudiet tīmekļa vietnes funkcionalitāti.

Serveris nav vajadzīgs. Fonti tiek ielādēti no Google Fonts, tāpēc bez interneta lapa izmantos rezerves fontus.

## 7. Projekta izstrādes ieguldījums

Īss apraksts par katra komandas dalībnieka paveikto darbu:

- **Kristiāns Kļava:** HTML struktūra, navigācija, attēlu galerija un README dokumentācija.
- **Leonards Luns:** CSS dizains, Flexbox/Grid, responsīvais izkārtojums un JavaScript karuselis.

## 8. Attēlu avoti

Visi attēli ir no [Wikimedia Commons](https://commons.wikimedia.org). NASA attēli ir publiski pieejami (Public domain).

| Fails | Autors | Licence |
|---|---|---|
| hero-cosmic-cliffs.jpg | NASA, ESA, CSA, STScI | Public domain |
| about-earth.jpg | NASA / Apollo 17 apkalpe | Public domain |
| gallery-galileo.jpg | Justus Sustermans (1636) | Public domain |
| gallery-sputnik.jpg | NSSDC, NASA | Public domain |
| gallery-apollo-11.jpg | Neil Armstrong, NASA | Public domain |
| gallery-voyager.jpg | NASA/JPL | Public domain |
| gallery-hubble.jpg | NASA (STS-125 apkalpe) | Public domain |
| gallery-curiosity.jpg | NASA/JPL-Caltech, apstrāde: semeion.photo | CC BY 2.0 |
| gallery-black-hole.jpg | Event Horizon Telescope | CC BY 4.0 |
| gallery-webb-deep-field.jpg | NASA, ESA, CSA, STScI | Public domain |
| carousel-pillars-of-creation.jpg | NASA, ESA, Hubble Heritage Team | Public domain |
| carousel-earthrise.jpg | NASA / Bill Anders | Public domain |
| carousel-saturn.jpg | NASA / JPL / Space Science Institute | Public domain |
| carousel-jupiter.jpg | NASA, ESA, A. Simon (GSFC) | Public domain |
| carousel-crab-nebula.jpg | NASA, ESA, J. Hester, A. Loll | Public domain |
| carousel-andromeda.jpg | Adam Evans | CC BY 2.0 |
