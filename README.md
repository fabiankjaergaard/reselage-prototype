# Reseläge – Low-fi Mobilprototyp

En klickbar mobilprototyp för SL:s "Reseläge" – ett koncept där kollektivtrafiken tar ansvar för resan, precis som GPS gör i bilen.

## Koncept

**Persona:** Stina, 43 år, projektledare som pendlar 3-4 dagar/vecka.

**Problem:** I kollektivtrafiken måste Stina övervaka resan själv. I bilen tar GPS ansvar.

**Lösning:** Reseläge flyttar ansvar från användaren till systemet genom:
- Proaktiv guidning
- Betydelsebaserad information ("vad betyder detta för mig?")
- Tydlig Plan B
- Lugnande kommunikation

---

## Starta projektet

```bash
# Navigera till projektmappen
cd reselage-prototype

# Installera beroenden
npm install

# Starta utvecklingsservern
npm run dev
```

Öppna sedan `http://localhost:5173` i webbläsaren.

---

## Skärmar

### A) Start / Morgon-check
- Välkomstmeddelande
- Rekommenderad avgångstid
- Beräknad ankomst (ETA)
- Beläggningsindikator

### B) Reseläge – Pågående resa
- Statusmeddelande
- Nästa steg
- Beläggning
- Trygghetscopy

### C) Avvikelse – Systemet tar ansvar
- Varningsmeddelande
- Betydelsebaserad text
- Rekommendation med Plan B

### D) Plan B – Ny rutt
- Steg-för-steg-lista
- Automatiska uppdateringar
- Lugnande kommunikation

### E) Framme
- Feedback-val
- Resstatistik
- Spara som favorit

---

## Interaktionsflöde

```
Start → [Aktivera Reseläge] → Reseläge (normal)
                                    ↓
                        [Simulera avvikelse]
                                    ↓
                              Avvikelse
                                    ↓
                          [Följ Plan B]
                                    ↓
                               Plan B
                                    ↓
                    Reseläge (Plan B aktiv)
                                    ↓
                         [Jag är framme]
                                    ↓
                               Framme
                                    ↓
                              [Klar] → Start
```

---

## Toggla avvikelse (demo)

I **Reseläge**-skärmen finns en knapp: **"⚡ Simulera avvikelse"**

Klicka på den för att trigga avvikelse-flödet och visa hur systemet hanterar störningar automatiskt.

---

## Debug-panel

Under telefonramen visas en debug-panel med:
- Aktuell skärm
- Om avvikelse är aktiv
- Om Plan B är aktiverad

---

## Teknisk implementation

- **Framework:** React + Vite
- **Styling:** Vanilla CSS (mobile-first)
- **State:** React useState hooks
- **Data:** Mockad statisk data
- **Responsivt:** Optimerat för 375px, fungerar på desktop med telefonram

---

## Design

- Low-fi gråskala
- Stora touch-ytor (minst 44px)
- CTA-knappar i botten (tumvänligt)
- Enkla kort (cards)
- Emojis för status (🟢🟡🔴)
- Lugnande, tydlig tonalitet

---

## Öppna i VS Code

```bash
code /Users/fabiankjaergaard/reselage-prototype
```

---

## Filstruktur

```
reselage-prototype/
├── src/
│   ├── components/
│   │   ├── StartScreen.jsx
│   │   ├── TravelModeScreen.jsx
│   │   ├── DisruptionScreen.jsx
│   │   ├── PlanBScreen.jsx
│   │   └── ArrivalScreen.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```
