# 3. Project Design Phase

## Overview
This phase covers the system architecture, module design, and UI/UX planning for EduGenie.

## System Architecture

```
┌─────────────────────────────────────────────────┐
│                  Frontend (Browser)              │
│          HTML + CSS + JavaScript                 │
│   (index.html, style.css, script.js)             │
└────────────────────┬────────────────────────────┘
                     │ HTTP Requests (Fetch API)
┌────────────────────▼────────────────────────────┐
│               Flask Backend (Python)             │
│                   app/main.py                    │
│  ┌──────────┐ ┌──────────┐ ┌──────────────────┐ │
│  │ Summary  │ │  Quiz    │ │  Learning Path   │ │
│  │ Module   │ │ Module   │ │     Module       │ │
│  └──────────┘ └──────────┘ └──────────────────┘ │
│  ┌──────────┐ ┌──────────┐                       │
│  │   Q&A   │ │Explanation│                       │
│  │ Module   │ │  Module  │                       │
│  └──────────┘ └──────────┘                       │
└────────────────────┬────────────────────────────┘
                     │ API Calls
┌────────────────────▼────────────────────────────┐
│           Google Gemini API (Cloud)              │
│         google-generativeai SDK                  │
└─────────────────────────────────────────────────┘
```

## Module Design

### `app/main.py`
- Flask entry point
- Defines all API routes (`/summarize`, `/quiz`, `/learning_path`, `/qna`, `/explain`)

### `app/summary_module.py`
- Calls Gemini to generate a topic summary

### `app/quiz_module.py`
- Generates MCQ quiz questions using Gemini

### `app/learning_path.py`
- Creates a structured week-by-week learning plan

### `app/qna.py`
- Handles Q&A queries with context

### `app/explanation_module.py`
- Provides simplified explanations for concepts

## UI/UX Design
- Single-page application (SPA) feel
- Tab-based navigation for each module
- Clean card-based result display
- Responsive layout for mobile and desktop
