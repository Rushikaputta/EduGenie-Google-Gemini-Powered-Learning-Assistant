# Solution Requirements Document
**Project:** EduGenie – Google Gemini Powered Learning Assistant  
**Version:** 1.0 | **Date:** 2025

---

## 1. Functional Requirements

### FR-1: Summary Module
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-1.1 | System shall accept a topic string as input | Must Have |
| FR-1.2 | System shall call Gemini API with a summarization prompt | Must Have |
| FR-1.3 | System shall return a 100–300 word summary | Must Have |
| FR-1.4 | System shall display the summary in the browser | Must Have |

### FR-2: Quiz Module
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-2.1 | System shall accept topic and number of questions | Must Have |
| FR-2.2 | System shall generate MCQs with 4 options each | Must Have |
| FR-2.3 | System shall indicate the correct answer | Must Have |
| FR-2.4 | Number of questions shall be between 1 and 20 | Must Have |

### FR-3: Learning Path Module
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-3.1 | System shall accept topic and study duration | Must Have |
| FR-3.2 | System shall generate a structured weekly study plan | Must Have |
| FR-3.3 | Plan shall include topics, resources, and goals | Should Have |

### FR-4: Q&A Module
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-4.1 | System shall accept a topic and a user question | Must Have |
| FR-4.2 | System shall return a relevant, detailed answer | Must Have |
| FR-4.3 | Answer shall include examples where applicable | Should Have |

### FR-5: Explanation Module
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-5.1 | System shall accept a concept or term as input | Must Have |
| FR-5.2 | System shall return a beginner-friendly explanation | Must Have |
| FR-5.3 | Explanation shall use analogies for complex concepts | Should Have |

---

## 2. Non-Functional Requirements

| ID | Category | Requirement |
|----|----------|-------------|
| NFR-1 | Performance | API response time < 5 seconds under normal load |
| NFR-2 | Usability | UI shall be intuitive — no training needed |
| NFR-3 | Reliability | App shall handle API errors gracefully |
| NFR-4 | Security | API key stored in `.env`, never exposed to frontend |
| NFR-5 | Scalability | Flask app shall support multiple concurrent requests |
| NFR-6 | Compatibility | Works on Chrome, Firefox, Edge (latest versions) |
| NFR-7 | Accessibility | Responsive design for desktop and mobile |

---

## 3. API Requirements

| Endpoint | Method | Input | Output |
|----------|--------|-------|--------|
| `/` | GET | — | HTML page |
| `/summarize` | POST | `{ "topic": str }` | `{ "summary": str }` |
| `/quiz` | POST | `{ "topic": str, "num_questions": int }` | `{ "quiz": list }` |
| `/learning_path` | POST | `{ "topic": str, "duration": str }` | `{ "path": str }` |
| `/qna` | POST | `{ "topic": str, "question": str }` | `{ "answer": str }` |
| `/explain` | POST | `{ "concept": str }` | `{ "explanation": str }` |

---

## 4. Constraints

- Requires active internet connection for Gemini API
- API key must be obtained from Google AI Studio
- Python 3.8+ required
- Gemini API has rate limits based on usage tier
