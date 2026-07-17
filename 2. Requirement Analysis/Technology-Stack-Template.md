# Technology Stack Template
**Project:** EduGenie – Google Gemini Powered Learning Assistant

---

## Selected Technology Stack

### Backend

| Technology | Version | Purpose | Why Chosen |
|------------|---------|---------|------------|
| **Python** | 3.8+ | Core programming language | Widely used, excellent AI/ML library support |
| **Flask** | 3.x | Web framework | Lightweight, easy to use, perfect for REST APIs |
| **google-generativeai** | Latest | Gemini API SDK | Official Google SDK for Gemini LLM access |
| **python-dotenv** | Latest | Environment variables | Securely loads `.env` file for API key management |
| **flask-cors** | Latest | CORS handling | Allows frontend-backend communication |

### Frontend

| Technology | Version | Purpose | Why Chosen |
|------------|---------|---------|------------|
| **HTML5** | — | Page structure | Standard web markup |
| **CSS3** | — | Styling & layout | Custom responsive design |
| **JavaScript (ES6+)** | — | Interactivity & API calls | Native browser, no framework needed |
| **Fetch API** | — | HTTP requests | Built-in, no extra library required |

### AI / LLM

| Technology | Purpose | Notes |
|------------|---------|-------|
| **Google Gemini** | Core AI engine | Powers all 5 learning modules |
| **Model: gemini-pro** | Text generation | Used for summarization, quiz, Q&A, etc. |

### DevOps & Tools

| Tool | Purpose |
|------|---------|
| **Git** | Version control |
| **GitHub** | Remote repository hosting |
| **VS Code** | Primary IDE |
| **Postman / Browser DevTools** | API testing |
| **Netlify** | Frontend deployment (optional) |

---

## Dependencies (`requirements.txt`)

```txt
flask
google-generativeai
python-dotenv
flask-cors
```

---

## Architecture Decision Records (ADRs)

### ADR-1: Flask over Django
- **Decision:** Use Flask instead of Django
- **Reason:** Project is small-scale; Flask is lighter and faster to set up for REST APIs

### ADR-2: Vanilla JS over React
- **Decision:** Use plain JavaScript instead of React
- **Reason:** Keeps the project simple and dependency-free; sufficient for single-page functionality

### ADR-3: Gemini over GPT
- **Decision:** Use Google Gemini API instead of OpenAI GPT
- **Reason:** Project theme is Google Gemini; free tier available; strong performance on educational content

### ADR-4: .env for API Key Management
- **Decision:** Store API key in `.env` file
- **Reason:** Security best practice — prevents accidental exposure via version control
