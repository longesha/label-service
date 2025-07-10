
const questions = [
  {
    question: "Qu’est-ce qu’un mot de passe fort ?",
    options: ["123456", "Azerty", "P@ssw0rd!2025"],
    answer: 2
  },
  {
    question: "Que faire si on est victime de cyberharcèlement ?",
    options: ["Ignorer", "Répondre avec des insultes", "Parler à un adulte et faire une capture d’écran"],
    answer: 2
  },
  {
    question: "Quel est un bon réflexe de sécurité ?",
    options: ["Donner son mot de passe à un ami", "Utiliser un antivirus", "Utiliser toujours le même mot de passe"],
    answer: 1
  },
  {
    question: "Pourquoi limiter son temps d’écran ?",
    options: ["Pour mieux dormir", "Pour être à la mode", "Pour gagner plus d’amis"],
    answer: 0
  },
  {
    question: "Que signifie 'protection des données' ?",
    options: ["Partager ses infos", "Masquer ses informations personnelles", "Publier tout en ligne"],
    answer: 1
  },
  {
    question: "Comment reconnaître un lien suspect ?",
    options: ["Il a une faute dans l'adresse", "Il vient d’un inconnu", "Les deux"],
    answer: 2
  },
  {
    question: "Quel comportement est correct en ligne ?",
    options: ["Harceler quelqu’un", "Respecter les autres", "Partager les secrets des amis"],
    answer: 1
  },
  {
    question: "Quand faut-il changer son mot de passe ?",
    options: ["Jamais", "Quand il a été volé", "Tous les jours"],
    answer: 1
  },
  {
    question: "Que faire si une app demande trop d’autorisations ?",
    options: ["L’installer quand même", "Refuser et chercher une autre app", "L’envoyer à tout le monde"],
    answer: 1
  },
  {
    question: "Quel est un bon comportement numérique ?",
    options: ["Respecter la vie privée", "Tout publier", "Ignorer la sécurité"],
    answer: 0
  }
];

let currentQuestion = 0;

function demarrerQuiz() {
  currentQuestion = 0;
  afficherQuestion();
}

function afficherQuestion() {
  const quizZone = document.getElementById("quizZone");
  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    quizZone.innerHTML = `
      <p>${currentQuestion + 1}. ${q.question}</p>
      ${q.options.map((opt, i) =>
        `<button onclick="verifier(${i})">${opt}</button>`
      ).join("<br/>")}
    `;
  } else {
    quizZone.innerHTML = "<p>🎉 Vous avez terminé le quiz !</p>";
  }
}

function verifier(reponse) {
  const bonneReponse = questions[currentQuestion].answer;
  const quizZone = document.getElementById("quizZone");
  if (reponse === bonneReponse) {
    quizZone.innerHTML = "<p>✅ Bonne réponse !</p><button onclick='suivant()'>Question suivante</button>";
  } else {
    quizZone.innerHTML = "<p>❌ Mauvaise réponse. Essayez encore.</p><button onclick='afficherQuestion()'>Réessayer</button>";
  }
}

function suivant() {
  currentQuestion++;
  afficherQuestion();
}
