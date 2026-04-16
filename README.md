# RENTIT - Don't Buy It

**Rentit** är en Vanilla JavaScript SPA byggd med Vite och Tailwind CSS. Data hanteras via en mock-backend (`data.json`) och localStorage, kompletterat med externa API:er för testimonials och översättning.

Byggt som ett lärandeprojekt i kursen JavaScript 1, med avsikt att förbereda oss för kommande ramverk.
Detta är en clone och originalet ligger här: https://github.com/anneliejrova/rentit
 
🎬 **[Live demo](https://rentitproject.netlify.app/)**

## Collaborators och ansvarsområden

- Rebecca Martis – Sökfunktion och extern data.  
- Annelie Johansson Rova – Bokningssystem och intern data. (https://github.com/anneliejrova)

## Projektbeskrivning

Rentit erbjuder uthyrning av produkter inom sex kategorier: Städ, Kök, Trädgård, Bygg, 
Fritid och Textil – allt från verktyg och utrustning som är dyra att köpa, bara används vid 
enstaka tillfällen eller är svåra att förvara. Plattformen bygger på ett miljötänk där 
återanvändning och minskat konsumtionsbehov står i fokus, vilket gör det möjligt att 
genomföra projekt utan stora investeringar och samtidigt spara både naturresurser och 
förvaringsutrymme.

Applikationen har sökfunktion, tydlig kategorisering och ett flexibelt bokningssystem som 
stödjer både enskilda bokningar och batchbokningar – vilket gör det möjligt att boka flera 
produkter för ett specifikt projekt vid ett och samma tillfälle.

## Tekniska specifikationer

- **Byggverktyg:** Vite  
- **Arkitektur:** Vanilla JavaScript (SPA – Single Page Application)  
- **Struktur:** HTML används för grundlayout (header, main, footer), medan logik och rendering hanteras i JavaScript-komponenter och views  
- **Styling:** Tailwind CSS med kompletterande egen CSS för globala regler  
- **Datahantering:**  
  - Mock-backend via `data.json` som simulerar ett REST API  
  - localStorage används för dynamisk data.
- **Externa API:er och Säkerhet:**  
    Projektet använder två publika API:er utan autentisering
  - Testimonials API för kundrekommendationer  
  - MyMemory API för översättning till svenska
    (båda APIerna är gratis och publika, vilket innebär att inga API-nycklar krävs och ingen känslig information behöver skyddas. Det finns därför ingen .env-fil i projektet.)

## Instruktioner för att köra projektet
1. Se till att [Node.js](https://nodejs.org) är installerat.
2. Kör `npm install` för att installera beroenden (Vite, Tailwind m.m.).  
   > `node_modules/` skapas lokalt och ingår inte i repot.
3. Starta utvecklingsservern med `npm run dev`.
4. Öppna http://localhost:5173/#home i webbläsaren.

Applikationen är nu redo att användas.

https://testimonialapi.vercel.app/ hemsida med nyckeln

## Mappstruktur
```
rentit/
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── .gitignore
├── public/
│   ├── img/
│   ├── _redirects.md
│   └── data.json
└── src/
    ├── main.js
    ├── router.js
    ├── routes.js
    ├── style.css
    ├── tailwind.config.js
    ├── components/
    │   ├── about.js
    │   ├── calendar.js
    │   ├── cartDropdown.js
    │   ├── footer.js
    │   ├── header.js
    │   ├── hero.js
    │   ├── howTo.js
    │   ├── mobileMenu.js
    │   ├── nav.js
    │   ├── productCards.js
    │   ├── search.js
    │   ├── testimonials.js
    │   ├── toggleCartBtn.js
    │   └── values.js
    ├── views/
    │   ├── category.js
    │   ├── checkout.js
    │   ├── confirmation.js
    │   ├── home.js
    │   └── product.js
    └── utils/
        ├── availability.js
        ├── cart.js
        ├── cartCount.js
        ├── checkout.js
        ├── data.js
        └── helpers.js
```
