# FSD – Full System Design Documentation
## EduGenie – Google Gemini Powered Learning Assistant

**Document Type:** Full System Design (FSD)  
**Version:** 1.0  
**Date:** March 2025  
**Author:** Rushikaputta  

---

## 1. Introduction

### 1.1 Purpose
This Full System Design (FSD) document describes the complete technical design of EduGenie — an AI-powered educational web application. It covers system architecture, module specifications, database design, API design, UI design, and deployment strategy.

### 1.2 Scope
This document applies to the EduGenie v1.0 release, encompassing:
- Backend Flask REST API
- 5 AI-powered learning modules
- Frontend single-page web application
- Google Gemini API integration

### 1.3 Definitions
| Term | Definition |
|------|-----------|
| LLM | Large Language Model |
| API | Application Programming Interface |
| REST | Representational State Transfer |
| MCQ | Multiple Choice Question |
| FSD | Full System Design |
| UAT | User Acceptance Testing |

---

## 2. System Overview

EduGenie is a **3-tier web application**:
- **Tier 1 – Presentation Layer:** HTML/CSS/JavaScript (Browser)
- **Tier 2 – Application Layer:** Python Flask (REST API Server)
- **Tier 3 – AI Layer:** Google Gemini API (External Cloud Service)

---

## 3. Architecture Design

### 3.1 High-Level Architecture

```
┌────────────────────────────────────────────────────────┐
│                   PRESENTATION TIER                    │
│                                                        │
│   templates/index.html   static/style.css              │
│   static/script.js       (Browser – Client Side)       │
└─────────────────────────┬──────────────────────────────┘
                          │ HTTP JSON (Fetch API)
                          ▼
┌────────────────────────────────────────────────────────┐
│                  APPLICATION TIER                      │
│                                                        │
│   app/main.py (Flask)                                  │
│   ├── GET  /              → Serve index.html           │
│   ├── POST /summarize     → summary_module             │
│   ├── POST /quiz          → quiz_module                │
│   ├── POST /learning_path → learning_path              │
│   ├── POST /qna           → qna                       │
│   └── POST /explain       → explanation_module         │
└─────────────────────────┬──────────────────────────────┘
                          │ google-generativeai SDK
                          ▼
┌────────────────────────────────────────────────────────┐
│                     AI SERVICE TIER                    │
│                                                        │
│   Google Gemini API  (gemini-pro model)                │
│   Input: Text prompt                                   │
│   Output: Generated text                               │
└────────────────────────────────────────────────────────┘
```

### 3.2 File System Structure

```
edugemini/
├── app/
│   ├── __init__.py              # Flask package init
│   ├── main.py                  # Routes and app factory
│   ├── summary_module.py        # Summarization logic
│   ├── quiz_module.py           # Quiz generation logic
│   ├── learning_path.py         # Learning path logic
│   ├── qna.py                   # Q&A logic
│   └── explanation_module.py    # Explanation logic
├── static/
│   ├── style.css                # Styles
│   └── script.js                # Frontend JavaScript
├── templates/
│   └── index.html               # Main HTML page
├── .env                         # API Key (gitignored)
├── .gitignore
└── requirements.txt
```

---

## 4. Module Design Specifications

### 4.1 Summary Module (`summary_module.py`)

| Attribute | Value |
|-----------|-------|
| **Function** | `generate_summary(topic)` |
| **Input** | `topic: str` |
| **Output** | `str` (summary text) |
| **Prompt Template** | `"Summarize the topic '{topic}' in 200 words for a student."` |
| **Error Handling** | Returns error message string on API failure |

---

### 4.2 Quiz Module (`quiz_module.py`)

| Attribute | Value |
|-----------|-------|
| **Function** | `generate_quiz(topic, num_questions)` |
| **Input** | `topic: str`, `num_questions: int` |
| **Output** | `list[dict]` — list of question objects |
| **Prompt Template** | `"Generate {n} MCQ questions on '{topic}' with 4 options each. Mark the correct answer."` |
| **Response Parsing** | Parses raw text into structured question list |

---

### 4.3 Learning Path Module (`learning_path.py`)

| Attribute | Value |
|-----------|-------|
| **Function** | `generate_learning_path(topic, duration)` |
| **Input** | `topic: str`, `duration: str` |
| **Output** | `str` (formatted learning plan) |
| **Prompt Template** | `"Create a {duration} learning roadmap for '{topic}' for a beginner student."` |

---

### 4.4 Q&A Module (`qna.py`)

| Attribute | Value |
|-----------|-------|
| **Function** | `answer_question(topic, question)` |
| **Input** | `topic: str`, `question: str` |
| **Output** | `str` (answer text) |
| **Prompt Template** | `"Answer this question about {topic}: {question}. Be detailed and give examples."` |

---

### 4.5 Explanation Module (`explanation_module.py`)

| Attribute | Value |
|-----------|-------|
| **Function** | `explain_concept(concept)` |
| **Input** | `concept: str` |
| **Output** | `str` (explanation text) |
| **Prompt Template** | `"Explain '{concept}' in simple terms for a beginner. Use an analogy."` |

---

## 5. API Design

### 5.1 REST API Endpoints

#### `GET /`
- **Description:** Serves the main HTML page
- **Response:** `200 OK` + `index.html`

#### `POST /summarize`
```json
Request:
{ "topic": "Machine Learning" }

Response:
{ "summary": "Machine Learning is a branch of AI that..." }
```

#### `POST /quiz`
```json
Request:
{ "topic": "Neural Networks", "num_questions": 5 }

Response:
{
  "quiz": [
    {
      "question": "What is a neuron in a neural network?",
      "options": ["A) Data point", "B) Processing unit", "C) Algorithm", "D) Dataset"],
      "answer": "B"
    }
  ]
}
```

#### `POST /learning_path`
```json
Request:
{ "topic": "Python", "duration": "4 weeks" }

Response:
{ "path": "Week 1: Python basics...\nWeek 2: Functions and OOP..." }
```

#### `POST /qna`
```json
Request:
{ "topic": "Deep Learning", "question": "What is backpropagation?" }

Response:
{ "answer": "Backpropagation is an algorithm used to train neural networks..." }
```

#### `POST /explain`
```json
Request:
{ "concept": "Gradient Descent" }

Response:
{ "explanation": "Gradient Descent is like rolling a ball down a hill to find the lowest point..." }
```

---

## 6. Frontend Design

### 6.1 UI Components
| Component | Description |
|-----------|-------------|
| Navigation Tabs | Switches between the 5 modules |
| Input Forms | Topic, question, or concept fields |
| Submit Buttons | Triggers API call |
| Loading Spinner | Shown during API response wait |
| Result Display | Card that renders the AI-generated output |
| Error Banner | Shown on API failure |

### 6.2 JavaScript Architecture
```
script.js
├── Tab switching logic
├── Form submission handlers (x5)
│   ├── callSummary()
│   ├── callQuiz()
│   ├── callLearningPath()
│   ├── callQnA()
│   └── callExplain()
├── displayResult(data) — renders output
└── displayError(msg) — shows error
```

---

## 7. Security Design

| Threat | Control |
|--------|---------|
| API key exposure | Stored in `.env`, excluded from git via `.gitignore` |
| XSS attacks | Output rendered as text, not raw HTML |
| CORS issues | Controlled via `flask-cors` |
| Invalid input | Server-side validation before API call |

---

## 8. Deployment Design

| Environment | Configuration |
|-------------|--------------|
| **Development** | `flask run` on `localhost:5000` |
| **Production** | Set `GEMINI_API_KEY` as env var on hosting platform |
| **Frontend CDN** | Deploy `templates/` + `static/` to Netlify |
| **Backend** | Deploy Flask app to Railway / Render / Heroku |
