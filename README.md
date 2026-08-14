# Bonjour, je suis Cynthia Sileu Kapnang 👋

## Data Engineer | GenAI Engineer | Agentic AI Engineer
📞 +33 6 25 86 16 89

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Cynthia_Sileu_Kapnang-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/cynthia-sileu-kapnang-7484b4206)
[![GitHub](https://img.shields.io/badge/GitHub-cyndikap-181717?style=for-the-badge&logo=github)](https://github.com/cyndikap)

---
## Stack Principale

Python • PySpark • SQL • Apache AIRFLOW • Kafka • DAG • Pipeline ETL • Azure Databricks • MLflow • Unity Catalog • Azure OpenAI • RAG • LLM • FastAPI • Streamlit
---
## Présentation

Data Engineer spécialisée en Intelligence Artificielle Générative, actuellement en alternance chez Capgemini (Insight & Data), où je contribue au développement et au déploiement de solutions Data & IA à grande échelle.

Mon expertise couvre la mise en place de pipelines data et IA, l'industrialisation de cas d'usage **RAG**, l'intégration de **LLM**, et la conception d'**architectures multi-agents** sur le **Cloud Azure**.

🎯 Positionnement : transformer des enjeux métier complexes en produits data & IA fiables, gouvernés et déployables à l'échelle.

---

## Compétences Techniques

### Data Engineering
- Python
- PySpark
- SQL
- Apache AIRFLOW
- Kafka
- DAG
- Pipeline ETL
- Azure Databricks
- MLflow
- Unity Catalog

### Intelligence Artificielle
- Azure OpenAI
- Claude
- LLM
- RAG
- Prompt Engineering
- Agents IA
- Systèmes Multi-Agents

### Cloud & APIs
- Azure
- AWS
- FastAPI
- REST API

### Visualisation
- Power BI
- Streamlit

---
## Expérience

### Capgemini | Data Engineer (Alternance)
📅 Septembre 2025 - Septembre 2026

- Déploiement de solutions GenAI sur Azure Databricks
- Conception d'architectures RAG et multi-agents
- Industrialisation de modèles IA avec MLflow
- Mise en place de pipelines Data Engineering
- Gouvernance des données avec Unity Catalog

---
## Projets Principaux

### Projet RAISE
**Objectif**
- Industrialiser des cas d'usage conversationnels GenAI pour accélérer l'accès à l'information et améliorer la productivité.

**Problématique**
- Garantir la reproductibilité et la scalabilité des déploiements de modèles GenAI en environnement multi-cloud, tout en évitant les redondances et en maintenant une gouvernance robuste.

**Description scientifique / technique**
- Le projet a visé à formaliser un framework d'orchestration automatisée capable de standardiser le déploiement multi-cloud de modèles GenAI à travers un pipeline en six étapes : setup/initialize, register, deploy, integration test, proxy register et evaluate.
- Cette approche a été validée dans un environnement Databricks sur plusieurs typologies de modèles : transformation d'images, assistants conversationnels et générateurs de contenu.
- L'objectif était de s'affranchir des adaptations manuelles propres à chaque fournisseur cloud tout en conservant un niveau de performance et de reproductibilité compatible avec un usage industriel.

**Technologies**
- Azure Databricks, MLflow, Unity Catalog, Model Serving, Python, RAG, LLM, orchestration de déploiement.

**Résultats obtenus**
- Déploiement de chatbots GenAI en environnement maîtrisé.
- Amélioration de la traçabilité des modèles et des versions.
- Renforcement de la gouvernance des actifs data & IA.
- Validation expérimentale de la standardisation du cycle de vie de modèles GenAI hétérogènes.

**Compétences mobilisées**
- Data Engineering, MLOps, GenAI Ops, gouvernance data, architecture cloud.

### Projet AELON
**Objectif**
- Concevoir une plateforme bancaire intelligente en 3 espaces, pensée pour offrir une expérience premium et cloisonnée selon les profils utilisateurs.

**Problématique**
- Orchestrer plusieurs agents IA spécialisés tout en conservant performance, fiabilité, sécurité et conformité dans un contexte bancaire sensible.

**Description fonctionnelle et technique**
- Customer Banking Assistant pour le client bancaire, Analytics Copilot pour le Business Analyst, et AI Governance Copilot pour le Data Steward.
- Backend FastAPI compatible avec les routes existantes, front web moderne et orchestrateur multi-agent.
- Masquage des données sensibles dans le chat client, avec exploitation des interactions dans les espaces Analytics et Governance pour générer KPI, tableaux de bord exécutifs, exports CSV/PDF et indicateurs d'observabilité.

**Technologies**
- Azure OpenAI, RAG, FastAPI, Python, architecture multi-agents, observabilité IA, dashboards métier.

**Résultats obtenus**
- Mise en place d'une architecture modulaire d'agents.
- Meilleure précision des réponses via contextualisation RAG.
- Accélération de la conception de cas d'usage IA côté métier.
- Meilleure gouvernance, sécurité et traçabilité des interactions.

**Compétences mobilisées**
- GenAI Engineering, API Engineering, architecture applicative, prompt engineering.

**Agents conçus (AELON)**

| Fonction | Business value | Données | Types de données |
|---|---|---|---|
| Premier niveau de support: recherche dans la base de connaissances Azure AI Search + mémoire des échanges passés | Résout automatiquement les demandes courantes sans intervention humaine, réduction du coût de support | Oui | Requête utilisateur, chunks Azure AI Search, historique mémoire L0 (`L0_memory.json`) |
| Diagnostic technique avancé: interrogation des logs via RAG + pilotage du cycle de vie MCP | Traite les cas non résolus par L0 et fournit une analyse technique des incidents | Oui | Contexte d'escalade L0, logs système (RAG/MCP), réponse LLM multilingue |
| Analyse avant traitement: détection par mots-clés (phishing, OTP, carte) + confirmation LLM | Bloque les tentatives de fraude, phishing et usurpation d'identité en temps réel | Oui | Message utilisateur, patterns de fraude prédéfinis, réponse LLM JSON (`is_fraud`, `risk_level`, `reason`) |
| Analyse du ton émotionnel (frustration, urgence, colère) avant L0 | Priorise les clients en détresse, adapte le ton de réponse et réduit le churn | Oui | Message utilisateur, score de sentiment (positif, négatif, neutre), niveau d'urgence |
| Vérification de conformité des réponses générées (RGPD, DORA, PCI-DSS) | Réduit le risque légal et réglementaire et alimente un audit trail automatique | Oui | Réponse générée, règles de conformité, checklist réglementaire |
| Résumé des problèmes rencontrés + dashboards KPI satisfaction clients | Permet l'amélioration continue de la plateforme côté métier | Oui | Requêtes utilisateurs, temps de réponse, taux de résolution, signaux de satisfaction |

Cette architecture permet de couvrir la qualité de service bout en bout: automatisation L0, sécurité/fraude, diagnostic technique, conformité et pilotage KPI.

**Architecture multi-agents (flux décisionnel)**

```mermaid
flowchart TD
	A[Message utilisateur] --> B[Agent anti-fraude]
	B -->|Risque eleve| X[Blocage et alerte securite]
	B -->|Risque faible| C[Agent sentiment/urgence]
	C --> D[Agent L0 Azure AI Search + memoire]
	D -->|Demande resolue| E[Agent conformite RGPD DORA PCI-DSS]
	D -->|Non resolu| F[Agent diagnostic technique RAG/MCP]
	F --> E
	E --> G[Reponse finale au client]
	G --> H[Agent reporting KPI satisfaction]
	X --> H
```

**AELON - Synthese fonctionnelle et technique**

**Contexte metier**
- Modernisation du support bancaire pour gerer un volume croissant de demandes clients.
- Exigence de reponses rapides, personnalisees et fiables, 24/7.
- Respect obligatoire des contraintes de securite et conformite (RGPD, DORA, PCI-DSS).

**Objectifs du projet**
- Automatiser le support bancaire sur les demandes recurrentes.
- Renforcer la detection de fraude et la protection des donnees sensibles.
- Garantir la conformite reglementaire des reponses generees.
- Exploiter l'IA generative (Azure OpenAI + RAG) pour des reponses contextualisees.
- Piloter la performance avec des KPI metier, techniques et IA.

**Acteurs de la plateforme**
- Clients bancaires (utilisateurs finaux).
- Equipes metier (pilotage de la qualite de service).
- Equipes Data & IA (developpement, monitoring, amelioration continue).
- Agents IA specialises (Privacy, Fraud, Sentiment, L0, L1, Retrieval, Compliance, Explainability, Observability, Analytics, Evaluation).

**Besoins fonctionnels couverts**
- Support conversationnel bancaire intelligent (comptes, paiements, cartes, incidents).
- Detection de fraude en amont de tout traitement.
- Analyse emotionnelle et gestion de l'urgence.
- Gestion des escalades L0 vers L1 sur les cas complexes.
- Production de dashboards analytiques pour les equipes metier.

**Besoins non fonctionnels**
- Securite: anonymisation, controle d'acces, prevention fraude, conformite.
- Disponibilite: service continu, monitoring, reprise sur incident.
- Scalabilite: architecture cloud et traitements distribues.
- Performance: faible latence de reponse et traitement efficace.
- Maintenabilite: architecture modulaire multi-agents.
- Gouvernance: tracabilite, auditabilite, explicabilite et supervision continue.

**Architecture Data Engineering (Databricks Lakehouse)**
- Bronze: donnees brutes (conversations, logs, evenements, sorties agents).
- Silver: donnees nettoyees, anonymisees et enrichies (fraude, sentiment, urgence, categories).
- Gold: indicateurs agreges pour dashboards et decision.
- Delta Lake: versioning, historisation, controle qualite, audit.
- PySpark: nettoyage, enrichissement, agregations, traitements distribues.

**KPI suivis**
- KPI clients: volume interactions, satisfaction, repartition des sentiments, categories de demandes.
- KPI agents: taux de resolution, taux d'escalade, performance par agent, volume traite.
- KPI securite: fraudes detectees, score de risque moyen, alertes.
- KPI IA: quality score, temps moyen de reponse, taux de conformite, explicabilite.

Cette synthese formalise les chapitres metier, architecture et gouvernance d'AELON dans un format directement exploitable dans le portfolio.

### Projet SAV GENIA
**Objectif**
- Créer une plateforme d'évaluation fiable des agents IA pour piloter la qualité des réponses.

**Problématique**
- Évaluer objectivement la performance de systèmes GenAI avec des métriques techniques et métier.

**Technologies**
- LLM-as-a-Judge, Business Judge, RAGAS, Streamlit, Python, Azure Blob Storage, Azure Knowledge Base.

**Résultats obtenus**
- Industrialisation d'un pipeline d'évaluation multi-critères.
- Clarification des axes d'amélioration des prompts et des agents.
- Meilleure comparabilité des versions de systèmes IA.
- Création et connexion de la knowledge base Azure à partir de blobs Azure pour fiabiliser le retrieval.

**Compétences mobilisées**
- Evaluation Frameworks, GenAI Quality, data storytelling, développement d'outils analytiques.

**Module développé : EVALUATION AGENTS GENIA-SAV**
- Mise en place du pipeline du module d'évaluation.
- Structuration des composants d'évaluation techniques et métier.
- Création de la knowledge base Azure et connexion aux données stockées dans Azure Blob Storage.

**Structure du module d'évaluation**

| Fichier | Rôle | Observation |
|---|---|---|
| `evaluation_dataset.json` | Contient les questions de test. | Jeu de cas utilisé pour la comparaison des réponses. |
| `build_payload.py` | Crée l'objet envoyé aux juges. | Prépare les entrées standardisées pour tous les évaluateurs. |
| `llm_judge.py` | Mesure la qualité de la réponse. | Mesures : exactitude, complétude, absence d'erreur (LLM-as-a-Judge / correctness). |
| `business_judge.py` | Vérifie l'exploitabilité métier de la réponse. | Exemple "Carte perdue" : la réponse doit couvrir opposition et renouvellement, sinon score faible. |
| `ragas_eval.py` | Mesure la qualité du retrieval. | Métriques recommandées : faithfulness, context recall, context precision. |
| `run_evaluation.py` | Orchestre toute l'évaluation. | Lance la chaîne complète du module. |
| `evaluation_results.json` | Sauvegarde les scores. | Résultats consolidés pour analyse. |
| `dashboard.py` | Affiche les KPI avec Streamlit. | Suivi visuel des performances du module. |

Ces métriques sont alignées avec l'approche du document `Pipeline_Evaluation_RAG` et permettent d'évaluer à la fois la qualité de la réponse, la qualité du retrieval et la pertinence métier.

**Vérification du module évaluation (PowerShell)**

```powershell
python .\run_evaluation.py
```

**Architecture du module évaluation**

```mermaid
flowchart LR
	A[evaluation_dataset.json] --> B[build_payload.py]
	B --> C[run_evaluation.py]
	C --> D[llm_judge.py]
	C --> E[business_judge.py]
	C --> F[ragas_eval.py]
	D --> G[evaluation_results.json]
	E --> G
	F --> G
	G --> H[dashboard.py Streamlit KPI]
```

### Projet Data Quality IA - RATP
**Objectif**
- Automatiser les contrôles de qualité des données avec des agents IA dédiés à la gouvernance et à la fiabilisation des usages data métiers.

**Problématique**
- Réduire la détection tardive des anomalies et renforcer la confiance dans les jeux de données critiques.

**Description fonctionnelle et technique**
- Conception d'agents IA spécialisés dans la détection d'anomalies, le respect des règles métier et la supervision continue des données.
- Couplage de règles de qualité, transformations PySpark et observabilité métier pour fournir un niveau de gouvernance plus robuste.
- Contribution à une meilleure utilisation des données à forte criticité et à une meilleure réponse opérationnelle aux écarts détectés.

**Technologies**
- Python, PySpark, Azure Databricks, agents IA, règles de qualité des données, gouvernance data.

**Résultats obtenus**
- Détection plus rapide des anomalies critiques.
- Structuration des règles de gouvernance data.
- Contribution à une meilleure confiance dans les jeux de données.
- Meilleure capacité à sécuriser les usages analytiques et décisionnels.

**Compétences mobilisées**
- Data Quality, Data Governance, Data Engineering, IA appliquée.

### Hackathon Anthropic
**Objectif**
- Développer un assistant de recommandation automobile conversationnel.

**Problématique**
- Produire des recommandations pertinentes en tenant compte de contraintes utilisateur variées.

**Technologies**
- Claude, Python, logique de recommandation, interface conversationnelle.

**Résultats obtenus**
- Prototype fonctionnel présenté en contexte hackathon.
- Démonstration d'une capacité de réponse contextualisée.
- Validation d'approches prompt-driven pour recommandations métier.

**Compétences mobilisées**
- Prompt engineering, prototypage rapide, GenAI application design.

---

## Certifications & Accréditations

### PIM Implementation Consultant - Practitioner
[![Credly Badge](https://img.shields.io/badge/Credly-PIM_Implementation_Consultant-FF6B00?style=flat-square&logo=credly&logoColor=white)](https://www.credly.com/badges/586fdcbf-1f6f-42bb-89c7-d8b9e775817a/public_url)
- **Description** : au cours de cette formation et de ses assessments pratiques, j’ai eu l’opportunité de travailler sur l’ensemble des composantes d’une plateforme de Product Information Management (PIM) et de Master Data Management (MDM) : modélisation des données, workflows, intégrations, APIs REST, reporting et gouvernance.
- **Composants abordés** : modélisation des entités métier (Article, Choice, Style), création d’attributs, relations et taxonomies, mise en place des variantes et structures de données produit, configuration des workflows de création et d’enrichissement, règles métier et contrôles qualité, personnalisation de l’interface utilisateur, intégrations SFTP, AWS Kinesis et Azure Event Hub, APIs Syndigo via Postman, ainsi que dashboards de gouvernance et reporting analytique.
- **Compétences associées** : Product Information Management, Master Data Management, Data Governance, Data Quality, REST APIs, Data Integration, Workflow Automation, Reporting & Analytics.
- **Lien de vérification** : [PIM Implementation Consultant - Practitioner - Credly](https://www.credly.com/badges/586fdcbf-1f6f-42bb-89c7-d8b9e775817a/public_url)

### Syndigo Product Information Management (PIM) & Master Data Management (MDM)
[![Credly Badge](https://img.shields.io/badge/Credly-Verified_Accreditation-FF6B00?style=flat-square&logo=credly&logoColor=white)](https://www.credly.com/badges/55da860c-f963-491f-8770-5570d8233255/linked_in_profile)
- **Description** : certification orientée implémentation PIM et gestion de données produits dans un contexte Master Data Management.
- **Compétences associées** : Master Data Management, Gestion d'informations sur les produits, Data Quality, Gouvernance de données, Gestion des données, Référentiels de données, Data Catalog.
- **Lien de vérification** : [Syndigo PIM & MDM - Credly](https://www.credly.com/badges/55da860c-f963-491f-8770-5570d8233255/linked_in_profile)

### Databricks Fundamentals Accreditation - Databricks Academy (2026)
![Databricks](https://img.shields.io/badge/Databricks-Fundamentals-EA3E2C?style=flat-square&logo=databricks&logoColor=white)
- **Description** : fondamentaux de la plateforme Databricks et de l'approche Lakehouse.
- **Compétences validées** : Spark ecosystem, architecture Lakehouse, bonnes pratiques Databricks.

### AI Practitioner - IA Générative & Agents IA (2026)
![AI Practitioner](https://img.shields.io/badge/AI_Practitioner-GenAI_%26_Agents-163A70?style=flat-square&logo=openai&logoColor=white)
- **Description** : conception de solutions d'IA générative orientées production.
- **Compétences validées** : agents IA, prompt engineering, architecture GenAI.

### AI Explorer - IA Générative (2026)
![AI Explorer](https://img.shields.io/badge/AI_Explorer-IA_G%C3%A9n%C3%A9rative-333333?style=flat-square&logo=ai21labs&logoColor=white)
- **Description** : exploration des usages et limites des modèles génératifs.
- **Compétences validées** : LLM, cas d'usage RAG, cadrage de solutions IA.

### Microsoft Power BI Data Analyst Associate
![Power BI](https://img.shields.io/badge/Microsoft-Power_BI_Data_Analyst-F2C811?style=flat-square&logo=powerbi&logoColor=black)
- **Description** : certification d'analyse et visualisation de données avec Power BI.
- **Compétences validées** : modélisation BI, DAX, tableaux de bord, communication visuelle.

### Google Cloud Platform Fundamentals
![Google Cloud](https://img.shields.io/badge/Google_Cloud-Fundamentals-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
- **Description** : bases du cloud public et des services data GCP.
- **Compétences validées** : culture cloud, principes d'architecture, services managés.
- **Lien de vérification** : [Coursera - Google Cloud Fundamentals: Core Infrastructure](https://www.coursera.org/account/accomplishments/records/VOO1AUL6XQVU)

### ETL and Data Pipelines with Shell, Apache AIRFLOW and Kafka
![ETL Pipelines](https://img.shields.io/badge/ETL-Shell_Airflow_Kafka-FF6F00?style=flat-square&logo=apacheairflow&logoColor=white)
- **Description** : construction de pipelines ETL orchestrés et résilients.
- **Compétences validées** : orchestration Apache AIRFLOW, flux Kafka, automatisation shell.
- **Lien de vérification (Coursera)** : [ETL and Data Pipelines with Shell, Airflow and Kafka](https://www.coursera.org/account/accomplishments/records/2GFU5TPESBXX)
- **Lien de vérification (Credly)** : [ETL and Data Pipelines with Shell, Airflow and Kafka](https://www.credly.com/badges/497d0eb6-e074-43f1-a06d-18119955b27d/linked_in_profile)

### Hackathon Anthropic - Claude AI
![Anthropic](https://img.shields.io/badge/Hackathon-Anthropic_Claude_AI-111111?style=flat-square&logo=anthropic&logoColor=white)
- **Description** : prototypage d'un assistant IA en contexte compétitif.
- **Compétences validées** : innovation rapide, design conversationnel, itération produit.

---

## Stack Technique

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![PySpark](https://img.shields.io/badge/PySpark-E25A1C?style=for-the-badge&logo=apachespark&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Apache AIRFLOW](https://img.shields.io/badge/Apache_Airflow-017CEE?style=for-the-badge&logo=apacheairflow&logoColor=white)
![Kafka](https://img.shields.io/badge/Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white)
![DAG](https://img.shields.io/badge/DAG-Orchestration-334155?style=for-the-badge)
![Pipeline ETL](https://img.shields.io/badge/Pipeline_ETL-FF6F00?style=for-the-badge)
![Azure Databricks](https://img.shields.io/badge/Azure_Databricks-EA3E2C?style=for-the-badge&logo=databricks&logoColor=white)
![MLflow](https://img.shields.io/badge/MLflow-0194E2?style=for-the-badge&logo=mlflow&logoColor=white)
![Unity Catalog](https://img.shields.io/badge/Unity_Catalog-163A70?style=for-the-badge)
![Azure OpenAI](https://img.shields.io/badge/Azure_OpenAI-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)
![RAG](https://img.shields.io/badge/RAG-0E7C86?style=for-the-badge)
![LLM](https://img.shields.io/badge/LLM-333333?style=for-the-badge)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white)
![Power BI](https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)
![Azure](https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)

---

## Objectif Professionnel

**🎯 En tant que Data Engineer, GenAI Engineer ou AI Engineer.
Je souhaite contribuer à la conception et à l'industrialisation de solutions Data & IA à fort impact au sein d'équipes innovantes.**

Je souhaite contribuer a des projets a fort impact au sein d'environnements innovants (Capgemini, Accenture, BNP Paribas, Societe Generale, Airbus et autres acteurs Data & IA), avec une approche orientee valeur metier, excellence technique et industrialisation.

---

## Contact

- Téléphone : +33 6 25 86 16 89
- LinkedIn : [linkedin.com/in/cynthia-sileu-kapnang-7484b4206](https://www.linkedin.com/in/cynthia-sileu-kapnang-7484b4206)
- GitHub : [github.com/cyndikap](https://github.com/cyndikap)
- Portfolio :https://cyndikap.github.io/Portfolio-data-genai/
- Email : kapnangcynthia@gmail.com

---
## GitHub Analytics

https://github-readme-stats.vercel.app/api?username=cyndikap&show_icons=true&theme=default

![Top Langs](https://github.vercel.app/api/top-langs/?username=cyndikap&layout=compact

---
> Merci pour votre visite. N'hesitez pas a me contacter pour echanger autour d'opportunites Data, IA Generative et Cloud.