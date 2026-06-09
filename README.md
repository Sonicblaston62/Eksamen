# KontorLeie AS – Eksamensprosjekt

**Publisert nettsted:** [sonicblaston62.github.io/Eksamen](https://sonicblaston62.github.io/Eksamen/)

---

## Repoinnhold

```
├── index.html              # Forside
├── tjenester.html          # Tjenesteoversikt
├── kontakt.html            # Kontaktside
├── portal.html             # Kundeportal (innlogging)
├── docs.html               # Nettverksdokumentasjon (etter innlogging)
├── stylesheet.css          # Felles stilsett
├── main.js                 # Innloggingslogikk
├── AD_Veileder.pdf         # Active Directory-veileder for leietakere
├── network_topology.svg    # Nettverksskisse (Oppgave 2)
└── KontorLeie_Dokumentasjon.docx  # Fullstendig eksamensbesvarelse
```

---

## Oppgaveoversikt

| Oppgave | Type | Leveranse |
|---------|------|-----------|
| 1 – Utvikling | Webutvikling | Nettsted med offentlig del og kundeportal |
| 2 – Drift | Nettverksdesign | Topologiskisse med subnett og brannmurregler |
| 3 – Brukerstøtte | Dokumentasjon | AD-veileder for IT-ansvarlige i leietakerbedrifter |

---

## Oppgave 1 – Tekniske valg

Nettsiden er bygget uten rammeverk – kun HTML, CSS og vanilla JavaScript. Valget ble tatt for å holde løsningen enkel, portabel og uten byggsteg.

**Kjente begrensninger:**
- Innloggingen i `portal.html` er ikke ekte autentisering – knappen redirecter direkte til `docs.html`. I produksjon må dette erstattes med server-side autentisering.
- `docs.html` er tilgjengelig direkte via URL uten innlogging. Siden er ment å simulere en beskyttet side, men uten backend er den ikke reelt sikret.

---

## Oppgave 2 – Nettverksvalg

Tre bedrifter er satt opp med hvert sitt `/24`-subnett og VLAN:

| Bedrift | Subnett | VLAN |
|---------|---------|------|
| Bedrift 1 | 192.168.10.0/24 | 10 |
| Bedrift 2 | 192.168.20.0/24 | 20 |
| Bedrift 3 | 192.168.30.0/24 | 30 |

VLAN-isolering håndteres på hoved-switchen. Brannmuren blokkerer all trafikk mellom VLAN-ene. Filserveren i hvert subnett har fast IP `.10` og deles kun med brukere i riktig AD-gruppe.

**Skissen** (`network_topology.svg`) viser full topologi fra internett ned til utstyrsnivå.

---

## Oppgave 3 – AD-veileder

`AD_Veileder.pdf` er skrevet for IT-ansvarlige uten forkunnskaper om Active Directory. Veilederen dekker:

1. Forutsetninger (Windows Server, AD DS, domene, PC-tilkobling)
2. Opprette ny bruker
3. Gi tilgang til mapper og filer via grupper
4. Hurtigreferanse: deaktivere bruker, feilsøking, sjekkliste

Veilederen er også tilgjengelig fra kundeportalen på nettsiden.

---

## Situasjonsbeskrivelse

KontorLeie AS leier ut kontorplasser til private kunder og små bedrifter (1–10 ansatte). Hver bedrift skal ha:

- Eget isolert nettverk (kan ikke nå andre bedrifters utstyr)
- PC-er som kan kommunisere med intern nettverksprinter
- Filserver med tilgangsstyring via Active Directory

---

*Eksamensprosjekt 2025*
