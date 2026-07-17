# Data Flow Diagrams and User Stories
**Project:** EduGenie – Google Gemini Powered Learning Assistant

---

## Part 1: Data Flow Diagrams

### Level 0 – Context Diagram (DFD)

```
                    ┌─────────────┐
                    │             │
       Topic Input  │   STUDENT   │  Results/Output
    ───────────────>│    (User)   │<───────────────
                    │             │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │             │
                    │  EduGenie   │
                    │  Web App    │
                    │             │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
                    │  Google     │
                    │  Gemini API │
                    │  (Cloud)    │
                    └─────────────┘
```

---

### Level 1 – Main Process DFD

```
Student
  │
  ├──[Topic]──────────> [1.0 Summarize]  ──> Gemini API ──> Summary Text
  │
  ├──[Topic + N]──────> [2.0 Quiz Gen]   ──> Gemini API ──> MCQ Questions
  │
  ├──[Topic + Weeks]──> [3.0 Learn Path] ──> Gemini API ──> Study Roadmap
  │
  ├──[Topic + Q]──────> [4.0 Q&A]        ──> Gemini API ──> Answer Text
  │
  └──[Concept]────────> [5.0 Explain]    ──> Gemini API ──> Explanation
```

---

### Level 2 – Detailed Flow (Quiz Module Example)

```
Student
  │
  │ POST /quiz { topic, num_questions }
  ▼
Flask Route (main.py)
  │
  │ calls generate_quiz(topic, n)
  ▼
quiz_module.py
  │
  │ Builds prompt: "Generate {n} MCQs on {topic}..."
  ▼
Google Gemini API
  │
  │ Returns raw text (MCQ format)
  ▼
quiz_module.py (parse response)
  │
  │ Returns structured JSON
  ▼
Flask Response → Browser → Renders quiz cards
```

---

## Part 2: User Stories

### Epic: AI-Powered Learning Assistant

---

#### 🟢 US-01: Topic Summarization
> **As a** student preparing for an exam,  
> **I want to** get a quick summary of any topic,  
> **So that** I can understand it without reading lengthy textbooks.

**Acceptance Criteria:**
- [ ] User can enter any topic name in a text field
- [ ] System returns a concise, accurate summary (100–300 words)
- [ ] Summary is displayed clearly in the UI
- [ ] Response time < 5 seconds

---

#### 🟢 US-02: Quiz Generation
> **As a** student who wants to test my knowledge,  
> **I want to** generate MCQ quizzes on any topic,  
> **So that** I can assess how well I understand the subject.

**Acceptance Criteria:**
- [ ] User can enter topic + number of questions (1–20)
- [ ] System generates valid MCQs with 4 options each
- [ ] Correct answer is shown after submission
- [ ] Questions are clearly numbered and formatted

---

#### 🟢 US-03: Personalized Learning Path
> **As a** self-learner starting a new topic,  
> **I want to** get a structured week-by-week study plan,  
> **So that** I know exactly what to study and in what order.

**Acceptance Criteria:**
- [ ] User enters topic + preferred duration
- [ ] System returns a detailed, day/week-wise plan
- [ ] Plan includes resources and milestones
- [ ] Displayed in a readable, structured format

---

#### 🟢 US-04: Question & Answer
> **As a** student with a specific doubt,  
> **I want to** ask a question about a topic,  
> **So that** I get an accurate, detailed answer instantly.

**Acceptance Criteria:**
- [ ] User can enter a topic + a specific question
- [ ] System returns a focused, relevant answer
- [ ] Answer includes examples where applicable

---

#### 🟢 US-05: Concept Explanation
> **As a** student confused by technical jargon,  
> **I want to** get a simple explanation of any concept,  
> **So that** I can understand it without prior expertise.

**Acceptance Criteria:**
- [ ] User enters any concept or term
- [ ] System explains it in simple, beginner-friendly language
- [ ] Uses analogies or examples for clarity
