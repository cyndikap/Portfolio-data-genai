Ask Cynthia AI backend stub (FastAPI)

1) Install dependencies
pip install -r backend/requirements.txt

2) Run API
uvicorn backend.ask_cynthia_api:app --host 0.0.0.0 --port 8000 --reload

3) Health check
GET http://localhost:8000/health

4) Chat endpoint
POST http://localhost:8000/chat

Expected JSON request payload:
{
  "assistant": "Ask Cynthia AI",
  "profile": {
    "name": "Cynthia Sileu Kapnang",
    "title": "AI & Data Engineer | GenAI, RAG & Multi-Agent Systems | Azure Databricks | Master Data Management"
  },
  "message": "Quels sont ses projets IA ?",
  "history": [
    { "role": "assistant", "text": "..." },
    { "role": "user", "text": "..." }
  ]
}

Expected JSON response payload:
{
  "answer": "..."
}

5) Connect frontend
In index.html body tag, set:
data-ask-ai-endpoint="http://localhost:8000/chat"

If not set or unavailable, frontend uses local fallback answers automatically.
