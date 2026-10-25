/* ==========================================================================
   VERTALINGEN — Nederlands is de standaardtaal en staat in de HTML en in content.js.
   Hier staan de vertalingen naar Engels (en), Spaans (es) en Duits (de).

   Zo werkt het: de Nederlandse tekst is de sleutel. Komt een tekst uit content.js of de
   HTML hier voor, dan wordt hij in de gekozen taal getoond. Staat hij hier niet, dan blijft
   het Nederlands. Pas je een tekst in content.js aan, voeg dan hieronder een regel toe:

       add("Jouw nieuwe Nederlandse tekst", "English", "Español", "Deutsch");
   ========================================================================== */
window.I18N = (function () {
  const D = {};
  const add = (nl, en, es, de) => { D[nl] = { en, es, de }; };

  /* ---------- Navigatie & algemeen ---------- */
  add("Home", "Home", "Inicio", "Startseite");
  add("Profiel", "Profile", "Perfil", "Profil");
  add("Ervaring", "Experience", "Experiencia", "Erfahrung");
  add("Vaardigheden", "Skills", "Habilidades", "Fähigkeiten");
  add("Projecten", "Projects", "Proyectos", "Projekte");
  add("Certificaten", "Certificates", "Certificados", "Zertifikate");
  add("Interesses", "Interests", "Intereses", "Interessen");
  add("Contact", "Contact", "Contacto", "Kontakt");
  add("Ga naar inhoud", "Skip to content", "Ir al contenido", "Zum Inhalt springen");
  add("Naar boven", "To the top", "Ir arriba", "Nach oben");
  add("Hoofdnavigatie", "Main navigation", "Navegación principal", "Hauptnavigation");
  add("Footernavigatie", "Footer navigation", "Navegación del pie de página", "Fußzeilen-Navigation");
  add("Menu openen", "Open menu", "Abrir menú", "Menü öffnen");
  add("Menu sluiten", "Close menu", "Cerrar menú", "Menü schließen");
  add("Sluiten", "Close", "Cerrar", "Schließen");
  add("Voorkeuren", "Preferences", "Preferencias", "Einstellungen");
  add("Taal", "Language", "Idioma", "Sprache");
  add("Thema", "Theme", "Tema", "Design");
  add("Donker", "Dark", "Oscuro", "Dunkel");
  add("Licht", "Light", "Claro", "Hell");
  add("Scroll", "Scroll", "Desplazar", "Scrollen");
  add("Scroll naar beneden", "Scroll down", "Desplazarse hacia abajo", "Nach unten scrollen");
  add("Navigatie", "Navigation", "Navegación", "Navigation");
  add("Sociaal", "Social", "Redes", "Soziale Medien");
  add("Terug naar boven ↑", "Back to top ↑", "Volver arriba ↑", "Zurück nach oben ↑");
  add("Terug naar home", "Back to home", "Volver al inicio", "Zurück zur Startseite");
  add("Alle rechten voorbehouden.", "All rights reserved.", "Todos los derechos reservados.", "Alle Rechte vorbehalten.");
  add("Persoonlijke website: over mij, vaardigheden, projecten, ervaring en meer.",
      "Personal website: about me, skills, projects, experience and more.",
      "Sitio web personal: sobre mí, habilidades, proyectos, experiencia y más.",
      "Persönliche Website: über mich, Fähigkeiten, Projekte, Erfahrung und mehr.");

  /* ---------- Home ---------- */
  add("Hoi, ik ben", "Hi, I'm", "Hola, soy", "Hallo, ich bin");
  add("Curriculum vitae", "Curriculum vitae", "Currículum vitae", "Lebenslauf");
  add("Download CV (PDF)", "Download CV (PDF)", "Descargar CV (PDF)", "Lebenslauf herunterladen (PDF)");
  add("Neem contact op", "Get in touch", "Ponte en contacto", "Kontakt aufnehmen");
  add("Vakkenvuller bij Albert Heijn", "Shelf stacker at Albert Heijn", "Reponedor en Albert Heijn", "Regalauffüller bei Albert Heijn");
  add("HBO-ICT-student met een achtergrond in IT-beheer, netwerken en systeembeheer, en een passie voor het bouwen van digitale ervaringen.",
      "ICT student (HBO) with a background in IT management, networking and system administration, and a passion for building digital experiences.",
      "Estudiante de TIC (HBO) con experiencia en gestión de TI, redes y administración de sistemas, y pasión por crear experiencias digitales.",
      "ICT-Student (HBO) mit Hintergrund in IT-Betrieb, Netzwerken und Systemadministration und einer Leidenschaft für digitale Erlebnisse.");
  add("[Beschikbaarheid, bijv. Open voor nieuwe projecten]", "[Availability, e.g. Open to new projects]", "[Disponibilidad, p. ej. Abierto a nuevos proyectos]", "[Verfügbarkeit, z. B. Offen für neue Projekte]");
  add("Jaar ervaring", "Years of experience", "Años de experiencia", "Jahre Erfahrung");
  add("Voltooide projecten", "Completed projects", "Proyectos completados", "Abgeschlossene Projekte");
  add("Profielfoto", "Profile photo", "Foto de perfil", "Profilfoto");
  add("Profielfoto van", "Profile photo of", "Foto de perfil de", "Profilfoto von");
  add("Plaatshouder voor profielfoto", "Placeholder for profile photo", "Marcador de posición para la foto de perfil", "Platzhalter für Profilfoto");

  /* ---------- Profiel ---------- */
  add("Professioneel profiel", "Professional profile", "Perfil profesional", "Berufliches Profil");
  add("Ik ben HBO-ICT-student aan Windesheim in Almere en heb de opleiding IT System and Devices aan het ROC afgerond. Daarin heb ik kennis en praktijkervaring opgedaan met IT-beheer, netwerken en systeembeheer. Naast mijn studie werk ik als vakkenvuller bij Albert Heijn en geef ik zeilles als I2-instructeur. In mijn vrije tijd bouw ik eigen projecten.",
      "I am an ICT student (HBO) at Windesheim in Almere and have completed the IT System and Devices programme at the ROC. There I gained knowledge and hands-on experience in IT management, networking and system administration. Alongside my studies I work as a shelf stacker at Albert Heijn and teach sailing as an I2 instructor. In my spare time I build my own projects.",
      "Soy estudiante de TIC (HBO) en Windesheim, en Almere, y he terminado la formación IT System and Devices en el ROC. Allí adquirí conocimientos y experiencia práctica en gestión de TI, redes y administración de sistemas. Además de mis estudios, trabajo como reponedor en Albert Heijn y doy clases de vela como instructor I2. En mi tiempo libre creo mis propios proyectos.",
      "Ich studiere ICT (HBO) an der Windesheim in Almere und habe die Ausbildung IT System and Devices am ROC abgeschlossen. Dabei habe ich Wissen und praktische Erfahrung in IT-Betrieb, Netzwerken und Systemadministration gesammelt. Neben dem Studium arbeite ich als Regalauffüller bei Albert Heijn und gebe als I2-Instruktor Segelunterricht. In meiner Freizeit entwickle ich eigene Projekte.");
  add("Persoonlijke gegevens", "Personal details", "Datos personales", "Persönliche Angaben");
  add("Talen", "Languages", "Idiomas", "Sprachen");
  add("E-mail", "Email", "Correo electrónico", "E-Mail");
  add("Woonplaats", "Location", "Lugar de residencia", "Wohnort");
  add("Rijbewijs", "Driving licence", "Carné de conducir", "Führerschein");
  add("Nationaliteit", "Nationality", "Nacionalidad", "Nationalität");
  add("Nederlands", "Dutch", "Neerlandés", "Niederländisch");
  add("Engels", "English", "Inglés", "Englisch");
  add("Moedertaal", "Native language", "Lengua materna", "Muttersprache");
  add("Niveau B2", "Level B2", "Nivel B2", "Niveau B2");

  /* ---------- Ervaring ---------- */
  add("Werkervaring & opleiding", "Work experience & education", "Experiencia laboral y formación", "Berufserfahrung & Ausbildung");
  add("Werkervaring", "Work experience", "Experiencia laboral", "Berufserfahrung");
  add("Opleiding", "Education", "Formación", "Ausbildung");
  add("Stage", "Internship", "Prácticas", "Praktikum");
  add("Persoonlijk project", "Personal project", "Proyecto personal", "Persönliches Projekt");
  add("Organisatie", "Organisation", "Organización", "Organisation");
  add("Vakkenvuller", "Shelf stacker", "Reponedor", "Regalauffüller");
  add("Zeilinstructeur", "Sailing instructor", "Instructor de vela", "Segellehrer");
  add("Werknemer / stagiair", "Employee / intern", "Empleado / becario", "Mitarbeiter / Praktikant");
  add("Stagiair", "Intern", "Becario", "Praktikant");
  add("Economie & Biologie (VMBO)", "Economics & Biology (VMBO)", "Economía y Biología (VMBO)", "Wirtschaft & Biologie (VMBO)");
  add("De Randmeren Zeilschool en bootverhuur, Biddinghuizen", "De Randmeren sailing school and boat rental, Biddinghuizen", "Escuela de vela y alquiler de barcos De Randmeren, Biddinghuizen", "Segelschule und Bootsverleih De Randmeren, Biddinghuizen");
  add("Vanaf 2023 ben ik werkzaam bij Albert Heijn als vakkenvuller.",
      "Since 2023 I have worked at Albert Heijn as a shelf stacker.",
      "Desde 2023 trabajo en Albert Heijn como reponedor.",
      "Seit 2023 arbeite ich bei Albert Heijn als Regalauffüller.");
  add("Als I2-instructeur bij zeilschool De Randmeren ben ik vooral bezig om kinderen te leren zeilen en hun leuke weken te bezorgen.",
      "As an I2 instructor at the De Randmeren sailing school, I mainly teach children to sail and give them a great week.",
      "Como instructor I2 en la escuela de vela De Randmeren, me dedico sobre todo a enseñar a navegar a los niños y a que pasen unas semanas estupendas.",
      "Als I2-Instruktor an der Segelschule De Randmeren bringe ich vor allem Kindern das Segeln bei und sorge für schöne Wochen.");
  add("Tijdens deze stage was ik verantwoordelijk voor het controleren van IT-apparatuur en het opzetten en configureren van netwerken.",
      "During this internship I was responsible for checking IT equipment and for setting up and configuring networks.",
      "Durante estas prácticas fui responsable de revisar equipos informáticos y de instalar y configurar redes.",
      "Während dieses Praktikums war ich für die Kontrolle von IT-Geräten sowie das Einrichten und Konfigurieren von Netzwerken verantwortlich.");
  add("Van augustus 2023 tot februari 2024 heb ik stage gelopen bij Hardware-Experts, een bedrijf dat zich verdiept in het repareren en maken van computersystemen. Ook het contact met de klanten was een belangrijk onderdeel.",
      "From August 2023 to February 2024 I did an internship at Hardware-Experts, a company that specialises in repairing and building computer systems. Contact with customers was also an important part of the job.",
      "De agosto de 2023 a febrero de 2024 hice prácticas en Hardware-Experts, una empresa especializada en reparar y montar sistemas informáticos. El contacto con los clientes también fue una parte importante.",
      "Von August 2023 bis Februar 2024 habe ich ein Praktikum bei Hardware-Experts gemacht, einem Unternehmen, das sich auf die Reparatur und den Bau von Computersystemen spezialisiert hat. Auch der Kundenkontakt war ein wichtiger Teil.");
  add("Momenteel volg ik de opleiding HBO-ICT, waarin ik mij verder ontwikkel in IT-oplossingen, systemen en netwerken binnen professionele omgevingen.",
      "I am currently studying ICT (HBO), where I continue to develop in IT solutions, systems and networks in professional environments.",
      "Actualmente curso el grado de TIC (HBO), en el que sigo formándome en soluciones de TI, sistemas y redes en entornos profesionales.",
      "Derzeit studiere ich ICT (HBO) und entwickle mich weiter in IT-Lösungen, Systemen und Netzwerken in professionellen Umgebungen.");
  add("Tijdens deze opleiding heb ik kennis en praktijkervaring opgedaan op het gebied van IT-beheer, netwerken en systeembeheer. Ik heb gewerkt met het installeren, configureren en onderhouden van hardware en software binnen professionele IT-omgevingen.",
      "During this programme I gained knowledge and hands-on experience in IT management, networking and system administration. I worked on installing, configuring and maintaining hardware and software in professional IT environments.",
      "Durante esta formación adquirí conocimientos y experiencia práctica en gestión de TI, redes y administración de sistemas. Trabajé instalando, configurando y manteniendo hardware y software en entornos de TI profesionales.",
      "Während dieser Ausbildung habe ich Wissen und praktische Erfahrung in IT-Betrieb, Netzwerken und Systemadministration gesammelt. Ich habe Hardware und Software in professionellen IT-Umgebungen installiert, konfiguriert und gewartet.");
  add("In 2022 heb ik het VMBO afgerond met het vakkenpakket Eco-Bio, met de extra vakken Mediavormgeving, Nederlands, Rekenen en Engels.",
      "In 2022 I completed VMBO with the Economics & Biology subject package, plus the extra subjects Media Design, Dutch, Mathematics and English.",
      "En 2022 terminé el VMBO con el paquete de asignaturas de Economía y Biología, con las asignaturas adicionales de Diseño de medios, Neerlandés, Matemáticas e Inglés.",
      "2022 habe ich das VMBO mit dem Fächerpaket Wirtschaft & Biologie abgeschlossen, mit den Zusatzfächern Mediengestaltung, Niederländisch, Rechnen und Englisch.");
  add("Netwerken", "Networking", "Redes", "Netzwerke");
  add("IT-apparatuur", "IT equipment", "Equipos informáticos", "IT-Geräte");
  add("Computersystemen", "Computer systems", "Sistemas informáticos", "Computersysteme");
  add("Klantcontact", "Customer contact", "Trato con clientes", "Kundenkontakt");

  /* ---------- Vaardigheden ---------- */
  add("Wat ik kan", "What I can do", "Lo que sé hacer", "Was ich kann");
  add("Een overzicht van mijn technische bagage, verdeeld in categorieën.", "An overview of my technical background, divided into categories.", "Un resumen de mi bagaje técnico, dividido en categorías.", "Ein Überblick über meine technischen Kenntnisse, nach Kategorien geordnet.");
  add("IT & Netwerken", "IT & Networking", "TI y redes", "IT & Netzwerke");
  add("Programmeren", "Programming", "Programación", "Programmieren");
  add("Ontwikkeling", "Development", "Desarrollo", "Entwicklung");
  add("Tools & Technologie", "Tools & Technology", "Herramientas y tecnología", "Tools & Technologie");
  add("IT-beheer en support", "IT management and support", "Gestión y soporte de TI", "IT-Betrieb und Support");
  add("Netwerkbeheer", "Network management", "Administración de redes", "Netzwerkadministration");
  add("Gebruikers- en systeembeheer", "User and system administration", "Administración de usuarios y sistemas", "Benutzer- und Systemadministration");
  add("Storingen analyseren en oplossen", "Analysing and resolving faults", "Análisis y resolución de incidencias", "Störungen analysieren und beheben");
  add("Installeren, configureren en onderhouden van hardware en software.", "Installing, configuring and maintaining hardware and software.", "Instalar, configurar y mantener hardware y software.", "Installation, Konfiguration und Wartung von Hard- und Software.");
  add("Netwerken opzetten, configureren en controleren.", "Setting up, configuring and checking networks.", "Montar, configurar y revisar redes.", "Netzwerke einrichten, konfigurieren und überprüfen.");
  add("Beheer van gebruikers en systemen in professionele IT-omgevingen.", "Managing users and systems in professional IT environments.", "Gestión de usuarios y sistemas en entornos de TI profesionales.", "Verwaltung von Benutzern und Systemen in professionellen IT-Umgebungen.");
  add("Problemen opsporen, analyseren en verhelpen.", "Tracking down, analysing and fixing problems.", "Detectar, analizar y solucionar problemas.", "Probleme aufspüren, analysieren und beheben.");
  add("Behaald certificaat op het gebied van netwerken.", "Certificate earned in the field of networking.", "Certificado obtenido en el ámbito de las redes.", "Erworbenes Zertifikat im Bereich Netzwerke.");
  add("Ervaring met Microsoft 365 uit opleiding en stage.", "Experience with Microsoft 365 from my studies and internship.", "Experiencia con Microsoft 365 de la formación y las prácticas.", "Erfahrung mit Microsoft 365 aus Ausbildung und Praktikum.");
  add("Webontwikkeling", "Web development", "Desarrollo web", "Webentwicklung");
  add("Discord-bots", "Discord bots", "Bots de Discord", "Discord-Bots");
  add("FiveM-ontwikkeling", "FiveM development", "Desarrollo para FiveM", "FiveM-Entwicklung");
  add("API-ontwikkeling", "API development", "Desarrollo de API", "API-Entwicklung");
  add("Visual Studio Code", "Visual Studio Code", "Visual Studio Code", "Visual Studio Code");
  add("[Korte omschrijving van jouw ervaring met Python.]", "[Short description of your experience with Python.]", "[Breve descripción de tu experiencia con Python.]", "[Kurze Beschreibung deiner Erfahrung mit Python.]");
  add("[Korte omschrijving van jouw ervaring met JavaScript.]", "[Short description of your experience with JavaScript.]", "[Breve descripción de tu experiencia con JavaScript.]", "[Kurze Beschreibung deiner Erfahrung mit JavaScript.]");
  add("[Korte omschrijving van jouw ervaring met HTML.]", "[Short description of your experience with HTML.]", "[Breve descripción de tu experiencia con HTML.]", "[Kurze Beschreibung deiner Erfahrung mit HTML.]");
  add("[Korte omschrijving van jouw ervaring met CSS.]", "[Short description of your experience with CSS.]", "[Breve descripción de tu experiencia con CSS.]", "[Kurze Beschreibung deiner Erfahrung mit CSS.]");
  add("[Wat bouw je zoal voor het web?]", "[What do you build for the web?]", "[¿Qué creas para la web?]", "[Was entwickelst du für das Web?]");
  add("[Wat voor bots heb je gebouwd?]", "[What kind of bots have you built?]", "[¿Qué tipo de bots has creado?]", "[Welche Bots hast du gebaut?]");
  add("[Wat heb je voor FiveM gemaakt?]", "[What have you made for FiveM?]", "[¿Qué has creado para FiveM?]", "[Was hast du für FiveM entwickelt?]");
  add("[Welke API's heb je gebouwd of gebruikt?]", "[Which APIs have you built or used?]", "[¿Qué API has creado o usado?]", "[Welche APIs hast du gebaut oder genutzt?]");
  add("[Hoe gebruik je Git?]", "[How do you use Git?]", "[¿Cómo usas Git?]", "[Wie nutzt du Git?]");
  add("[Hoe gebruik je GitHub?]", "[How do you use GitHub?]", "[¿Cómo usas GitHub?]", "[Wie nutzt du GitHub?]");
  add("[Hoe gebruik je deze editor?]", "[How do you use this editor?]", "[¿Cómo usas este editor?]", "[Wie nutzt du diesen Editor?]");
  add("[Hoe gebruik je Discord voor je werk?]", "[How do you use Discord for your work?]", "[¿Cómo usas Discord en tu trabajo?]", "[Wie nutzt du Discord für deine Arbeit?]");
  add("[Wat is je ervaring met Linux?]", "[What is your experience with Linux?]", "[¿Qué experiencia tienes con Linux?]", "[Welche Erfahrung hast du mit Linux?]");
  add("Niveau", "Level", "Nivel", "Niveau");
  add("procent", "percent", "por ciento", "Prozent");

  /* ---------- Meer-kaarten op Home ---------- */
  add("Meer", "More", "Más", "Mehr");
  add("Ontdek meer", "Discover more", "Descubre más", "Mehr entdecken");
  add("Een overzicht van de dingen die ik heb gebouwd, met filters en details per project.",
      "An overview of the things I have built, with filters and details per project.",
      "Un resumen de lo que he creado, con filtros y detalles de cada proyecto.",
      "Ein Überblick über das, was ich gebaut habe, mit Filtern und Details zu jedem Projekt.");
  add("Naar projecten", "Go to projects", "Ir a proyectos", "Zu den Projekten");
  add("Mijn certificaten, diploma's en belangrijke mijlpalen.", "My certificates, diplomas and important milestones.", "Mis certificados, títulos e hitos importantes.", "Meine Zertifikate, Diplome und wichtige Meilensteine.");
  add("Naar certificaten", "Go to certificates", "Ir a certificados", "Zu den Zertifikaten");
  add("Wat ik doe buiten mijn werk: zeilen, gamen en meer.", "What I do outside of work: sailing, gaming and more.", "Lo que hago fuera del trabajo: navegar, jugar y más.", "Was ich außerhalb der Arbeit mache: Segeln, Gaming und mehr.");
  add("Naar interesses", "Go to interests", "Ir a intereses", "Zu den Interessen");
  add("Een vraag of samenwerken? Neem gerust contact met me op.", "A question or want to work together? Feel free to get in touch.", "¿Una pregunta o quieres colaborar? No dudes en ponerte en contacto conmigo.", "Eine Frage oder Lust auf Zusammenarbeit? Melde dich gerne bei mir.");
  add("Naar contact", "Go to contact", "Ir a contacto", "Zum Kontakt");

  /* ---------- Projecten ---------- */
  add("Dingen die ik heb gebouwd", "Things I have built", "Cosas que he creado", "Dinge, die ich gebaut habe");
  add("Filter projecten", "Filter projects", "Filtrar proyectos", "Projekte filtern");
  add("Alles", "All", "Todo", "Alle");
  add("Software", "Software", "Software", "Software");
  add("Overig", "Other", "Otros", "Sonstiges");
  add("Geen projecten in deze categorie.", "No projects in this category.", "No hay proyectos en esta categoría.", "Keine Projekte in dieser Kategorie.");
  add("Bekijk project", "View project", "Ver proyecto", "Projekt ansehen");
  add("Open project", "Open project", "Abrir proyecto", "Projekt öffnen");
  add("Projectafbeelding van", "Project image of", "Imagen del proyecto", "Projektbild von");
  add("Afbeelding van", "Image of", "Imagen de", "Bild von");
  add("Project 01", "Project 01", "Proyecto 01", "Projekt 01");
  add("Project 02", "Project 02", "Proyecto 02", "Projekt 02");
  add("Project 03", "Project 03", "Proyecto 03", "Projekt 03");
  add("Project 04", "Project 04", "Proyecto 04", "Projekt 04");
  add("Actief", "Active", "Activo", "Aktiv");
  add("Voltooid", "Completed", "Completado", "Abgeschlossen");
  add("In ontwikkeling", "In development", "En desarrollo", "In Entwicklung");
  add("[Maand JAAR]", "[Month YEAR]", "[Mes AÑO]", "[Monat JAHR]");
  add("Korte beschrijving van het project.", "Short description of the project.", "Breve descripción del proyecto.", "Kurzbeschreibung des Projekts.");
  add("[Uitgebreide beschrijving: wat is het project, hoe is het ontstaan en hoe werkt het?]", "[Detailed description: what is the project, how did it come about and how does it work?]", "[Descripción detallada: ¿qué es el proyecto, cómo surgió y cómo funciona?]", "[Ausführliche Beschreibung: Was ist das Projekt, wie ist es entstanden und wie funktioniert es?]");
  add("[Uitgebreide beschrijving van dit webproject.]", "[Detailed description of this web project.]", "[Descripción detallada de este proyecto web.]", "[Ausführliche Beschreibung dieses Webprojekts.]");
  add("[Uitgebreide beschrijving van dit FiveM-project.]", "[Detailed description of this FiveM project.]", "[Descripción detallada de este proyecto de FiveM.]", "[Ausführliche Beschreibung dieses FiveM-Projekts.]");
  add("[Uitgebreide beschrijving van dit softwareproject.]", "[Detailed description of this software project.]", "[Descripción detallada de este proyecto de software.]", "[Ausführliche Beschreibung dieses Softwareprojekts.]");
  add("[Wat wilde je met dit project bereiken?]", "[What did you want to achieve with this project?]", "[¿Qué querías conseguir con este proyecto?]", "[Was wolltest du mit diesem Projekt erreichen?]");
  add("[Functie 1]", "[Feature 1]", "[Función 1]", "[Funktion 1]");
  add("[Functie 2]", "[Feature 2]", "[Función 2]", "[Funktion 2]");
  add("[Functie 3]", "[Feature 3]", "[Función 3]", "[Funktion 3]");
  add("[Wat is het resultaat? Denk aan gebruikers, prestaties of wat je ervan leerde.]", "[What is the result? Think of users, performance or what you learned.]", "[¿Cuál es el resultado? Piensa en usuarios, rendimiento o lo que aprendiste.]", "[Was ist das Ergebnis? Denke an Nutzer, Leistung oder was du gelernt hast.]");
  add("[Wat is het resultaat?]", "[What is the result?]", "[¿Cuál es el resultado?]", "[Was ist das Ergebnis?]");
  add("Bekijk op GitHub", "View on GitHub", "Ver en GitHub", "Auf GitHub ansehen");
  add("Live demo", "Live demo", "Demo en vivo", "Live-Demo");
  add("Bekijk website", "View website", "Ver sitio web", "Website ansehen");
  add("Nog geen link ingesteld", "No link set yet", "Aún no hay enlace", "Noch kein Link hinterlegt");
  add("Doel van het project", "Project goal", "Objetivo del proyecto", "Ziel des Projekts");
  add("Functies", "Features", "Funciones", "Funktionen");
  add("Technologieën", "Technologies", "Tecnologías", "Technologien");
  add("Resultaat", "Result", "Resultado", "Ergebnis");
  add("Links", "Links", "Enlaces", "Links");

  /* ---------- Certificaten ---------- */
  add("Certificaten & prestaties", "Certificates & achievements", "Certificados y logros", "Zertifikate & Leistungen");
  add("Diploma's, cursussen, certificaten en belangrijke mijlpalen.", "Diplomas, courses, certificates and important milestones.", "Títulos, cursos, certificados e hitos importantes.", "Diplome, Kurse, Zertifikate und wichtige Meilensteine.");
  add("Microsoft-certificaat", "Microsoft certificate", "Certificado de Microsoft", "Microsoft-Zertifikat");
  add("VMBO-diploma Eco-Bio", "VMBO diploma Economics & Biology", "Título VMBO de Economía y Biología", "VMBO-Diplom Wirtschaft & Biologie");
  add("Via ROC", "Via ROC", "A través del ROC", "Über das ROC");
  add("Microsoft (o.a. Microsoft 365)", "Microsoft (incl. Microsoft 365)", "Microsoft (entre otros Microsoft 365)", "Microsoft (u. a. Microsoft 365)");
  add("Behaald tijdens de opleiding IT System and Devices.", "Earned during the IT System and Devices programme.", "Obtenido durante la formación IT System and Devices.", "Erworben während der Ausbildung IT System and Devices.");
  add("Afgerond met de extra vakken Mediavormgeving, Nederlands, Rekenen en Engels.", "Completed with the extra subjects Media Design, Dutch, Mathematics and English.", "Terminado con las asignaturas adicionales de Diseño de medios, Neerlandés, Matemáticas e Inglés.", "Abgeschlossen mit den Zusatzfächern Mediengestaltung, Niederländisch, Rechnen und Englisch.");

  /* ---------- Interesses ---------- */
  add("Buiten mijn werk", "Outside of work", "Fuera del trabajo", "Außerhalb der Arbeit");
  add("Waar ik energie van krijg zodra de laptop dichtgaat.", "What gives me energy once the laptop closes.", "Lo que me da energía en cuanto cierro el portátil.", "Was mir Energie gibt, sobald der Laptop zugeklappt ist.");
  add("Zeilen", "Sailing", "Vela", "Segeln");
  add("Gamen", "Gaming", "Videojuegos", "Gaming");
  add("Technologie", "Technology", "Tecnología", "Technologie");
  add("Ik geef zeilles als I2-instructeur bij De Randmeren Zeilschool.", "I teach sailing as an I2 instructor at the De Randmeren sailing school.", "Doy clases de vela como instructor I2 en la escuela De Randmeren.", "Ich gebe als I2-Instruktor Segelunterricht an der Segelschule De Randmeren.");
  add("[Welke games speel je graag?]", "[Which games do you enjoy playing?]", "[¿A qué juegos te gusta jugar?]", "[Welche Spiele spielst du gern?]");
  add("Mijn opleiding en werk draaien om IT, systemen en netwerken.", "My studies and work revolve around IT, systems and networks.", "Mi formación y mi trabajo giran en torno a TI, sistemas y redes.", "Meine Ausbildung und Arbeit drehen sich um IT, Systeme und Netzwerke.");
  add("Ik bouw in mijn vrije tijd eigen projecten.", "I build my own projects in my spare time.", "Creo mis propios proyectos en mi tiempo libre.", "In meiner Freizeit entwickle ich eigene Projekte.");

  /* ---------- Contact ---------- */
  add("Neem contact op", "Get in touch", "Ponte en contacto", "Kontakt aufnehmen");
  add("Heb je een vraag, een idee of wil je samenwerken? Stuur me gerust een bericht. Ik reageer zo snel mogelijk.",
      "Do you have a question, an idea or want to collaborate? Feel free to send me a message. I'll reply as soon as possible.",
      "¿Tienes una pregunta, una idea o quieres colaborar? Envíame un mensaje cuando quieras. Responderé lo antes posible.",
      "Hast du eine Frage, eine Idee oder möchtest du zusammenarbeiten? Schreib mir gerne eine Nachricht. Ich antworte so schnell wie möglich.");
  add("Naam", "Name", "Nombre", "Name");
  add("E-mailadres", "Email address", "Correo electrónico", "E-Mail-Adresse");
  add("Onderwerp", "Subject", "Asunto", "Betreff");
  add("Bericht", "Message", "Mensaje", "Nachricht");
  add("Versturen", "Send", "Enviar", "Senden");
  add("Jouw naam", "Your name", "Tu nombre", "Dein Name");
  add("jij@voorbeeld.nl", "you@example.com", "tu@ejemplo.com", "du@beispiel.de");
  add("Waar gaat het over?", "What is it about?", "¿De qué se trata?", "Worum geht es?");
  add("Schrijf hier je bericht…", "Write your message here…", "Escribe aquí tu mensaje…", "Schreibe hier deine Nachricht…");
  add("Vul je naam in (minimaal 2 tekens).", "Enter your name (at least 2 characters).", "Introduce tu nombre (mínimo 2 caracteres).", "Gib deinen Namen ein (mindestens 2 Zeichen).");
  add("Vul je e-mailadres in.", "Enter your email address.", "Introduce tu correo electrónico.", "Gib deine E-Mail-Adresse ein.");
  add("Dit lijkt geen geldig e-mailadres.", "This does not look like a valid email address.", "Esto no parece un correo electrónico válido.", "Das sieht nicht nach einer gültigen E-Mail-Adresse aus.");
  add("Vul een onderwerp in (minimaal 3 tekens).", "Enter a subject (at least 3 characters).", "Introduce un asunto (mínimo 3 caracteres).", "Gib einen Betreff ein (mindestens 3 Zeichen).");
  add("Je bericht moet minimaal 10 tekens bevatten.", "Your message must contain at least 10 characters.", "Tu mensaje debe tener al menos 10 caracteres.", "Deine Nachricht muss mindestens 10 Zeichen enthalten.");
  add("Controleer de gemarkeerde velden en probeer het opnieuw.", "Please check the highlighted fields and try again.", "Revisa los campos marcados e inténtalo de nuevo.", "Bitte prüfe die markierten Felder und versuche es erneut.");
  add("Bezig met verzenden…", "Sending…", "Enviando…", "Wird gesendet…");
  add("Je bericht is succesvol verzonden.", "Your message has been sent successfully.", "Tu mensaje se ha enviado correctamente.", "Deine Nachricht wurde erfolgreich gesendet.");
  add("Er is iets misgegaan bij het verzenden. Probeer het later opnieuw.", "Something went wrong while sending. Please try again later.", "Algo salió mal al enviar. Inténtalo de nuevo más tarde.", "Beim Senden ist etwas schiefgelaufen. Bitte versuche es später erneut.");
  add("Klik om te kopiëren", "Click to copy", "Haz clic para copiar", "Zum Kopieren klicken");
  add("klik om te kopiëren", "click to copy", "haz clic para copiar", "zum Kopieren klicken");
  add("Gekopieerd:", "Copied:", "Copiado:", "Kopiert:");
  add("Kopiëren mislukt. Gebruikersnaam:", "Copying failed. Username:", "No se pudo copiar. Nombre de usuario:", "Kopieren fehlgeschlagen. Benutzername:");
  add("(nog niet ingesteld)", "(not set yet)", "(aún sin configurar)", "(noch nicht eingerichtet)");
  add("Een persoonlijke digitale wereld over techniek, creativiteit en het bouwen van mooie dingen.",
      "A personal digital world about technology, creativity and building beautiful things.",
      "Un mundo digital personal sobre tecnología, creatividad y crear cosas bonitas.",
      "Eine persönliche digitale Welt über Technik, Kreativität und das Bauen schöner Dinge.");

  /* ---------- Discord-login ---------- */
  add("Inloggen met Discord", "Log in with Discord", "Iniciar sesión con Discord", "Mit Discord anmelden");
  add("Uitloggen", "Log out", "Cerrar sesión", "Abmelden");
  add("Ingelogd via Discord", "Logged in via Discord", "Sesión iniciada con Discord", "Über Discord angemeldet");
  add("Alleen voor geautoriseerde accounts.", "Only for authorised accounts.", "Solo para cuentas autorizadas.", "Nur für autorisierte Konten.");
  add("Je bent ingelogd.", "You are logged in.", "Has iniciado sesión.", "Du bist angemeldet.");
  add("Je bent uitgelogd.", "You are logged out.", "Has cerrado sesión.", "Du bist abgemeldet.");
  add("Dit Discord-account heeft geen toegang.", "This Discord account does not have access.", "Esta cuenta de Discord no tiene acceso.", "Dieses Discord-Konto hat keinen Zugriff.");
  add("Inloggen is geannuleerd.", "Login was cancelled.", "Se canceló el inicio de sesión.", "Die Anmeldung wurde abgebrochen.");
  add("Discord-login is nog niet ingesteld.", "Discord login has not been set up yet.", "El inicio de sesión con Discord aún no está configurado.", "Die Discord-Anmeldung ist noch nicht eingerichtet.");
  add("Inloggen is mislukt. Probeer het opnieuw.", "Login failed. Please try again.", "No se pudo iniciar sesión. Inténtalo de nuevo.", "Anmeldung fehlgeschlagen. Bitte versuche es erneut.");

  /* ---------- Privé ---------- */
  add("Privé", "Private", "Privado", "Privat");
  add("Jouw privéruimte", "Your private space", "Tu espacio privado", "Dein privater Bereich");
  add("Alleen accounts met de juiste rang in de Discord-server kunnen deze pagina zien.", "Only accounts with the right role in the Discord server can see this page.", "Solo las cuentas con el rol adecuado en el servidor de Discord pueden ver esta página.", "Nur Konten mit der richtigen Rolle auf dem Discord-Server können diese Seite sehen.");
  add("Welkom", "Welcome", "Bienvenido", "Willkommen");
  add("[Zet hier je privé-inhoud neer: notities, links, bestanden of alles wat alleen jij en je Discord-rang mogen zien.]", "[Put your private content here: notes, links, files or anything only you and your Discord role may see.]", "[Pon aquí tu contenido privado: notas, enlaces, archivos o cualquier cosa que solo tú y tu rol de Discord podáis ver.]", "[Lege hier deine privaten Inhalte ab: Notizen, Links, Dateien oder alles, was nur du und deine Discord-Rolle sehen dürfen.]");
  add("[Privé blok 1]", "[Private block 1]", "[Bloque privado 1]", "[Privater Block 1]");
  add("[Privé blok 2]", "[Private block 2]", "[Bloque privado 2]", "[Privater Block 2]");
  add("[Privé blok 3]", "[Private block 3]", "[Bloque privado 3]", "[Privater Block 3]");
  add("[Beschrijving van dit blok.]", "[Description of this block.]", "[Descripción de este bloque.]", "[Beschreibung dieses Blocks.]");
  add("Log eerst in om deze pagina te bekijken.", "Please log in first to view this page.", "Inicia sesión primero para ver esta página.", "Bitte melde dich zuerst an, um diese Seite zu sehen.");
  add("Je hebt niet de juiste rang voor deze pagina.", "You do not have the right role for this page.", "No tienes el rol adecuado para esta página.", "Du hast nicht die richtige Rolle für diese Seite.");
  add("Je sessie is verlopen. Log opnieuw in.", "Your session has expired. Please log in again.", "Tu sesión ha caducado. Vuelve a iniciar sesión.", "Deine Sitzung ist abgelaufen. Bitte melde dich erneut an.");

  /* ---------- Privé sites ---------- */
  add("Privé sites", "Private sites", "Sitios privados", "Private Seiten");
  add("Openen", "Open", "Abrir", "Öffnen");
  add("Link nog niet ingesteld", "Link not set yet", "Enlace aún sin configurar", "Link noch nicht eingerichtet");

  add("Dit onderdeel is alleen voor de eigenaar van de site.", "This section is only for the owner of the site.", "Esta sección es solo para el propietario del sitio.", "Dieser Bereich ist nur für den Inhaber der Website.");

  /* ---------- Vaardigheden: Programmeren ---------- */
  add("Verschillende apps en Discord-bots.", "Various apps and Discord bots.", "Varias aplicaciones y bots de Discord.", "Verschiedene Apps und Discord-Bots.");
  add("Minecraft-serverontwikkeling", "Minecraft server development", "Desarrollo de servidores de Minecraft", "Minecraft-Server-Entwicklung");
  add("Discord-botontwikkeling", "Discord bot development", "Desarrollo de bots de Discord", "Discord-Bot-Entwicklung");
  add("Bouwen van verschillende websites voor o.a. [srp-gaming.nl](https://srp-gaming.nl).", "Building various websites for, among others, [srp-gaming.nl](https://srp-gaming.nl).", "Creación de varios sitios web para, entre otros, [srp-gaming.nl](https://srp-gaming.nl).", "Entwicklung verschiedener Websites, unter anderem für [srp-gaming.nl](https://srp-gaming.nl).");
  add("Stijl en ontwerp voor verschillende projecten. Meer info vind je bij [Projecten](/projecten).", "Styling and design for various projects. More info under [Projects](/projecten).", "Estilo y diseño para varios proyectos. Más información en [Proyectos](/projecten).", "Styling und Design für verschiedene Projekte. Mehr dazu unter [Projekte](/projecten).");

  /* ---------- Vaardigheden: Ontwikkeling ---------- */
  add("Het creëren van verschillende sites, zoals [vandamvincent.nl](https://www.vandamvincent.nl) en [politie-eenheid.nl](https://www.politie-eenheid.nl)", "Building various websites, such as [vandamvincent.nl](https://www.vandamvincent.nl) and [politie-eenheid.nl](https://www.politie-eenheid.nl)", "Creación de varios sitios web, como [vandamvincent.nl](https://www.vandamvincent.nl) y [politie-eenheid.nl](https://www.politie-eenheid.nl)", "Entwicklung verschiedener Websites, zum Beispiel [vandamvincent.nl](https://www.vandamvincent.nl) und [politie-eenheid.nl](https://www.politie-eenheid.nl)");
  add("CWO-uitlegsysteem (in ontwikkeling)", "CWO explanation system (in development)", "Sistema de explicación CWO (en desarrollo)", "CWO-Erklärsystem (in Entwicklung)");
  add("Verbetering en meedenken aan andere sites", "Improving and contributing ideas to other websites", "Mejora y aportación de ideas en otros sitios web", "Verbesserung und Mitdenken bei anderen Websites");
  add("Politie-FiveM-netwerk", "Police FiveM network", "Red de FiveM de policía", "Polizei-FiveM-Netzwerk");
  add("Inklokbots", "Clock-in bots", "Bots de fichaje", "Einstempel-Bots");
  add("Algemene informatiebots", "General information bots", "Bots de información general", "Allgemeine Informations-Bots");
  add("hg_tuning (voertuigtuning-script)", "hg_tuning (vehicle tuning script)", "hg_tuning (script de tuneo de vehículos)", "hg_tuning (Fahrzeug-Tuning-Skript)");
  add("hg_weather (eigen weerscript)", "hg_weather (custom weather script)", "hg_weather (script de clima propio)", "hg_weather (eigenes Wetterskript)");
  add("hg_jobs (eigen jobcreator, in ontwikkeling)", "hg_jobs (custom job creator, in development)", "hg_jobs (creador de trabajos propio, en desarrollo)", "hg_jobs (eigener Job-Creator, in Entwicklung)");

  /* ---------- Vaardigheden: Tools & Technologie ---------- */
  add("Ik gebruik GitHub voor het beheren, versioneren en structureren van mijn projecten. Door Git te gebruiken kan ik wijzigingen bijhouden, eerdere versies terugzetten en veilig experimenteren met nieuwe functionaliteiten. Daarnaast gebruik ik GitHub om projecten overzichtelijk te bewaren en mijn voortgang tijdens het ontwikkelen bij te houden.", "I use GitHub to manage, version and structure my projects. With Git I can track changes, restore earlier versions and safely experiment with new features. I also use GitHub to keep my projects neatly stored and to follow my progress while developing.", "Uso GitHub para gestionar, versionar y estructurar mis proyectos. Con Git puedo seguir los cambios, restaurar versiones anteriores y experimentar con nuevas funciones de forma segura. Además, uso GitHub para mantener mis proyectos bien organizados y seguir mi progreso durante el desarrollo.", "Ich nutze GitHub, um meine Projekte zu verwalten, zu versionieren und zu strukturieren. Mit Git kann ich Änderungen nachverfolgen, frühere Versionen wiederherstellen und sicher mit neuen Funktionen experimentieren. Außerdem verwende ich GitHub, um meine Projekte übersichtlich aufzubewahren und meinen Fortschritt während der Entwicklung festzuhalten.");
  add("Visual Studio Code is mijn belangrijkste ontwikkelomgeving. Ik gebruik het voornamelijk voor het ontwikkelen en aanpassen van backend-bestanden, maar ook voor het werken aan complete projecten. Dankzij de verschillende extensies en ingebouwde functies kan ik mijn code overzichtelijk beheren, fouten opsporen en efficiënt aan mijn projecten werken.", "Visual Studio Code is my main development environment. I mainly use it to build and modify backend files, but also to work on complete projects. Thanks to its many extensions and built-in features I can manage my code clearly, track down errors and work efficiently on my projects.", "Visual Studio Code es mi principal entorno de desarrollo. Lo uso sobre todo para desarrollar y modificar archivos de backend, pero también para trabajar en proyectos completos. Gracias a sus numerosas extensiones y funciones integradas puedo gestionar mi código con claridad, detectar errores y trabajar de forma eficiente en mis proyectos.", "Visual Studio Code ist meine wichtigste Entwicklungsumgebung. Ich nutze es vor allem, um Backend-Dateien zu entwickeln und anzupassen, aber auch für die Arbeit an kompletten Projekten. Dank der vielen Erweiterungen und integrierten Funktionen kann ich meinen Code übersichtlich verwalten, Fehler aufspüren und effizient an meinen Projekten arbeiten.");
  add("Discord speelt een belangrijke rol binnen verschillende van mijn projecten. Ik gebruik Discord niet alleen voor communicatie, maar integreer het ook in mijn eigen systemen en bots. Denk hierbij aan authenticatie, beveiliging, logging, ticket-systemen, automatische rollen en verschillende vormen van serverbeheer. Hierdoor heb ik veel ervaring opgedaan met het koppelen van Discord aan mijn eigen applicaties en automatiseringen.", "Discord plays an important role in several of my projects. I use Discord not only for communication, but also integrate it into my own systems and bots. Think of authentication, security, logging, ticket systems, automatic roles and various forms of server management. As a result I have gained a lot of experience connecting Discord to my own applications and automations.", "Discord desempeña un papel importante en varios de mis proyectos. No lo uso solo para comunicarme, sino que también lo integro en mis propios sistemas y bots. Por ejemplo: autenticación, seguridad, registros, sistemas de tickets, roles automáticos y diversas formas de administración de servidores. Así he adquirido mucha experiencia conectando Discord con mis propias aplicaciones y automatizaciones.", "Discord spielt in mehreren meiner Projekte eine wichtige Rolle. Ich nutze Discord nicht nur zur Kommunikation, sondern binde es auch in meine eigenen Systeme und Bots ein. Dazu gehören Authentifizierung, Sicherheit, Logging, Ticketsysteme, automatische Rollen und verschiedene Formen der Serververwaltung. Dadurch habe ich viel Erfahrung darin gesammelt, Discord mit meinen eigenen Anwendungen und Automatisierungen zu verbinden.");
  add("Ik heb ervaring opgedaan met verschillende Linux-distributies, waaronder Ubuntu en Kali Linux. Hierbij heb ik kennisgemaakt met het werken via de terminal, het beheren van bestanden en systemen en verschillende Linux-commando's. Met Kali Linux heb ik daarnaast kennisgemaakt met verschillende tools en technieken die binnen cybersecurity en netwerkbeveiliging worden gebruikt.", "I have gained experience with various Linux distributions, including Ubuntu and Kali Linux. In doing so I became familiar with working in the terminal, managing files and systems, and various Linux commands. With Kali Linux I also got to know various tools and techniques used in cybersecurity and network security.", "He adquirido experiencia con varias distribuciones de Linux, entre ellas Ubuntu y Kali Linux. Así me he familiarizado con el trabajo en la terminal, la gestión de archivos y sistemas y diversos comandos de Linux. Con Kali Linux, además, conocí distintas herramientas y técnicas que se usan en ciberseguridad y seguridad de redes.", "Ich habe Erfahrung mit verschiedenen Linux-Distributionen gesammelt, darunter Ubuntu und Kali Linux. Dabei habe ich mich mit dem Arbeiten im Terminal, der Verwaltung von Dateien und Systemen und verschiedenen Linux-Befehlen vertraut gemacht. Mit Kali Linux habe ich außerdem verschiedene Werkzeuge und Techniken kennengelernt, die in der Cybersicherheit und Netzwerksicherheit eingesetzt werden.");

  /* ---------- Juridisch ---------- */
  add("Privacyverklaring", "Privacy policy", "Política de privacidad", "Datenschutzerklärung");
  add("Disclaimer", "Disclaimer", "Aviso legal", "Haftungsausschluss");
  add("Juridisch", "Legal", "Legal", "Rechtliches");
  add("Hoe ik met je gegevens omga", "How I handle your data", "Cómo trato tus datos", "Wie ich mit deinen Daten umgehe");
  add("Voorwaarden voor het gebruik van deze site", "Terms for using this site", "Condiciones de uso de este sitio", "Nutzungsbedingungen dieser Website");
  add("Laatst bijgewerkt: 30 september 2026", "Last updated: 30 September 2026", "Última actualización: 30 de septiembre de 2026", "Zuletzt aktualisiert: 30. September 2026");
  add("Deze tekst is alleen in het Nederlands beschikbaar.", "This text is only available in Dutch.", "Este texto solo está disponible en neerlandés.", "Dieser Text ist nur auf Niederländisch verfügbar.");

  /* ---------- Periodes zoals "mrt 2023 — heden" worden automatisch vertaald ---------- */
  const MAANDEN = {
    en: { jan: "Jan", feb: "Feb", mrt: "Mar", apr: "Apr", mei: "May", jun: "Jun", jul: "Jul", aug: "Aug", sep: "Sep", okt: "Oct", nov: "Nov", dec: "Dec", heden: "present", tot: "until" },
    es: { jan: "ene", feb: "feb", mrt: "mar", apr: "abr", mei: "may", jun: "jun", jul: "jul", aug: "ago", sep: "sep", okt: "oct", nov: "nov", dec: "dic", heden: "actualidad", tot: "hasta" },
    de: { jan: "Jan", feb: "Feb", mrt: "Mär", apr: "Apr", mei: "Mai", jun: "Jun", jul: "Jul", aug: "Aug", sep: "Sep", okt: "Okt", nov: "Nov", dec: "Dez", heden: "heute", tot: "bis" }
  };
  const PERIODE = /^(?:jan|feb|mrt|apr|mei|jun|jul|aug|sep|okt|nov|dec|tot|heden|\d{4}|[—–-]|\s)+$/i;

  const talen = [["nl", "Nederlands"], ["en", "English"], ["es", "Español"], ["de", "Deutsch"]];

  /** Vertaalt een Nederlandse tekst naar de gekozen taal (valt terug op het origineel). */
  function translate(tekst, lang) {
    if (lang === "nl" || !tekst) return tekst;
    const e = D[tekst];
    if (e && e[lang]) return e[lang];
    if (tekst.length < 40 && PERIODE.test(tekst)) {
      return tekst.replace(/[a-z]+/gi, w => MAANDEN[lang][w.toLowerCase()] || w);
    }
    return tekst;
  }
  return { talen, translate, dict: D };
})();
