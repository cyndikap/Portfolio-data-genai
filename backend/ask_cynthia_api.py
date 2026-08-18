from __future__ import annotations

import json
import unicodedata
from pathlib import Path
from typing import Any, List, Optional

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field


class ChatTurn(BaseModel):
    role: str = Field(..., description="user|assistant")
    text: str


class Profile(BaseModel):
    name: str
    title: str


class ChatRequest(BaseModel):
    assistant: str
    profile: Profile
    message: str
    history: List[ChatTurn] = Field(default_factory=list)


class ChatResponse(BaseModel):
    answer: str


app = FastAPI(title="Ask Cynthia AI API", version="1.0.0")

# Keep CORS permissive for local/static front integration.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def load_profile_data() -> dict[str, Any]:
    profile_path = Path(__file__).resolve().parent.parent / "who_is_cynthia.json"
    try:
        with profile_path.open("r", encoding="utf-8") as file:
            payload = json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        return {}

    if isinstance(payload, dict):
        return payload.get("who_is_cynthia", {})
    return {}


PROFILE_DATA = load_profile_data()


def _as_text(value: Any) -> str:
    if isinstance(value, list):
        return ", ".join(str(item) for item in value)
    if isinstance(value, dict):
        return ", ".join(f"{key}: {item}" for key, item in value.items())
    return str(value)


def build_knowledge(profile: dict[str, Any]) -> dict[str, str]:
    identity = profile.get("identity", {})
    mindset = profile.get("mindset", {})
    dreams = profile.get("dreams", {})
    data_ai = profile.get("data_ai", {})
    learning = profile.get("learning", {})
    pride = profile.get("pride", {})
    growth = profile.get("growth", {})
    work_style = profile.get("work_style", {})
    passions = profile.get("passions", {})
    inspirations = profile.get("inspirations", {})
    recruiter = profile.get("recruiter_insights", {})
    quotes = profile.get("quotes", {})

    return {
        "why_hire": recruiter.get("why_hire_cynthia") or (
            "Cynthia combine execution technique et vision metier: Data Engineering, GenAI et "
            "Data Governance. Elle construit des solutions deployables, pas seulement des POC, "
            "avec un focus impact, fiabilite et adoption."
        ),
        "projects": (
            "Cynthia a travaille sur des cas concrets de Data & IA, avec un souci fort d'impact "
            "metier, de gouvernance et d'industrialisation. Son profil s'aligne avec les projets "
            "RAG, orchestration IA, Data Quality et transformation de donnees en produits utiles."
        ),
        "databricks": (
            data_ai.get("why_data") or
            "Experience Azure Databricks sur pipelines PySpark, orchestration IA, MLflow, "
            "Unity Catalog, model lifecycle, data governance et passage a l'echelle en "
            "environnement enterprise."
        ),
        "rag_llm": (
            data_ai.get("technology_vision")
            or "Oui. Cynthia travaille concretement sur RAG, LLM et Agentic AI: architecture de "
              "retrieval, evaluation des reponses, gouvernance des modeles et integration metier."
        ),
        "certifications": (
            "Certifications: Databricks Fundamentals Accreditation, AI Practitioner, AI Explorer, "
            "Syndigo PIM & MDM, Microsoft Power BI Data Analyst Associate."
        ),
        "value": recruiter.get("added_value") or (
            "Valeur ajoutee: transformer des besoins metier en produits Data & IA mesurables, "
            "robustes et gouvernes. Elle relie architecture, qualite des donnees, IA generative "
            "et impact business."
        ),
        "governance": (
            data_ai.get("why_data") or
            "Expertise Data Governance: Data Quality, MDM, PIM, Syndigo, regles metier et "
            "tracabilite. Objectif: fiabiliser la donnee et securiser les usages IA en production."
        ),
        "cv": (
            "📄 Bien sûr !\n\n"
            "Vous pouvez consulter ou télécharger mon CV ici :\n"
            "/cv/CV_Cynthia_Sileu_Kapnang.pdf\n\n"
            "Vous pouvez également découvrir mes projets et mon expérience en continuant à échanger avec moi."
        ),
        "passions": (
            _as_text(passions.get("outside_work"))
            + ". Elle est aussi interestee par les sujets de developpement personnel, apprentissage et psychologie de la reussite."
        ),
        "learning": (
            learning.get("learning_style")
            or "Sa facon d'apprendre est tres pratique: elle alterne veille structuree, experimentation "
              "sur des mini-projets, puis consolidation via la documentation et des certifications ciblees. "
              "Son axe actuel: faire progresser ses competences en architecture agentique, evaluation IA "
              "et industrialisation."
        ),
        "dreams": (
            dreams.get("professional_dream")
            or "Son reve professionnel est de construire des produits Data & IA qui deviennent de vrais "
               "actifs strategiques pour les organisations: fiables, gouvernes, mesurables et utiles aux "
               "utilisateurs finaux. A moyen terme, elle se voit piloter des initiatives IA a fort impact metier."
        ),
        "challenge": (
            growth.get("biggest_challenge")
            or "Un des defis qui l'a le plus fait grandir: passer de la realisation technique a la conception "
               "de solutions IA deployables de bout en bout, avec gouvernance, qualite de donnees et adoption "
               "metier. Cela lui a appris a penser produit autant que technique."
        ),
        "values": (
            _as_text(mindset.get("life_values")) + ". " + (quotes.get("work_philosophy") or "Ses valeurs se traduisent par curiosite, exigence, impact utile et perserverance.")
        ),
        "workstyle": (
            work_style.get("next_role")
            or "Au quotidien, Cynthia travaille avec une logique claire: cadrer le besoin, prioriser la valeur, "
               "iterer vite, puis industrialiser proprement. Elle est souvent plus creative le matin pour la "
               "conception, puis orientee execution/collaboration l'apres-midi."
        ),
        "pride": (
            pride.get("greatest_professional_pride")
            or "Sa plus grande fierte professionnelle est de transformer des idees complexes en solutions "
               "utilisables en production, avec des resultats mesurables. La reconnaissance Meilleure MPP Player "
               "illustre aussi son engagement personnel au-dela du cadre technique."
        ),
        "inspiration": (
            _as_text(inspirations.get("sources_of_inspiration"))
            + ". " + (inspirations.get("future_inspiration") or "Cynthia est inspiree par les projets qui combinent technologie, impact humain et valeur durable.")
        ),
        "book": (
            f"Le livre qui l'a le plus marquee est {learning.get('favorite_book', {}).get('name', 'L\'Alchimiste')} de {learning.get('favorite_book', {}).get('author', 'Paulo Coelho')}. "
            f"{learning.get('favorite_book', {}).get('why', 'Il rappelle l\'importance de suivre sa legende personnelle et de poursuivre ses reves.') }"
        ),
        "motto": (
            quotes.get("personal_motto") or "Sa devise: You did it. Une phrase simple qui rappelle la puissance de la perseverance et de la confiance en soi."
        ),
        "beliefs": (
            _as_text(inspirations.get("guiding_beliefs"))
            or "Une croyance guide son parcours: les obstacles sont souvent des opportunites de croissance. Avec constance, apprentissage et integrite, les resultats finissent par arriver."
        ),
        "daily_inspiration": (
            _as_text(inspirations.get("sources_of_inspiration"))
            or "Au quotidien, elle est inspiree par les entrepreneurs a impact, les personnes qui reussissent malgre les obstacles et les initiatives qui utilisent la technologie pour ameliorer la vie des autres."
        ),
        "legacy": (
            dreams.get("desired_impact")
            or "La trace qu'elle souhaite laisser: des solutions utiles qui ameliorent concretement la vie des gens, et une contribution durable a des projets technologiques plus humains, plus responsables et plus inclusifs."
        ),
        "privacy": (
            "Je peux partager des elements professionnels et authentiques sur Cynthia, mais je ne traite pas "
            "les sujets trop intimes, familiaux, sensibles ou confidentiels. Je peux en revanche repondre sur "
            "ses valeurs, son parcours, ses aspirations et sa facon de travailler."
        ),
        "intro": (
            f"{identity.get('three_words', ['Atypique', 'Déterminée', 'Ambitieuse'])[0]}, "
            f"{identity.get('three_words', ['Atypique', 'Déterminée', 'Ambitieuse'])[1]} et "
            f"{identity.get('three_words', ['Atypique', 'Déterminée', 'Ambitieuse'])[2]} — "
            f"{identity.get('main_quality', 'L\'empathie')} est sa force majeure."
        ),
    }


KNOWLEDGE = build_knowledge(PROFILE_DATA)


def normalize(text: str) -> str:
    lowered = text.lower()
    decomposed = unicodedata.normalize("NFD", lowered)
    return "".join(ch for ch in decomposed if unicodedata.category(ch) != "Mn")


def contains_any(value: str, keywords: List[str]) -> bool:
    return any(keyword in value for keyword in keywords)


def is_cv_request(value: str) -> bool:
    return contains_any(
        value,
        [
            "cv",
            "telecharger le cv",
            "puis-je voir votre cv",
            "puis je voir votre cv",
            "envoyez-moi votre cv",
            "envoyez moi votre cv",
            "je souhaite consulter votre cv",
            "ou trouver votre cv",
            "puis-je telecharger votre cv",
            "puis je telecharger votre cv",
            "pouvez-vous me transmettre votre cv",
            "pouvez vous me transmettre votre cv",
            "montrez-moi votre cv",
            "montrez moi votre cv",
            "telecharger son cv",
            "consulter son cv",
        ],
    )


def match_intent(user_input: str) -> str:
    value = normalize(user_input)

    if contains_any(
        value,
        [
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
            "religion",
        ],
    ):
        return KNOWLEDGE["privacy"]

    if contains_any(value, ["passion", "en dehors du travail", "hors travail", "loisir", "centre d'interet"]):
        return KNOWLEDGE["passions"]
    if contains_any(value, ["apprend", "apprentissage", "competence", "developper", "certification la plus marquee"]):
        return KNOWLEDGE["learning"]
    if contains_any(value, ["reve", "aspiration", "dans quelques annees", "dans 5 ans", "impact souhaite"]):
        return KNOWLEDGE["dreams"]
    if contains_any(value, ["defi", "moment marquant", "le plus appris", "efforts", "parcours"]):
        return KNOWLEDGE["challenge"]
    if contains_any(value, ["valeur", "philosophie", "important", "pourquoi data", "pourquoi l'ia"]):
        return KNOWLEDGE["values"]
    if contains_any(value, ["creativ", "organise", "equipe", "travaille", "quotidien", "nouveaux defis"]):
        return KNOWLEDGE["workstyle"]
    if contains_any(value, ["fierte", "fiere", "plus grande fierte"]):
        return KNOWLEDGE["pride"]
    if contains_any(value, ["inspire", "inspiration", "qu'est-ce qui inspire", "qui ou quoi l'inspire"]):
        return KNOWLEDGE["inspiration"]
    if contains_any(value, ["livre", "alchimiste", "marquee"]):
        return KNOWLEDGE["book"]
    if contains_any(value, ["devise", "motto", "phrase"]):
        return KNOWLEDGE["motto"]
    if contains_any(value, ["croyance", "conviction", "guide son parcours"]):
        return KNOWLEDGE["beliefs"]
    if contains_any(value, ["au quotidien", "source d'inspiration", "qui l'inspire"]):
        return KNOWLEDGE["daily_inspiration"]
    if contains_any(value, ["trace", "heritage", "laisser", "impact durable", "empreinte"]):
        return KNOWLEDGE["legacy"]

    if any(k in value for k in ["pourquoi", "recruter", "hire"]):
        return KNOWLEDGE["why_hire"]
    if any(k in value for k in ["projet", "raise", "aelon", "sav", "anthropic"]):
        return KNOWLEDGE["projects"]
    if any(k in value for k in ["databricks", "azure"]):
        return KNOWLEDGE["databricks"]
    if any(k in value for k in ["rag", "llm", "agent", "genai"]):
        return KNOWLEDGE["rag_llm"]
    if any(k in value for k in ["certif", "accredit", "diplome"]):
        return KNOWLEDGE["certifications"]
    if any(k in value for k in ["valeur", "impact", "apport"]):
        return KNOWLEDGE["value"]
    if any(k in value for k in ["governance", "gouvernance", "mdm", "pim", "syndigo", "quality"]):
        return KNOWLEDGE["governance"]
    if is_cv_request(value):
        return KNOWLEDGE["cv"]
    if any(k in value for k in ["qui", "profil", "presentation"]):
        return KNOWLEDGE["intro"]

    return (
        "Je peux vous aider sur son parcours, ses projets IA, ses certifications, son "
        "experience Databricks, mais aussi sur la personne derriere le profil: passions, "
        "valeurs, aspirations, apprentissage et facon de travailler."
    )


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/chat", response_model=ChatResponse)
def chat(payload: ChatRequest) -> ChatResponse:
    answer = match_intent(payload.message)
    return ChatResponse(answer=answer)
