# 5. Project Development Phase

## Overview
This phase documents the actual implementation and development of EduGenie.

## Development Environment Setup

```bash
# Clone the repository
git clone https://github.com/Rushikaputta/EduGenie-Google-Gemini-Powered-Learning-Assistant.git
cd EduGenie-Google-Gemini-Powered-Learning-Assistant

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file and add your API key
echo GEMINI_API_KEY=your_api_key_here > .env

# Run the application
python app/main.py
```

## Modules Implemented

### ✅ `app/main.py` – Flask Entry Point
- Initializes the Flask app
- Defines routes: `/`, `/summarize`, `/quiz`, `/learning_path`, `/qna`, `/explain`
- Handles CORS and JSON request/response

### ✅ `app/summary_module.py` – Summary Generator
- Takes a topic as input
- Calls Gemini API to generate a concise summary
- Returns formatted text response

### ✅ `app/quiz_module.py` – Quiz Generator
- Takes a topic and number of questions as input
- Generates MCQ questions with 4 options and correct answers
- Returns structured JSON quiz data

### ✅ `app/learning_path.py` – Learning Path Creator
- Takes a topic and duration as input
- Generates a week-by-week structured learning plan
- Returns formatted learning roadmap

### ✅ `app/qna.py` – Q&A Module
- Takes a topic and user question as input
- Returns a detailed answer using Gemini

### ✅ `app/explanation_module.py` – Explanation Module
- Takes a concept as input
- Returns a simplified, beginner-friendly explanation

## Frontend Implementation

### `templates/index.html`
- Single-page layout with tabbed navigation
- Forms for each module input

### `static/style.css`
- Responsive design
- Card-based UI components

### `static/script.js`
- Fetch API calls to Flask backend
- Dynamic result rendering
- Error handling

## Dependencies (`requirements.txt`)
- `flask` – Web framework
- `google-generativeai` – Gemini API SDK
- `python-dotenv` – Environment variable management
- `flask-cors` – Cross-origin resource sharing
