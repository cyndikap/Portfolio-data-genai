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

  if (!askAiRoot || !askAiLauncher || !askAiPanel || !askAiClose || !askAiBody || !askAiForm || !askAiInput || !askAiSuggestions) {
    return;
  }

  const storageKey = "ask-cynthia-ai-history";
  const askAiEndpoint = (document.body.dataset.askAiEndpoint || window.ASK_CYNTHIA_AI_ENDPOINT || "").trim();
  const welcomeMessage = [
    "Bonjour 👋",
    "",
    "Je suis Ask Cynthia AI.",
    "",
    "Je peux vous presenter :",
    "",
    "✅ Mon parcours professionnel",
    "✅ Mes projets Data & IA",
    "✅ Mes competences techniques",
    "✅ Mes certifications",
    "✅ Mon experience Azure Databricks",
    "✅ Ma vision du Data Engineering et de l'IA",
    "",
    "Que souhaitez-vous savoir ?"
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
    intro: `${profile.name}\n${profile.title}`
  };

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

  const loadHistory = () => {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      createMessage("assistant", welcomeMessage, { persist: true });
      return;
    }

    try {
      const history = JSON.parse(raw);
      if (!Array.isArray(history) || history.length === 0) {
        createMessage("assistant", welcomeMessage, { persist: true });
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
      createMessage("assistant", welcomeMessage, { persist: true });
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
    const value = input.toLowerCase();

    if (value.includes("pourquoi") || value.includes("recruter") || value.includes("hire")) return knowledgeBase.whyHire;
    if (value.includes("projet") || value.includes("raise") || value.includes("aelon") || value.includes("sav") || value.includes("anthropic")) return knowledgeBase.projects;
    if (value.includes("databricks") || value.includes("azure")) return knowledgeBase.databricks;
    if (value.includes("rag") || value.includes("llm") || value.includes("agent") || value.includes("genai")) return knowledgeBase.rag;
    if (value.includes("certif") || value.includes("accredit") || value.includes("diplome")) return knowledgeBase.certifications;
    if (value.includes("valeur") || value.includes("impact") || value.includes("apport")) return knowledgeBase.value;
    if (value.includes("governance") || value.includes("gouvernance") || value.includes("mdm") || value.includes("pim") || value.includes("syndigo") || value.includes("quality")) return knowledgeBase.governance;
    if (value.includes("cv")) return knowledgeBase.cv;
    if (value.includes("qui") || value.includes("profil") || value.includes("presentation")) return knowledgeBase.intro;

    return "Je peux vous aider sur son parcours, ses projets IA, ses certifications, son experience Databricks, sa specialisation GenAI/RAG/LLM ou son expertise Data Governance/MDM. Dites-moi le sujet qui vous interesse.";
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
