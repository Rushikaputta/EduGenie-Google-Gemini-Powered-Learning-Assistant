# Proposed Solution
**Project:** EduGenie – Google Gemini Powered Learning Assistant

---

## Solution Overview

**EduGenie** is a web-based AI learning assistant that uses Google Gemini to provide students with:
1. Topic Summaries
2. Practice Quizzes
3. Personalized Learning Paths
4. Instant Q&A
5. Concept Explanations

---

## High-Level Solution Design

```
┌────────────────────────────────────────────┐
│              EduGenie Web App              │
│                                            │
│  ┌──────────┐   ┌──────────────────────┐  │
│  │  index   │   │   Flask REST API     │  │
│  │  .html   │◄──┤   (app/main.py)      │  │
│  │          │   │                      │  │
│  │ script.js│──►│  /summarize          │  │
│  │          │   │  /quiz               │  │
│  │ style.css│   │  /learning_path      │  │
│  └──────────┘   │  /qna                │  │
│                 │  /explain            │  │
│                 └──────────┬───────────┘  │
│                            │              │
│                 ┌──────────▼───────────┐  │
│                 │  AI Modules (Python) │  │
│                 │  summary_module.py   │  │
│                 │  quiz_module.py      │  │
│                 │  learning_path.py    │  │
│                 │  qna.py              │  │
│                 │  explanation_module  │  │
│                 └──────────┬───────────┘  │
└────────────────────────────┼──────────────┘
                             │ Gemini API Call
                    ┌────────▼────────┐
                    │  Google Gemini  │
                    │  (gemini-pro)   │
                    └─────────────────┘
```

---

## Module-wise Proposed Design

### Module 1: Summary Generator
- **Input:** Topic (string)
- **Prompt:** `"Summarize the topic '{topic}' in 200 words for a student."`
- **Output:** Plain text summary
- **File:** `app/summary_module.py`

### Module 2: Quiz Generator
- **Input:** Topic (string), Number of questions (int)
- **Prompt:** `"Generate {n} MCQ questions on '{topic}' with 4 options and correct answer marked."`
- **Output:** Parsed list of question objects
- **File:** `app/quiz_module.py`

### Module 3: Learning Path
- **Input:** Topic (string), Duration (string)
- **Prompt:** `"Create a {duration} learning roadmap for '{topic}' for a beginner student."`
- **Output:** Structured week-by-week plan text
- **File:** `app/learning_path.py`

### Module 4: Q&A
- **Input:** Topic (string), Question (string)
- **Prompt:** `"Answer the question '{question}' about the topic '{topic}'."`
- **Output:** Detailed answer text
- **File:** `app/qna.py`

### Module 5: Concept Explainer
- **Input:** Concept (string)
- **Prompt:** `"Explain '{concept}' in simple terms with an analogy for a beginner."`
- **Output:** Easy-to-understand explanation
- **File:** `app/explanation_module.py`

---

## UI Design Approach
- Single HTML page with tab-based navigation
- Each tab reveals a form for input + result area for output
- Clean, modern CSS design with card components
- JavaScript Fetch API for async backend calls
