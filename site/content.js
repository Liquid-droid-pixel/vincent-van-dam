/* ==========================================================================
   INHOUD — pas hier alles aan. Alle teksten op de website komen uit dit bestand.
   Teksten tussen [haakjes] zijn placeholders die je zelf invult.
   Laat een waarde leeg ("" of null) om het onderdeel te verbergen.
   ========================================================================== */
window.SITE = {
  naam: "Vincent van Dam",
  roepnaam: "Vincent",
  jaar: new Date().getFullYear(),
  tagline: "HBO-ICT-student met een achtergrond in IT-beheer, netwerken en systeembeheer, en een passie voor het bouwen van digitale ervaringen.",
  functie: "Stay Fluid ~ Stay Liquid",   // motto onder je naam (leeg = verbergen)
  label: "Curriculum vitae",
  profielfoto: "afbeeldingen/profiel-v2.png", // leeg = placeholder met initialen
  beschikbaarheid: "",   // optioneel: bijv. "Open voor nieuwe projecten" (leeg = verbergen)

  statistieken: [
    { waarde: "15", achtervoegsel: "+", label: "Projecten" },
    { waarde: "4", achtervoegsel: "", label: "Jaar ervaring" },
    { waarde: "10", achtervoegsel: "", label: "Voltooide projecten" }
  ],

  cv: {
    profiel: "Ik ben HBO-ICT-student aan Windesheim in Almere en heb de opleiding IT System and Devices aan het ROC afgerond. Daarin heb ik kennis en praktijkervaring opgedaan met IT-beheer, netwerken en systeembeheer. Naast mijn studie werk ik als vakkenvuller bij Albert Heijn en geef ik zeilles als I2-instructeur. In mijn vrije tijd bouw ik eigen projecten.",
    gegevens: [
      { icoon: "mail", label: "E-mail", waarde: "Vandamvincent6@gmail.com", url: "mailto:Vandamvincent6@gmail.com" },
      { icoon: "globe", label: "Woonplaats", waarde: "Almere" },
      { icoon: "github", label: "GitHub", waarde: "Liquid-droid-pixel", url: "https://github.com/Liquid-droid-pixel" },
      { icoon: "linkedin", label: "LinkedIn", waarde: "van-dam-vincent", url: "https://www.linkedin.com/in/van-dam-vincent" },
      { icoon: "car", label: "Rijbewijs", waarde: "B" },
      { icoon: "flag", label: "Nationaliteit", waarde: "Nederlands" }
    ],
    talen: [
      { taal: "Nederlands", niveau: "Moedertaal" },
      { taal: "Engels", niveau: "Niveau B2" }
    ]
  },

  // niveau: getal 0-100 om een indicator te tonen, of null om hem te verbergen
  vaardigheden: [
    { categorie: "IT & Netwerken", items: [
      { icoon: "wrench", naam: "IT-beheer en support", tekst: "Installeren, configureren en onderhouden van hardware en software.", niveau: null },
      { icoon: "globe", naam: "Netwerkbeheer", tekst: "Netwerken opzetten, configureren en controleren.", niveau: null },
      { icoon: "cpu", naam: "Gebruikers- en systeembeheer", tekst: "Beheer van gebruikers en systemen in professionele IT-omgevingen.", niveau: null },
      { icoon: "shield", naam: "Storingen analyseren en oplossen", tekst: "Problemen opsporen, analyseren en verhelpen.", niveau: null },
      { icoon: "award", naam: "Cisco CCNA", tekst: "Behaald certificaat op het gebied van netwerken.", niveau: 60 },
      { icoon: "editor", naam: "Microsoft 365", tekst: "Ervaring met Microsoft 365 uit opleiding en stage.", niveau: 60 }
    ]},
    { categorie: "Programmeren", items: [
      { icoon: "terminal", naam: "Python", tekst: "Verschillende apps en Discord-bots.", niveau: null },
      { icoon: "code", naam: "JavaScript", tekst: ["Minecraft-serverontwikkeling", "Discord-botontwikkeling"], niveau: null },   // een lijstje mag ook: tekst: ["punt 1", "punt 2"]
      { icoon: "globe", naam: "HTML", tekst: "Bouwen van verschillende websites voor o.a. [srp-gaming.nl](https://srp-gaming.nl).", niveau: null },   // links: [tekst](adres)
      { icoon: "palette", naam: "CSS", tekst: "Stijl en ontwerp voor verschillende projecten. Meer info vind je bij [Projecten](/projecten).", niveau: null }
    ]},
    { categorie: "Ontwikkeling", items: [
      { icoon: "globe", naam: "Webontwikkeling", tekst: [
        "Het creëren van verschillende sites, zoals [vandamvincent.nl](https://www.vandamvincent.nl) en [politie-eenheid.nl](https://www.politie-eenheid.nl)",
        "CWO-uitlegsysteem (in ontwikkeling)",
        "Verbetering en meedenken aan andere sites"
      ], niveau: null },
      { icoon: "bot", naam: "Discord-bots", tekst: ["Politie-FiveM-netwerk", "Inklokbots", "Algemene informatiebots"], niveau: null },
      { icoon: "gamepad", naam: "FiveM-ontwikkeling", tekst: [
        "hg_tuning (voertuigtuning-script)",
        "hg_weather (eigen weerscript)",
        "hg_jobs (eigen jobcreator, in ontwikkeling)"
      ], niveau: null }
    ]},
    { categorie: "Tools & Technologie", items: [
      { icoon: "github", naam: "GitHub", tekst: "Ik gebruik GitHub voor het beheren, versioneren en structureren van mijn projecten. Door Git te gebruiken kan ik wijzigingen bijhouden, eerdere versies terugzetten en veilig experimenteren met nieuwe functionaliteiten. Daarnaast gebruik ik GitHub om projecten overzichtelijk te bewaren en mijn voortgang tijdens het ontwikkelen bij te houden.", niveau: null },
      { icoon: "editor", naam: "Visual Studio Code", tekst: "Visual Studio Code is mijn belangrijkste ontwikkelomgeving. Ik gebruik het voornamelijk voor het ontwikkelen en aanpassen van backend-bestanden, maar ook voor het werken aan complete projecten. Dankzij de verschillende extensies en ingebouwde functies kan ik mijn code overzichtelijk beheren, fouten opsporen en efficiënt aan mijn projecten werken.", niveau: null },
      { icoon: "discord", naam: "Discord", tekst: "Discord speelt een belangrijke rol binnen verschillende van mijn projecten. Ik gebruik Discord niet alleen voor communicatie, maar integreer het ook in mijn eigen systemen en bots. Denk hierbij aan authenticatie, beveiliging, logging, ticket-systemen, automatische rollen en verschillende vormen van serverbeheer. Hierdoor heb ik veel ervaring opgedaan met het koppelen van Discord aan mijn eigen applicaties en automatiseringen.", niveau: null },
      { icoon: "linux", naam: "Linux", tekst: "Ik heb ervaring opgedaan met verschillende Linux-distributies, waaronder Ubuntu en Kali Linux. Hierbij heb ik kennisgemaakt met het werken via de terminal, het beheren van bestanden en systemen en verschillende Linux-commando's. Met Kali Linux heb ik daarnaast kennisgemaakt met verschillende tools en technieken die binnen cybersecurity en netwerkbeveiliging worden gebruikt.", niveau: null }
    ]}
  ],

  // categorie: web | software | discord | fivem | overig
  projecten: [
    { id: "p1", naam: "Project 01", categorie: "discord", status: "Actief", datum: "[Maand JAAR]",
      korteTekst: "Korte beschrijving van het project.", tech: ["Python", "Discord API", "SQLite"],
      afbeelding: "", kleur: 0,
      uitgebreid: "[Uitgebreide beschrijving: wat is het project, hoe is het ontstaan en hoe werkt het?]",
      doel: "[Wat wilde je met dit project bereiken?]",
      functies: ["[Functie 1]", "[Functie 2]", "[Functie 3]"],
      resultaat: "[Wat is het resultaat? Denk aan gebruikers, prestaties of wat je ervan leerde.]",
      links: [{ label: "Bekijk op GitHub", url: "" }, { label: "Live demo", url: "" }] },
    { id: "p2", naam: "Project 02", categorie: "web", status: "Voltooid", datum: "[Maand JAAR]",
      korteTekst: "Korte beschrijving van het project.", tech: ["HTML", "CSS", "JavaScript"],
      afbeelding: "", kleur: 1,
      uitgebreid: "[Uitgebreide beschrijving van dit webproject.]",
      doel: "[Wat wilde je met dit project bereiken?]",
      functies: ["[Functie 1]", "[Functie 2]", "[Functie 3]"],
      resultaat: "[Wat is het resultaat?]",
      links: [{ label: "Bekijk website", url: "" }] },
    { id: "p3", naam: "Project 03", categorie: "fivem", status: "In ontwikkeling", datum: "[Maand JAAR]",
      korteTekst: "Korte beschrijving van het project.", tech: ["Lua", "JavaScript", "MySQL"],
      afbeelding: "", kleur: 2,
      uitgebreid: "[Uitgebreide beschrijving van dit FiveM-project.]",
      doel: "[Wat wilde je met dit project bereiken?]",
      functies: ["[Functie 1]", "[Functie 2]", "[Functie 3]"],
      resultaat: "[Wat is het resultaat?]",
      links: [] },
    { id: "p4", naam: "Project 04", categorie: "software", status: "Actief", datum: "[Maand JAAR]",
      korteTekst: "Korte beschrijving van het project.", tech: ["Python", "Linux"],
      afbeelding: "", kleur: 3,
      uitgebreid: "[Uitgebreide beschrijving van dit softwareproject.]",
      doel: "[Wat wilde je met dit project bereiken?]",
      functies: ["[Functie 1]", "[Functie 2]", "[Functie 3]"],
      resultaat: "[Wat is het resultaat?]",
      links: [{ label: "Bekijk op GitHub", url: "" }] }
  ],

  // type: werk | opleiding | stage | project | organisatie | overig
  ervaring: [
    { type: "werk", titel: "Vakkenvuller", organisatie: "Albert Heijn, Weernekers, Almere Stad", periode: "mrt 2023 — heden",
      tekst: "Vanaf 2023 ben ik werkzaam bij Albert Heijn als vakkenvuller.", vaardigheden: [] },
    { type: "werk", titel: "Zeilinstructeur", organisatie: "De Randmeren Zeilschool en bootverhuur, Biddinghuizen", periode: "2023 — heden",
      tekst: "Als I2-instructeur bij zeilschool De Randmeren ben ik vooral bezig om kinderen te leren zeilen en hun leuke weken te bezorgen.", vaardigheden: [] },
    { type: "stage", titel: "Werknemer / stagiair", organisatie: "Qualified Networks, Almere Stad", periode: "dec 2024 — apr 2025",
      tekst: "Tijdens deze stage was ik verantwoordelijk voor het controleren van IT-apparatuur en het opzetten en configureren van netwerken.", vaardigheden: ["Netwerken", "IT-apparatuur"] },
    { type: "stage", titel: "Stagiair", organisatie: "Hardware-Experts, Almere Stad", periode: "aug 2023 — feb 2024",
      tekst: "Van augustus 2023 tot februari 2024 heb ik stage gelopen bij Hardware-Experts, een bedrijf dat zich verdiept in het repareren en maken van computersystemen. Ook het contact met de klanten was een belangrijk onderdeel.", vaardigheden: ["Computersystemen", "Klantcontact"] },
    { type: "opleiding", titel: "HBO-ICT", organisatie: "Windesheim, Almere Stad", periode: "sep 2025 — heden",
      tekst: "Momenteel volg ik de opleiding HBO-ICT, waarin ik mij verder ontwikkel in IT-oplossingen, systemen en netwerken binnen professionele omgevingen.", vaardigheden: [] },
    { type: "opleiding", titel: "IT System and Devices", organisatie: "ROC, Almere Buiten", periode: "aug 2021 — apr 2025",
      tekst: "Tijdens deze opleiding heb ik kennis en praktijkervaring opgedaan op het gebied van IT-beheer, netwerken en systeembeheer. Ik heb gewerkt met het installeren, configureren en onderhouden van hardware en software binnen professionele IT-omgevingen.",
      vaardigheden: ["IT-beheer en support", "Netwerkbeheer", "Gebruikers- en systeembeheer", "Storingen analyseren en oplossen"] },
    { type: "opleiding", titel: "Economie & Biologie (VMBO)", organisatie: "Echnaton, Almere Stad", periode: "tot 2022",
      tekst: "In 2022 heb ik het VMBO afgerond met het vakkenpakket Eco-Bio, met de extra vakken Mediavormgeving, Nederlands, Rekenen en Engels.", vaardigheden: [] }
  ],

  interesses: [
    { icoon: "sail", naam: "Zeilen", tekst: "Ik geef zeilles als I2-instructeur bij De Randmeren Zeilschool." },
    { icoon: "gamepad", naam: "Gamen", tekst: "[Welke games speel je graag?]" },
    { icoon: "cpu", naam: "Technologie", tekst: "Mijn opleiding en werk draaien om IT, systemen en netwerken." },
    { icoon: "code", naam: "Programmeren", tekst: "Ik bouw in mijn vrije tijd eigen projecten." }
  ],

  prestaties: [
    { icoon: "award", titel: "Cisco CCNA", datum: "Via ROC", organisatie: "Cisco", tekst: "Behaald tijdens de opleiding IT System and Devices.", afbeelding: "" },
    { icoon: "award", titel: "Microsoft-certificaat", datum: "Via ROC", organisatie: "Microsoft (o.a. Microsoft 365)", tekst: "Behaald tijdens de opleiding IT System and Devices.", afbeelding: "" },
    { icoon: "graduation", titel: "VMBO-diploma Eco-Bio", datum: "2022", organisatie: "Echnaton, Almere Stad", tekst: "Afgerond met de extra vakken Mediavormgeving, Nederlands, Rekenen en Engels.", afbeelding: "" }
  ],

  // Vul bij url je eigen link in; lege links worden niet klikbaar getoond.
  contact: {
    intro: "Heb je een vraag, een idee of wil je samenwerken? Stuur me gerust een bericht. Ik reageer zo snel mogelijk.",
    formulierEndpoint: "", // optioneel: bijv. een Formspree-URL. Leeg = verzenden wordt gesimuleerd.
    kanalen: [
      { icoon: "mail", naam: "E-mail", waarde: "Vandamvincent6@gmail.com", url: "mailto:Vandamvincent6@gmail.com" },
      { icoon: "discord", naam: "Discord", waarde: "N0t_liquid", url: "", kopieer: true },
      { icoon: "github", naam: "GitHub", waarde: "Liquid-droid-pixel", url: "https://github.com/Liquid-droid-pixel" },
      { icoon: "linkedin", naam: "LinkedIn", waarde: "van-dam-vincent", url: "https://www.linkedin.com/in/van-dam-vincent" },
      { icoon: "instagram", naam: "Instagram", waarde: "vincent_vd18", url: "https://www.instagram.com/vincent_vd18/" }
    ]
  },

  footerTekst: "Een persoonlijke digitale wereld over techniek, creativiteit en het bouwen van mooie dingen."
};
