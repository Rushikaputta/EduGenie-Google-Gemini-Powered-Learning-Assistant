# Solution Architecture
**Project:** EduGenie – Google Gemini Powered Learning Assistant

---

## Architecture Type
**Monolithic Web Application** with REST API backend and single-page frontend.

---

## Component Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT (Browser)                        │
│                                                             │
│  templates/index.html   static/style.css   static/script.js│
│       (Structure)           (Style)         (Behaviour)     │
└────────────────────────────┬────────────────────────────────┘
                             │ HTTP (Fetch API)
                             │ POST requests to Flask
┌────────────────────────────▼────────────────────────────────┐
│                  SERVER (Flask - Python)                     │
│                                                             │
│  app/main.py  ──── Flask Routes                             │
│  ├── GET  /              → Render index.html                │
│  ├── POST /summarize     → summary_module.generate()        │
│  ├── POST /quiz          → quiz_module.generate()           │
│  ├── POST /learning_path → learning_path.generate()         │
│  ├── POST /qna           → qna.answer()                     │
│  └── POST /explain       → explanation_module.explain()     │
│                                                             │
│  app/__init__.py  ──── App initialization                   │
└────────────────────────────┬────────────────────────────────┘
                             │ google-generativeai SDK
                             │ (GEMINI_API_KEY from .env)
┌────────────────────────────▼────────────────────────────────┐
│              EXTERNAL SERVICE (Google Gemini API)            │
│                                                             │
│  Model: gemini-pro                                          │
│  Input: Text prompt                                         │
│  Output: Generated text response                            │
└─────────────────────────────────────────────────────────────┘
```

---

## File Architecture

```
edugemini/
├── app/                          # Backend Python package
│   ├── __init__.py               # Package initializer
│   ├── main.py                   # Flask entry point & routes
│   ├── summary_module.py         # Summary generation logic
│   ├── quiz_module.py            # Quiz generation logic
│   ├── learning_path.py          # Learning path logic
│   ├── qna.py                    # Q&A logic
│   └── explanation_module.py     # Concept explanation logic
│
├── static/                       # Frontend static assets
│   ├── style.css                 # App stylesheet
│   └── script.js                 # Frontend JavaScript
│
├── templates/                    # Jinja2 HTML templates
│   └── index.html                # Main single-page app
│
├── .env                          # API key (excluded from git)
├── .gitignore                    # Git exclusion rules
└── requirements.txt              # Python dependencies
```

---

## Data Flow Architecture

```
User Input (Browser Form)
        │
        ▼
  JavaScript (Fetch API)
        │ POST /endpoint
        ▼
  Flask Route (main.py)
        │ calls module function
        ▼
  Python Module
        │ builds prompt string
        ▼
  Gemini API Call
        │ returns generated text
        ▼
  Module returns result
        │
        ▼
  Flask sends JSON response
        │
        ▼
  JavaScript renders result in DOM
```

---

## Security Architecture

| Layer | Security Measure |
|-------|-----------------|
| API Key | Stored in `.env`, never sent to frontend |
| .gitignore | `.env` excluded from version control |
| Input Validation | Basic server-side validation on all inputs |
| CORS | Controlled via `flask-cors` |

---

## Deployment Architecture

```
Development:
  localhost:5000  (Flask dev server)

Production (optional):
  - Backend: Railway / Render / Heroku
  - Frontend: Netlify (static HTML/JS/CSS)
  - API Key: Set as environment variable in hosting platform
```
