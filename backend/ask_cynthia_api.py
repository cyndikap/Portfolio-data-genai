from __future__ import annotations

from typing import List, Optional

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
    history: List[ChatTurn] = []


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


KNOWLEDGE = {
    "why_hire": (
        "Cynthia combine execution technique et vision metier: Data Engineering, GenAI et "
        "Data Governance. Elle construit des solutions deployables, pas seulement des POC, "
        "avec un focus impact, fiabilite et adoption."
    ),
    "projects": (
        "Cynthia a travaille sur RAISE, AELON, SAV GENIA, Data Quality IA et Hackathon "
        "Anthropic. Cas d'usage: RAG/LLM, orchestration multi-agent, evaluation IA, "
        "gouvernance et industrialisation sur Databricks."
    ),
    "databricks": (
        "Experience Azure Databricks sur pipelines PySpark, orchestration IA, MLflow, "
        "Unity Catalog, model lifecycle, data governance et passage a l'echelle en "
        "environnement enterprise."
    ),
    "rag_llm": (
        "Oui. Cynthia travaille concretement sur RAG, LLM et Agentic AI: architecture de "
        "retrieval, evaluation des reponses, gouvernance des modeles et integration metier."
    ),
    "certifications": (
        "Certifications: Databricks Fundamentals Accreditation, AI Practitioner, AI Explorer, "
        "Syndigo PIM & MDM, Microsoft Power BI Data Analyst Associate."
    ),
    "value": (
        "Valeur ajoutee: transformer des besoins metier en produits Data & IA mesurables, "
        "robustes et gouvernes. Elle relie architecture, qualite des donnees, IA generative "
        "et impact business."
    ),
    "governance": (
        "Expertise Data Governance: Data Quality, MDM, PIM, Syndigo, regles metier et "
        "tracabilite. Objectif: fiabiliser la donnee et securiser les usages IA en production."
    ),
    "cv": (
        "Vous pouvez demander son CV via le bouton Recevoir mon CV dans la section hero ou "
        "contacter Cynthia par email: kapnangcynthia@gmail.com."
    ),
}


def match_intent(user_input: str) -> str:
    value = user_input.lower()

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
    if "cv" in value:
        return KNOWLEDGE["cv"]
    if any(k in value for k in ["qui", "profil", "presentation"]):
        return "Cynthia Sileu Kapnang\nAI & Data Engineer | GenAI, RAG & Multi-Agent Systems | Azure Databricks | Master Data Management"

    return (
        "Je peux vous aider sur son parcours, ses projets IA, ses certifications, son "
        "experience Databricks, sa specialisation GenAI/RAG/LLM ou son expertise "
        "Data Governance/MDM."
    )


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/chat", response_model=ChatResponse)
def chat(payload: ChatRequest) -> ChatResponse:
    answer = match_intent(payload.message)
    return ChatResponse(answer=answer)
