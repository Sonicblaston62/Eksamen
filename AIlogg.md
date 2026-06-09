Du skal være et hjelpemiddel for meg som eksamens elev for vg2 IT. innefor fagene drift utvikling og Brukerstøtte. du skal ikke gjøre alle oppgavene for meg men funke som et verktøy som kan hjelpe i riktig retning
8:40 AM

Klart. Stiller spørsmål, gir hint, peker i riktig retning. Ikke full løsning.

Hva jobber du med?

Et selskap som driver med kontroutleie trenger å sette oppp  sitt nettverk og webbasert løsning for bedriften. Slik at de kan tilby sine kontortjenester til sine private kunder og små bedrifter. hver bedrift har 1-10 ansatte og diskke skal ha it-utstyr som kan kommunisere med hverandre (for eksempel skal deres PC kunne koble seg til deres nettverksprinter)

En bedrift skal ikke kunne nå andres bedrift IT-utsrtyr (subnett) dette er situasjinbeskrivelsen
8:43 AM

Bra situasjon. Klassisk nettverkssegmentering.

Hva har du tenkt så langt?

Noen startspørsmål å tenke på:

    Hvordan isolerer man bedrifter fra hverandre i samme bygg?
    Hva heter teknologien som deler ett fysisk nettverk i flere logiske?
    Hva trenger hver bedrift for at PC ↔ printer skal funke?

Hvor er du i oppgaven — planlegging, subnetting, utstyrsliste, eller noe annet?

første oppgave er utvikling. 
Oppgave 1
Web løsning med beskrivelse av tjenestene (for potensielle nye kunder)

Web løsning med tilgang til dokumentasjon av nettverksoppsett, fir eksisterende kunder (for eksempel DNS-oppsett og lignende
8:46 AM

Ok. To deler:

Del 1 — Offentlig nettside (markedsføring) Del 2 — Innlogget portal (eksisterende kunder, teknisk dok)

Hva tenker du selv om:

    Én nettside med innlogging, eller to separate?
    Hvilke teknologier vil du bruke? (HTML/CSS, PHP, rammeverk?)
    Hva slags dokumentasjon skal kunder se — bare lese, eller også laste ned?

Lag et veldig veldig enkelt rammeverk av en nettside som ikke bruker noen eksterne verktøy men bare html og javascript
8:47 AM
Viewed a file, created a file, read a file

Hva er inkludert:

    4 sider: Hjem, Tjenester, Kontakt, Kundeportal
    Enkel innlogging (JS, ingen database — bare demo)
    Testbrukere: kunde1 / passord123 eller admin / admin
    Teknisk dokumentasjon (DNS, subnett, printer) bak innlogging

Tenk over:

    Ekte løsning ville brukt server-side login (PHP/database) — hvorfor er JS-login ikke trygt?
    Hva mangler for at dette skal bli en ekte løsning?

Index
Code · HTML 

jeg sa enkel.  dette fungerer men dette er mye mer komplisert enn det trenger å være. minimum med css. bare det aller minste du trenger for at det skal virke
8:49 AM
Ran a command, read a file

Login: kunde1 / passord123
Index
Code · HTML 

dette men uten javascript
8:51 AM
Ran a command, read a file

4 separate HTML-filer, ingen JS, ingen CSS.

Merk: uten JS/backend er portalen åpen for alle — ingen ekte innlogging mulig med kun HTML. Hvordan tror du man løser det i virkeligheten?
Index
Code · HTML 
Tjenester
Code · HTML 
Kontakt
Code · HTML 
Portal
Code · HTML 

Ok neste oppgave. Oppgave 2 drift. Alt utstyr er ikke kommet i tide men teknikeren trenger å vite hvordan nettverket skal se ut. Lag en skisse på Oppsett av nettverket Eventuell subbnettverk Brannmur/portstyring. dette skal gjøres meg bruk av cisco packet tracer. det er oppgaven

Nettverket jeg tenker meg vil trenge en internett linke inn. flere subnett for å isolere bedriftene fra hverandre. og ikke la de forskjellige bedriftenes utstyr snakke sammen.
9:28 AM

Packet Tracer er et program du må lage selv lokalt — jeg kan ikke lage .pkt-filer direkte.

Men jeg kan hjelpe deg med:

    Hvilke enheter du trenger i Packet Tracer
    Hvordan subnettet skal se ut (IP-plan)
    Hvilke innstillinger du setter på hver enhet

Start her — tenk gjennom dette:

Du nevnte flere subnett for isolering. Hvilken enhet er det som faktisk skiller subnettnettene fra hverandre og hindrer trafikk mellom dem?

til dette trenger vi ruter switch ot brannmur. brannmuren skal være vra f-secure. en ruter som er koblet til flere managed switcher som gjør det enkelt for it personell og endre på. disse brukes til å dele opp nettverkene i subnett som har forskeliige tilgansnivåer i forhold til have den ansatte i den bedriften trenger ut ifra hvilken jobb de har innenfor bedriften. it ansvaralige i de underliggende bedriftene har tilgang til å endre på switchen for å fikse problemer. switchen er selfølgelig koblet videre til ethernettårn og AP-er for tilkobling. hvert nettverk har også en satt statisk ip for den bedriftens filserver og en for bedriftens nettverkprinter. brannmuren skal likke mellom hovedserveren i kontorbedriften og switchene som er koblet deretter
9:40 AM

God beskrivelse. La oss bygge IP-planen først.

Spørsmål før jeg lager skissen:

Hvor mange leietakerbedrifter planlegger du for? (f.eks. 3, 5, 10?)

Det bestemmer hvor mange subnett vi trenger å tegne.

3 er nok
9:41 AM

Her er forslag til nettverksstruktur:

Topologi (topp → bunn):

Internett
    |
[F-Secure Brannmur]
    |
[Ruter]
    |
[Managed Switch - Hoved]
    |          |          |
[Switch B1] [Switch B2] [Switch B3]
  |               |            |
AP+Ethernet    AP+Ethernet   AP+Ethernet

IP-plan:
	Subnett	Filserver	Printer
Bedrift 1	192.168.10.0/24	192.168.10.10	192.168.10.20
Bedrift 2	192.168.20.0/24	192.168.20.10	192.168.20.20
Bedrift 3	192.168.30.0/24	192.168.30.10	192.168.30.20
Hoved/mgmt	192.168.1.0/24	—	—

I Packet Tracer trenger du:

    1x Router (f.eks. Cisco 2911)
    1x L3 managed switch (hoved)
    3x L2 managed switch (en per bedrift)
    F-Secure finnes ikke i PT — bruk ASA Firewall som erstatning
    PC-er, printer, AP per bedrift

Tenk over:

    Hvilken enhet konfigurerer du VLAN på?
    Hvorfor er det lurt at filserver og printer har statisk IP fremfor DHCP?

Mer nøyaktig oppsett i packet tracer
9:44 AM

Eksakt oppsett i Packet Tracer:

Enheter du legger inn:

    1x ASA 5505 (brannmur)
    1x Router 2911
    1x L3 Switch 3560 (hoved)
    3x L2 Switch 2960 (en per bedrift)
    Per bedrift: 2x PC, 1x Printer, 1x Access Point (AP)

Kabler:

    Internett → ASA (outside)
    ASA (inside) → Router Gi0/0
    Router Gi0/1 → Hoved-switch (3560)
    3560 → Switch B1 på port Gi0/1
    3560 → Switch B2 på port Gi0/2
    3560 → Switch B3 på port Gi0/3
    Switch B1/B2/B3 → PC-er, Printer, AP med copper straight-through

VLAN-oppsett på 3560:

VLAN 10 → Bedrift 1
VLAN 20 → Bedrift 2
VLAN 30 → Bedrift 3
VLAN 99 → Management

Trunk-porter:

    3560 → hver 2960-switch = trunk (tillater alle VLAN)
    2960 → PC/Printer = access port (kun sitt VLAN)

Statiske IP-er — sett manuelt på hver enhet i PT:
Enhet	IP	Gateway
B1 Filserver	192.168.10.10	192.168.10.1
B1 Printer	192.168.10.20	192.168.10.1
B2 Filserver	192.168.20.10	192.168.20.1
B2 Printer	192.168.20.20	192.168.20.1
B3 Filserver	192.168.30.10	192.168.30.1
B3 Printer	192.168.30.20	192.168.30.1

Vil du ha de faktiske CLI-kommandoene du skriver inn på switchene og ruteren?

Kabelnavn viser ikke når jeg hovrer. kan du hvilke farger er hva
9:49 AM

Packet Tracer kabelfarger:
Farge	Type	Når brukes
Svart/grå	Copper Straight-through	PC/Printer → Switch
Grønn	Copper Straight-through (også)	samme, varierer
Oransje	Copper Crossover	Switch → Switch, eller Router → Switch direkte
Lyseblå	Console	PC → Router/Switch for konfigurasjon
Rød	Fiber	Sjelden i skoleoppgaver

I ditt oppsett:

    PC/Printer/AP → Switch = straight-through (svart)
    Switch → Switch (2960 → 3560) = crossover (oransje)
    Router → Switch = crossover (oransje)
    ASA → Router = crossover (oransje)
    Konfigurasjon = console (lyseblå)

Merk: nyere PT-versjoner velger kabel automatisk hvis du bruker "Automatically Choose Connection Type" (lynglimt-ikonet). Da trenger du ikke tenke på dette.

nvm nå har vi en vledig god skriftlig skrevet versjon av hvordan dette oppsette skal være. skjekk om du kan generere en pkt fil. hvis ikke visualiser oppsettet
9:52 AM

Kan ikke generere .pkt-filer — det er et proprietært binærformat.

Klikk på boksene for å stille spørsmål. Bruk dette som referanse når du bygger i Packet Tracer.

Hvilke enheter kobles til Bedrift 1 sin switch?
9:53 AM

Direkte til Switch B1 (2960):
Enhet	Antall	IP
PC-er	2–10	DHCP (192.168.10.100–200)
Nettverksprinter	1	Statisk: 192.168.10.20
Filserver	1	Statisk: 192.168.10.10
Access Point (AP)	1	DHCP eller statisk

I Packet Tracer:

    PC → switch: copper straight-through
    Printer → switch: copper straight-through
    Server → switch: copper straight-through
    AP bruker du "AccessPoint" fra wireless-kategorien

Husk: alle porter på B1 settes som access port VLAN 10 — da kan ikke utstyret snakke med B2 eller B3.

Vil du ha CLI-kommandoene for å sette opp access ports på switchen?

med den nye informasjonen vi har fått her, ta å renskriv det jeg skrev tidligiere i oppsette av hvordan nettverket skal se ut 
til dette trenger vi ruter switch ot brannmur. brannmuren skal være vra f-secure. en ruter som er koblet til flere managed switcher som gjør det enkelt for it personell og endre på. disse brukes til å dele opp nettverkene i subnett som har forskeliige tilgansnivåer i forhold til have den ansatte i den bedriften trenger ut ifra hvilken jobb de har innenfor bedriften. it ansvaralige i de underliggende bedriftene har tilgang til å endre på switchen for å fikse problemer. switchen er selfølgelig koblet videre til ethernettårn og AP-er for tilkobling. hvert nettverk har også en satt statisk ip for den bedriftens filserver og en for bedriftens nettverkprinter. brannmuren skal likke mellom hovedserveren i kontorbedriften og switchene som er koblet deretter
9:54 AM

Nettverksoppsett – KontorLeie AS

Utstyr

    1x F-Secure brannmur (simulert som Cisco ASA i Packet Tracer)
    1x Cisco 2911 ruter
    1x Cisco 3560 L3 managed switch (hoved)
    3x Cisco 2960 L2 managed switch (en per bedrift)
    Per bedrift: PC-er, nettverksprinter, filserver, Access Point (AP)

Topologi

Internett-linjen går inn i F-Secure brannmuren. Brannmuren sitter mellom internett og resten av nettverket og kontrollerer all trafikk inn og ut. Bak brannmuren kobles ruteren, som videreformilder trafikk mellom subnettene og ut mot internett. Ruteren kobles til hoved-switchen (L3), som igjen kobles til én dedikert L2 managed switch per bedrift via trunk-porter.

Hver bedriftsswitch kobles videre til ethernet-porter i veggen og trådløse aksesspunkter (AP) for tilkobling av utstyr.

Subnett og VLAN

Hver bedrift får et isolert subnett og VLAN. Utstyr på ett subnett kan ikke kommunisere med utstyr på et annet.
	VLAN	Subnett
Bedrift 1	10	192.168.10.0/24
Bedrift 2	20	192.168.20.0/24
Bedrift 3	30	192.168.30.0/24
Management	99	192.168.1.0/24

Innenfor hver bedrift kan tilgangsnivåer differensieres med egne VLAN basert på rolle (f.eks. admin, ansatt, gjest).

Statiske IP-adresser per bedrift
Enhet	B1	B2	B3
Filserver	192.168.10.10	192.168.20.10	192.168.30.10
Nettverksprinter	192.168.10.20	192.168.20.20	192.168.30.20
Gateway	192.168.10.1	192.168.20.1	192.168.30.1

Øvrig utstyr (PC-er, AP-er) tildeles IP automatisk via DHCP innenfor .100–.200.

Tilgangsstyring

IT-ansvarlige i hver bedrift har begrenset tilgang til egen switch (VLAN-konfigurasjon, feilsøking). De har ikke tilgang til hoved-switchen eller andre bedrifters utstyr. Brannmuren styrer portåpninger og blokkerer trafikk mellom subnettene.

can you make  a little more visually appealing version of the netowrk setup that is a little easier to understand and vizualise but that shows the same setup
10:25 AM

Den røde stiplete linjen viser isolasjonsgrensen — ingen trafikk krysser mellom subnettene under den. Klikk på boksene for mer info.

Siste oppgave Active directory. Brukerstøtte. 
Lage veileder i Active Directory 
Hvordan Opprette bruker
Hvordan sette opp tilgang på mappe og filnivå
Husk at veilederen slal være brukervennlig
10:30 AM
Ran 3 commands, viewed a file, created a file

Veilederen inneholder:

Del 1 – Opprette bruker: steg-for-steg fra ADUC til ferdig bruker med gruppe

Del 2 – Mappe/filtilgang: AD-grupper + NTFS-tillatelser med tabell over tilgangsnivåer

Del 3 – Hurtigreferanse: feilsøkingstabell, sjekkliste og nyttige kommandoer
Ad veileder
Document · DOCX 

Den skal være brukervennlig. mye av dette mener at du allered kan mye om AD før du starter. åpne dsa.msc for eksemple er ikke en brukevennlig måte åå gjøre det på
10:38 AM

Riktig observasjon. En god veileder antar at leseren ikke kan noe fra før.

Konkrete ting å fikse:

    "dsa.msc" → "Klikk Start, søk etter Active Directory Users and Computers, åpne programmet"
    Forklar hva en OU er før du bruker ordet
    Forklar hva en sikkerhetsgruppe er og hvorfor vi bruker den
    Forklar hva NTFS-tillatelser er på vanlig norsk
    Mindre fagsjargong, mer "gjør dette fordi..."

Vil du at jeg skriver om hele veilederen med dette i tankene?

ja. også forklar bedre hva som allerede trengs å være satt opp basert på en fresh install av windows server
10:40 AM
Generate improved Word document

You are going to help write the documentation for my exam. first you will ge the questions from  the exam. then ymanswers and products made. Situasjonsbeskrivelse Kontorutleie
Et selskap som driver med Kontorutleie trenger å sette opp sitt nettverj og webbasert løsning for bedriften. Slik at de kan tilby sine kontortjenester til sine private ukunder og små bedrifter Hvet bedrift har 1-10 ansatte og disse skal ha it-utstyr som kan kommunisere med hverandre for eksemple skal deres pc kunne koble seg til deres nettverkprinter en bedrift skal ikke kiunne nå andre bedrifters it utsyr (subnet) 
Opgvae 1 utvikling
12:07 PM

Gi meg resten — spørsmålene, svarene dine, og produkter laget. Så skriver jeg dok.

Oppgave 1 utvikling Web løsning med beskrivelse av tjenestene for potensielle nye kunder web løsning med tilgang til dokumentasjon av nettverksoppsett for eksisterende kunder for eksempel dns-oppsett og lignende opgvae 2 drift alt utsyr er ikke kommet i tide men tekninkeren trenger p vite hvordan nettverket skal se ut la en skisse på oppsett av nettverket eventuell subnett og brannmur/portstyring 
Oppgave 3 Brukerstøtte la følgende veildere i active direcctoy hvordan oprette bruker hvordan sette op tilgang til mappe og filnivå husk at veilederen skal være brukervennlig
Det var alle sprøsmålene np kommer mine svar
12:10 PM

Klar. Send svarene dine.

pdf
12:10 PM

Leste alle filer. Nå trenger jeg oppgave 2-svaret ditt — nettverksskissen. Har du bilde, diagram, eller tekst?
12:11 PM
View network topology SVG

Alt klart. Har nå:

    Oppgave 1: index, tjenester, kontakt, portal, docs, CSS, JS
    Oppgave 2: nettverksskisse (SVG) — brannmur, ruter, hoved-switch, 3 subnett, filservere
    Oppgave 3: AD_Veileder.pdf

Skriver dokumentasjonen nå.
Ran 3 commands, viewed a file, created a file

Ferdig. Dokumentet dekker:

    Oppgave 1 — websidestruktur, funksjoner, teknisk tabell
    Oppgave 2 — nettverkstopologi, subnett-tabell (B1/B2/B3), brannmurregler, DNS
    Oppgave 3 — AD-veileder oppsummert med steg-for-steg, tilgangstabell, feilsøking, sjekkliste

Kontorleie dokumentasjon
Document · DOCX 

dette skal ikke skrives som en pdf men istedet som ekstra informasjon ikke allerede skrevet i oppgavesare som skal likke i en github readme.md fil
12:17 PM

Så du vil ha en README.md til GitHub-repoet, med tilleggsinformasjon som ikke allerede er i Word-dokumentet?

Hva er repoet — bare nettsidefilene, eller alt (nettside + nettverksskisse + AD-veileder)?

repoet skal inneholde alle filene du nå har fått tilgang til pluss denne chatten nettsiden har også blitt publisert for lettere visning https://sonicblaston62.github.io/Eksamen/
12:20 PM
Searched the web, created a file, ran a command

README dekker det som ikke er i Word-dokumentet:

    Repostruktur med filtre
    Tekniske valg og kjente begrensninger (usikret portal)
    Nettverksvalg — hvorfor /24 og VLAN
    Lenke til live nettsted
    Kort om AD-veilederen

Readme
Document · MD 

Det siste som trengs er en presentasjon. hver oppgave har jeg ca 5 minuttter på å presentere med en total 15 minutter. generere en standard power point med ca 3 slides per oppgave
12:29 PM
Viewed 5 files, ran 3 commands, created a file

Slide 3 har et layout-problem: det 5. kortet dupliseres og plasseres feil. Fikser kortet-layouten.
Viewed 8 files, ran 2 commands, edited a file

Alt ser bra ut. Alle 12 slides uten overlapp eller overflow.
Presented file

12 slides, ~5 min per oppgave:

    Slide 1 — cover
    Slide 2–4 — Oppgave 1 (tittel, sidestruktur, teknologi + portal)
    Slide 5–7 — Oppgave 2 (tittel, topologi, brannmur + DNS)
    Slide 8–11 — Oppgave 3 (tittel, veilederinnhold, bruker + tilgang, feilsøking)
    Slide 12 — oppsummering

Speaker notes er inkludert på alle innholdsslides.
Kontorleie presentasjon
Presentation · PPTX 

