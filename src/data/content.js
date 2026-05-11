export const problems = [
  { id: 1, number: "01", title: "Du hast eine Webseite. Aber niemand findet sie.", description: "Auf Seite 2 bei Google zu sein ist dasselbe wie gar nicht zu existieren. 95% aller Klicks gehen an die ersten 5 Ergebnisse." },
  { id: 2, number: "02", title: "Leute besuchen deine Seite. Aber niemand schreibt an.", description: "Kein klarer Weg zur Anfrage, der Besucher geht, und du merkst es nie." },
  { id: 3, number: "03", title: "Auf dem Handy sieht die Seite komisch aus.", description: "60% aller Suchen kommen von Mobile. Ein Interessent googelt dich, und ist weg." },
  { id: 4, number: "04", title: "Du hast Geld für Design ausgegeben. Keine Anfragen.", description: "Schönes Design hilft nicht wenn das Fundament nicht für Google gebaut ist." },
];

export const compareRows = [
  { label: "Ladezeit",            them: "3–8 Sekunden",           us: "✓ Schnelle Ladezeiten" },
  { label: "Mobile",              them: "Template-Kompromisse",    us: "✓ Nativ gebaut" },
  { label: "Preis",               them: "CHF 5'000+",              us: "✓ Fair, nach Absprache" },
  { label: "Kontakt",             them: "Ticket-System",           us: "✓ Direkt per Mail" },
  { label: "Anpassungen",         them: "Kostenpflichtig extra",   us: "✓ Inklusive" },
  { label: "Transparente Preise", them: "Oft unklar",              us: "✓ Immer klar, vorher" },
  { label: "Risiko für dich",     them: "Vorauszahlung üblich",    us: "✓ Zahlung erst am Schluss" },
];

export const steps = [
  { number: "01", label: "ANFRAGE",   title: "Schreib uns",          description: "Per E-Mail oder Formular, wir antworten in 24h mit einem Angebot." },
  { number: "02", label: "KONZEPT",   title: "Wir planen",           description: "Struktur, Design, Preis. Du sagst Ja, erst dann fangen wir an." },
  { number: "03", label: "UMSETZUNG", title: "Wir bauen",            description: "Du gibst Feedback per Mail. Bis zum Schluss kannst du Nein sagen." },
  { number: "04", label: "LAUNCH",    title: "Fertig & bezahlt",     description: "Du bist zufrieden, gibst grünes Licht, erst dann wird bezahlt." },
];

export const teamMembers = [
  {
    id: 1,
    initials: "EB",
    name: "Enea Bächler",
    role: "Frontend, Backend & Design",
    schools: [
      "GIBB – Gewerblich-Industrielle Berufsschule Bern",
      "BBC – Berufsfachschule Bern",
    ],
    tags: ["React", "Spring Boot", "React Native", "Java", "Bash", "Design"],
    color: "green",
  },
  {
    id: 2,
    initials: "BG",
    name: "Ben Gasser",
    role: "Entwicklung & Umsetzung",
    schools: ["Gymnasium Kirchenfeld, Bern"],
    tags: ["JavaScript", "TypeScript", "HTML", "CSS"],
    color: "blue",
  },
];

export const faqs = [
  { id: 1, question: "Was kostet eine Webseite?", answer: "Es gibt keinen Fixpreis, der Preis richtet sich nach deinen Anforderungen und der Komplexität. Du bekommst ein konkretes Angebot bevor wir anfangen. Kein Angebot, kein Anfang." },
  { id: 2, question: "Was wenn mir das Ergebnis nicht gefällt?", answer: "Du kannst bis zum Schluss Nein sagen, ohne Kosten. Erst wenn du zufrieden bist und grünes Licht gibst wird bezahlt. Das ist unser Versprechen." },
  { id: 3, question: "Entstehen Kosten während der Planung?", answer: "Nein. Anfrage stellen, Planung, Konzept, alles kostenlos. Bezahlt wird erst am Ende wenn die Webseite fertig ist und du zufrieden bist." },
  { id: 4, question: "Wie lange dauert ein Projekt?", answer: "Typisch 3–5 Wochen. Alles läuft per E-Mail, kein Stress, kein Zeitdruck von unserer Seite." },
  { id: 5, question: "Kann ich Inhalte später selbst ändern?", answer: "Du schreibst uns was geändert werden soll, wir setzen es um. Schnell, unkompliziert, per Mail." },
  { id: 6, question: "Macht ihr auch Online-Shops?", answer: "Ja. Schreib uns was du brauchst, wir schauen gemeinsam was die beste Lösung ist." },
  { id: 7, question: "Ihr seid noch jung, kann ich euch vertrauen?", answer: "Wir sind jung, das bedeutet aktuelle Technologie, faire Preise und echter Einsatz. Dank unserem Nein-Prinzip trägst du kein Risiko: Du zahlst erst wenn du zufrieden bist." },
];
