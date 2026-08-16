document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));

  const projectSearch = document.getElementById("projectSearch");
  const projectCols = Array.from(document.querySelectorAll(".project-col"));
  const projectCards = Array.from(document.querySelectorAll(".project-card"));
  const projectCount = document.getElementById("projectCount");

  const updateProjectCount = () => {
    const visibleProjects = projectCols.filter((col) => col.style.display !== "none").length;
    projectCount.textContent = String(visibleProjects);
  };

  updateProjectCount();

  if (projectSearch) {
    projectSearch.addEventListener("input", (event) => {
      const query = event.target.value.trim().toLowerCase();

      projectCards.forEach((card, index) => {
        const content = card.textContent.toLowerCase();
        const tags = (card.getAttribute("data-tags") || "").toLowerCase();
        const isMatch = content.includes(query) || tags.includes(query);
        projectCols[index].style.display = isMatch ? "block" : "none";
      });

      updateProjectCount();
    });
  }

  const askAiRoot = document.getElementById("askCynthiaAI");
  const askAiLauncher = document.getElementById("askAiLauncher");
  const askAiPanel = document.getElementById("askAiPanel");
  const askAiClose = document.getElementById("askAiClose");
  const askAiBody = document.getElementById("askAiBody");
  const askAiForm = document.getElementById("askAiForm");
  const askAiInput = document.getElementById("askAiInput");
  const askAiSuggestions = document.getElementById("askAiSuggestions");
  const askAiNewChat = document.getElementById("askAiNewChat");

  if (!askAiRoot || !askAiLauncher || !askAiPanel || !askAiClose || !askAiBody || !askAiForm || !askAiInput || !askAiSuggestions) {
    return;
  }

  const storageKey = "ask-cynthia-ai-history";
  const askAiEndpoint = (document.body.dataset.askAiEndpoint || window.ASK_CYNTHIA_AI_ENDPOINT || "").trim();
  const welcomeMessage = [
    "👋 Bonjour !",
    "Je suis Ask Cynthia AI.",
    "",
    "Je peux vous parler :",
    "",
    "🚀 De mes projets",
    "🏆 De mes certifications",
    "💻 De mes compétences",
    "☁️ De mon expérience Databricks",
    "",
    "mais aussi :",
    "",
    "💬 De mes valeurs",
    "🌱 De mes passions",
    "🚀 De mes ambitions",
    "🌟 De mes inspirations",
    "❤️ De la personne que je suis",
    "",
    "Parce qu'un profil ne se résume pas uniquement à ce qu'il sait faire.",
    "",
    "Il raconte aussi qui il est.",
    "",
    "💡 Essayez :",
    "\"Pourquoi recruter Cynthia ?\"",
    "ou",
    "\"Quel est son rêve ?\""
  ].join("\n");

  const profile = {
    name: "Cynthia Sileu Kapnang",
    title: "AI & Data Engineer | GenAI, RAG & Multi-Agent Systems | Azure Databricks | Master Data Management"
  };

  const knowledgeBase = {
    whyHire: "Cynthia combine execution technique et vision metier: Data Engineering, GenAI et Gouvernance Data. Elle construit des solutions deployables, pas seulement des POC, avec un focus impact, fiabilite et adoption.",
    projects: "Elle a travaille sur RAISE, AELON, SAV GENIA, Data Quality IA et Hackathon Anthropic. Cas d'usage: RAG/LLM, orchestration multi-agent, evaluation IA, gouvernance et industrialisation sur Databricks.",
    databricks: "Experience Azure Databricks sur pipelines PySpark, orchestration IA, MLflow, Unity Catalog, model lifecycle, data governance et passage a l'echelle en environnement enterprise.",
    rag: "Oui. Cynthia travaille concretement sur RAG, LLM et Agentic AI: architecture de retrieval, evaluation des reponses, gouvernance des modeles et integration metier.",
    certifications: "Certifications: Databricks Fundamentals Accreditation, AI Practitioner, AI Explorer, Syndigo PIM & MDM, Microsoft Power BI Data Analyst Associate.",
    value: "Valeur ajoutee: transformer des besoins metier en produits Data & IA mesurables, robustes et gouvernes. Elle relie architecture, qualite des donnees, IA generative et impact business.",
    governance: "Expertise Data Governance: Data Quality, MDM, PIM, Syndigo, regles metier et traçabilite. Objectif: fiabiliser la donnee et securiser les usages IA en production.",
    cv: "Vous pouvez demander son CV via le bouton Recevoir mon CV dans la section hero ou contacter Cynthia par email pour un envoi direct: kapnangcynthia@gmail.com.",
    intro: `${profile.name}\n${profile.title}`,
    passions: "Au-dela de la technique, Cynthia est passionnee par les sujets qui relient innovation, impact concret et responsabilite. Elle aime apprendre sur l'IA appliquee, les systemes utiles aux equipes et les initiatives a impact collectif comme Ma Petite Planete.",
    learning: "Sa facon d'apprendre est tres pratique: elle alterne veille structuree, experimentation sur des mini-projets, puis consolidation via la documentation et des certifications ciblees. Son axe actuel: faire progresser ses competences en architecture agentique, evaluation IA et industrialisation.",
    dreams: "Son reve professionnel est de construire des produits Data & IA qui deviennent de vrais actifs strategiques pour les organisations: fiables, gouvernes, mesurables et utiles aux utilisateurs finaux. A moyen terme, elle se voit piloter des initiatives IA a fort impact metier.",
    challenge: "Un des defis qui l'a le plus fait grandir: passer de la realisation technique a la conception de solutions IA deployables de bout en bout, avec gouvernance, qualite de donnees et adoption metier. Cela lui a appris a penser produit autant que technique.",
    values: "Ses valeurs: curiosite, exigence, esprit d'equipe, transparence et impact utile. Elle choisit la Data et l'IA parce qu'elles permettent de resoudre des problemes concrets, d'ameliorer les decisions et de creer de la valeur durable.",
    workstyle: "Au quotidien, Cynthia travaille avec une logique claire: cadrer le besoin, prioriser la valeur, iterer vite, puis industrialiser proprement. Elle est souvent plus creative le matin pour la conception, puis orientee execution/collaboration l'apres-midi.",
    pride: "Sa plus grande fierte professionnelle est de transformer des idees complexes en solutions utilisables en production, avec des resultats mesurables. La reconnaissance Meilleure MPP Player illustre aussi son engagement personnel au-dela du cadre technique.",
    inspiration: "Cynthia est inspiree par les parcours de resilience, les personnes qui transforment les difficultes en opportunites, et les projets qui combinent technologie, impact humain et valeur durable.",
    book: "Le livre qui l'a le plus marquee est L'Alchimiste de Paulo Coelho, pour son message sur le courage de suivre sa legende personnelle et de poursuivre ses reves avec perseverance.",
    motto: "Sa devise: You did it. Une phrase simple qui rappelle la puissance de la perseverance et de la confiance en soi.",
    beliefs: "Une croyance guide son parcours: les obstacles sont souvent des opportunites de croissance. Avec constance, apprentissage et integrite, les resultats finissent par arriver.",
    dailyInspiration: "Au quotidien, elle est inspiree par les entrepreneurs a impact, les personnes qui reussissent malgre les obstacles et les initiatives qui utilisent la technologie pour ameliorer la vie des autres.",
    legacy: "La trace qu'elle souhaite laisser: des solutions utiles qui ameliorent concretement la vie des gens, et une contribution durable a des projets technologiques plus humains, plus responsables et plus inclusifs.",
    privacy: "Je peux partager des elements professionnels et authentiques sur Cynthia, mais je ne traite pas les sujets trop intimes, familiaux, sensibles ou confidentiels. Je peux en revanche repondre sur ses valeurs, son parcours, ses aspirations et sa facon de travailler."
  };

  const normalize = (text) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const containsAny = (value, keywords) => keywords.some((keyword) => value.includes(keyword));

  const createMessage = (role, text, options = {}) => {
    const wrapper = document.createElement("div");
    wrapper.className = `ask-ai-message ${role}`;

    const bubble = document.createElement("div");
    bubble.className = "ask-ai-bubble";
    bubble.textContent = text;

    wrapper.appendChild(bubble);
    askAiBody.appendChild(wrapper);

    if (options.persist !== false) {
      saveHistory();
    }

    scrollToBottom();
    return bubble;
  };

  const scrollToBottom = () => {
    askAiBody.scrollTop = askAiBody.scrollHeight;
  };

  const saveHistory = () => {
    const history = Array.from(askAiBody.querySelectorAll(".ask-ai-message")).map((node) => {
      const role = node.classList.contains("user") ? "user" : "assistant";
      const text = node.querySelector(".ask-ai-bubble")?.textContent || "";
      return { role, text };
    });

    localStorage.setItem(storageKey, JSON.stringify(history));
  };

  const getHistory = () => {
    return Array.from(askAiBody.querySelectorAll(".ask-ai-message")).map((node) => {
      const role = node.classList.contains("user") ? "user" : "assistant";
      const text = node.querySelector(".ask-ai-bubble")?.textContent || "";
      return { role, text };
    });
  };

  const renderWelcomeMessage = () => {
    askAiBody.innerHTML = "";
    createMessage("assistant", welcomeMessage, { persist: true });
    scrollToBottom();
  };

  const flashResetMessage = () => {
    askAiBody.innerHTML = "";
    createMessage("assistant", "✨ Nouvelle conversation créée", { persist: false });
    scrollToBottom();

    window.setTimeout(() => {
      const lastAssistantMessage = askAiBody.querySelector(".ask-ai-message.assistant:last-child");
      if (lastAssistantMessage) {
        lastAssistantMessage.remove();
      }

      renderWelcomeMessage();
    }, 500);
  };

  const resetConversation = () => {
    askAiInput.value = "";
    localStorage.removeItem(storageKey);
    sessionStorage.removeItem(storageKey);

    if (window.__ASK_CYNTHIA_CONTEXT__) {
      delete window.__ASK_CYNTHIA_CONTEXT__;
    }

    flashResetMessage();
  };

  const loadHistory = () => {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      renderWelcomeMessage();
      return;
    }

    try {
      const history = JSON.parse(raw);
      if (!Array.isArray(history) || history.length === 0) {
        renderWelcomeMessage();
        return;
      }

      history.forEach((entry) => {
        if (!entry || !entry.role || !entry.text) {
          return;
        }

        createMessage(entry.role, entry.text, { persist: false });
      });

      saveHistory();
    } catch (_error) {
      renderWelcomeMessage();
    }
  };

  const showTyping = () => {
    const wrapper = document.createElement("div");
    wrapper.className = "ask-ai-message assistant";

    const bubble = document.createElement("div");
    bubble.className = "ask-ai-bubble";
    bubble.innerHTML = '<span class="ask-ai-typing"><i></i><i></i><i></i></span>';

    wrapper.appendChild(bubble);
    askAiBody.appendChild(wrapper);
    scrollToBottom();
    return wrapper;
  };

  const matchIntent = (input) => {
    const value = normalize(input);

    if (
      containsAny(value, [
        "vie privee",
        "famille",
        "mari",
        "epoux",
        "copain",
        "petit ami",
        "relation amoureuse",
        "tristesse",
        "trauma",
        "depression",
        "salaire",
        "adresse",
        "telephone personnel",
        "secret",
        "confidentiel",
        "politique",
        "religion"
      ])
    ) {
      return knowledgeBase.privacy;
    }

    if (containsAny(value, ["passion", "en dehors du travail", "hors travail", "loisir", "centre d'interet", "sujet la passionne"])) return knowledgeBase.passions;
    if (containsAny(value, ["apprend", "apprentissage", "competence", "developper", "certification la plus marquee", "certification l'a le plus marquee"])) return knowledgeBase.learning;
    if (containsAny(value, ["reve", "aspiration", "dans quelques annees", "dans 5 ans", "impact souhaite", "type de projet aimerait"])) return knowledgeBase.dreams;
    if (containsAny(value, ["defi", "moment marquant", "le plus appris", "efforts", "parcours"])) return knowledgeBase.challenge;
    if (containsAny(value, ["valeur", "philosophie", "important", "pourquoi data", "pourquoi l'ia", "quelles sont ses valeurs"])) return knowledgeBase.values;
    if (containsAny(value, ["creativ", "organise", "equipe", "travaille", "quotidien", "nouveaux defis", "facon de travailler"])) return knowledgeBase.workstyle;
    if (containsAny(value, ["fierte", "fiere", "plus grande fierte"])) return knowledgeBase.pride;
    if (containsAny(value, ["inspire", "inspiration", "qu'est-ce qui inspire", "qui ou quoi l'inspire"])) return knowledgeBase.inspiration;
    if (containsAny(value, ["livre", "alchimiste", "marquee"])) return knowledgeBase.book;
    if (containsAny(value, ["devise", "motto", "phrase"])) return knowledgeBase.motto;
    if (containsAny(value, ["croyance", "conviction", "guide son parcours"])) return knowledgeBase.beliefs;
    if (containsAny(value, ["au quotidien", "source d'inspiration", "qui l'inspire"])) return knowledgeBase.dailyInspiration;
    if (containsAny(value, ["trace", "heritage", "laisser", "impact durable", "empreinte"])) return knowledgeBase.legacy;

    if (value.includes("pourquoi") || value.includes("recruter") || value.includes("hire")) return knowledgeBase.whyHire;
    if (value.includes("projet") || value.includes("raise") || value.includes("aelon") || value.includes("sav") || value.includes("anthropic")) return knowledgeBase.projects;
    if (value.includes("databricks") || value.includes("azure")) return knowledgeBase.databricks;
    if (value.includes("rag") || value.includes("llm") || value.includes("agent") || value.includes("genai")) return knowledgeBase.rag;
    if (value.includes("certif") || value.includes("accredit") || value.includes("diplome")) return knowledgeBase.certifications;
    if (value.includes("valeur") || value.includes("impact") || value.includes("apport")) return knowledgeBase.value;
    if (value.includes("governance") || value.includes("gouvernance") || value.includes("mdm") || value.includes("pim") || value.includes("syndigo") || value.includes("quality")) return knowledgeBase.governance;
    if (value.includes("cv")) return knowledgeBase.cv;
    if (value.includes("qui") || value.includes("profil") || value.includes("presentation")) return knowledgeBase.intro;

    return "Je peux vous aider sur son parcours, ses projets IA, ses certifications, son experience Databricks, mais aussi sur la personne derriere le profil: passions, valeurs, aspirations, apprentissage et facon de travailler. Dites-moi le sujet qui vous interesse.";
  };

  const requestBackendAnswer = async (question) => {
    if (!askAiEndpoint) {
      return null;
    }

    const payload = {
      assistant: "Ask Cynthia AI",
      profile,
      message: question,
      history: getHistory()
    };

    try {
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 8000);

      const response = await fetch(askAiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      window.clearTimeout(timeoutId);

      if (!response.ok) {
        return null;
      }

      const data = await response.json();
      return data.answer || data.message || data.response || null;
    } catch (_error) {
      return null;
    }
  };

  const answerQuestion = async (question) => {
    createMessage("user", question);
    const typingNode = showTyping();

    const backendAnswer = await requestBackendAnswer(question);

    window.setTimeout(() => {
      typingNode.remove();
      createMessage("assistant", backendAnswer || matchIntent(question));
    }, backendAnswer ? 280 : 650);
  };

  askAiLauncher.addEventListener("click", () => {
    const willOpen = !askAiRoot.classList.contains("open");
    askAiRoot.classList.toggle("open", willOpen);
    askAiPanel.setAttribute("aria-hidden", String(!willOpen));
    askAiLauncher.setAttribute("aria-expanded", String(willOpen));
    if (willOpen) {
      askAiInput.focus();
      scrollToBottom();
    }
  });

  askAiClose.addEventListener("click", () => {
    askAiRoot.classList.remove("open");
    askAiPanel.setAttribute("aria-hidden", "true");
    askAiLauncher.setAttribute("aria-expanded", "false");
  });

  askAiNewChat.addEventListener("click", resetConversation);

  askAiForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = askAiInput.value.trim();
    if (!question) {
      return;
    }

    askAiInput.value = "";
    answerQuestion(question);
  });

  askAiSuggestions.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) {
      return;
    }

    const question = target.textContent?.trim();
    if (!question) {
      return;
    }

    answerQuestion(question);
  });

  loadHistory();
});
