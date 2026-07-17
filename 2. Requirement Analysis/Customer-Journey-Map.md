# Customer Journey Map – EduGenie
**Project:** EduGenie – Google Gemini Powered Learning Assistant

---

## User: College Student preparing for exams

| Stage | Awareness | Consideration | Decision | Usage | Loyalty |
|-------|-----------|---------------|----------|-------|---------|
| **User Goal** | Find a study tool | Compare options | Choose EduGenie | Use features | Return regularly |
| **Actions** | Googles "AI study helper" | Visits GitHub/site | Opens EduGenie app | Enters topic, gets output | Bookmarks & revisits |
| **Touchpoints** | Search engine, Social media | GitHub README, Demo | Web browser (localhost) | Web app UI | App URL / Browser history |
| **Emotions** | 😟 Stressed about exams | 🤔 Curious, evaluating | 😊 Hopeful | 🤩 Impressed by AI output | 😃 Satisfied, loyal |
| **Pain Points** | Too many generic tools | Hard to compare features | Unsure how to run locally | Slow API response sometimes | Wants more features |
| **Opportunities** | Clear README & demo video | Feature highlights on landing page | One-click setup | Loading spinners & fast UX | Add new modules (flashcards, PDF) |

---

## Detailed Journey Stages

### Stage 1: Awareness
- Student is stressed about upcoming exam
- Searches for "AI study assistant" or "Gemini education tool"
- Discovers EduGenie on GitHub or via a peer

### Stage 2: Consideration
- Reads the README and sees the 5 AI modules
- Looks at the project structure and tech stack
- Decides it's worth trying (free, open-source, simple)

### Stage 3: Decision & Setup
```bash
git clone https://github.com/Rushikaputta/EduGenie...
pip install -r requirements.txt
python app/main.py
```
- Opens `http://localhost:5000` in browser

### Stage 4: Active Usage
| Feature Used | Input | Output | Satisfaction |
|-------------|-------|--------|--------------|
| Summarizer | "Machine Learning" | Concise 200-word summary | ⭐⭐⭐⭐⭐ |
| Quiz | "Neural Networks, 5 questions" | 5 MCQs with answers | ⭐⭐⭐⭐⭐ |
| Learning Path | "Python, 4 weeks" | Week-by-week roadmap | ⭐⭐⭐⭐ |
| Q&A | "What is backpropagation?" | Detailed explanation | ⭐⭐⭐⭐⭐ |
| Explainer | "Gradient Descent" | Simple analogy-based explanation | ⭐⭐⭐⭐⭐ |

### Stage 5: Loyalty
- Student bookmarks the app
- Shares with classmates
- Uses it before every exam
- Provides feedback for future improvements
