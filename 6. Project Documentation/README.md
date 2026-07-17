# 6. Project Documentation

## Overview
Complete documentation for the EduGenie – Google Gemini Powered Learning Assistant.

---

## Project Abstract
**EduGenie** is an AI-powered educational assistant built using Google's Gemini large language model. It provides students with personalized learning tools including topic summaries, quizzes, learning paths, Q&A, and concept explanations — all through a simple web interface.

---

## Project Structure
```
EduGenie/
├── app/
│   ├── __init__.py
│   ├── main.py               # Flask routes & entry point
│   ├── summary_module.py     # Topic summarization
│   ├── quiz_module.py        # MCQ quiz generation
│   ├── learning_path.py      # Personalized learning path
│   ├── qna.py                # Question & Answer
│   └── explanation_module.py # Concept explanation
├── static/
│   ├── style.css             # Application styles
│   └── script.js             # Frontend JavaScript
├── templates/
│   └── index.html            # Main HTML template
├── .env                      # API key (not tracked by git)
├── .gitignore
└── requirements.txt
```

---

## API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/` | Serves the main page | — |
| POST | `/summarize` | Summarizes a topic | `{ "topic": "..." }` |
| POST | `/quiz` | Generates a quiz | `{ "topic": "...", "num_questions": 5 }` |
| POST | `/learning_path` | Creates learning path | `{ "topic": "...", "duration": "4 weeks" }` |
| POST | `/qna` | Answers a question | `{ "topic": "...", "question": "..." }` |
| POST | `/explain` | Explains a concept | `{ "concept": "..." }` |

---

## Installation & Running

```bash
# 1. Clone the repo
git clone https://github.com/Rushikaputta/EduGenie-Google-Gemini-Powered-Learning-Assistant.git

# 2. Setup virtual environment
python -m venv venv
venv\Scripts\activate   # Windows

# 3. Install dependencies
pip install -r requirements.txt

# 4. Add API Key
# Create a .env file and add:
# GEMINI_API_KEY=your_gemini_api_key

# 5. Run
python app/main.py
```

---

## Technologies Used
| Technology | Purpose |
|------------|---------|
| Python 3.x | Backend language |
| Flask | Web framework |
| Google Gemini API | AI/LLM engine |
| HTML5 / CSS3 | Frontend structure & styling |
| JavaScript (ES6+) | Frontend interactivity |
| Git & GitHub | Version control |

---

## Future Enhancements
- User authentication and progress tracking
- PDF/document upload for custom content summarization
- Multi-language support
- Voice input/output integration
- Mobile app version
