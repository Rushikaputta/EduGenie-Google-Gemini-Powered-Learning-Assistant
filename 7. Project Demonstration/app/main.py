import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
 
from fastapi import FastAPI, Request, Query
from fastapi.responses import JSONResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
 
from app.qna import answer_question_with_gemini
from app.explanation_module import explain_topic
from app.summary_module import summarize_text
from app.quiz_module import generate_quiz
from app.learning_path import get_learning_recommendations
 
# ---------------------------------------------------------
# Gemini configuration
# ---------------------------------------------------------
# Put your key in an environment variable: export GEMINI_API_KEY="your_key_here"
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "PASTE_YOUR_GEMINI_API_KEY_HERE")
genai.configure(api_key=GEMINI_API_KEY)
 
# ---------------------------------------------------------
# App setup
# ---------------------------------------------------------
app = FastAPI(title="EduGenie - AI Learning Assistant")
 
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")
 
 
@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse(request, "index.html")
 
 
# -----------------------------
# Q&A - GET API using Gemini
# -----------------------------
@app.get("/qa")
async def answer_question(question: str = Query(...)):
    answer = answer_question_with_gemini(question)
    return {"answer": answer}
 
 
# -----------------------------
# Explanation - POST API
# -----------------------------
@app.post("/explain/")
async def explain_api(request: Request):
    data = await request.json()
    topic = data.get("topic")
    if not topic:
        return JSONResponse(content={"error": "Please provide a topic."}, status_code=400)
    explanation = explain_topic(topic)
    return {"topic": topic, "explanation": explanation}
 
 
# -----------------------------
# Summarization - POST API
# -----------------------------
@app.post("/summarize/")
async def summarize_api(request: Request):
    data = await request.json()
    text = data.get("text")
    if not text:
        return JSONResponse(content={"error": "Please provide text to summarize."}, status_code=400)
    summary = summarize_text(text)
    return {"summary": summary}
 
 
# -----------------------------
# Quiz Generation - POST API
# -----------------------------
@app.post("/quiz")
async def quiz_api(request: Request):
    data = await request.json()
    text = data.get("text")
    if not text:
        return JSONResponse(content={"error": "Please provide text for quiz."}, status_code=400)
    quiz = generate_quiz(text)
    print("Generated quiz:", quiz)  # ✅ DEBUG
    return JSONResponse(content={"quiz": quiz})
 
 
# -----------------------------
# Learning Recommendations - GET API
# -----------------------------
@app.get("/learn/recommendations")
async def learning_recommendation_api(topic: str = Query(...)):
    recommendation = get_learning_recommendations(topic)
    return {"topic": topic, "recommendation": recommendation}
 