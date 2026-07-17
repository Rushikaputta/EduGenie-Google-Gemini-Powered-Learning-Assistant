# 2. Requirement Analysis

## Overview
This phase defines the functional and non-functional requirements for the EduGenie project.

## Functional Requirements
| # | Requirement | Description |
|---|-------------|-------------|
| FR1 | Content Summarization | The system shall summarize any topic provided by the user |
| FR2 | Quiz Generation | The system shall generate MCQ quizzes from a given topic |
| FR3 | Learning Path | The system shall create a step-by-step personalized learning path |
| FR4 | Q&A Module | The system shall answer follow-up questions on any topic |
| FR5 | Explanation Module | The system shall explain concepts in simple language |
| FR6 | User Interface | The system shall have a clean, responsive web interface |

## Non-Functional Requirements
| # | Requirement | Description |
|---|-------------|-------------|
| NFR1 | Performance | API responses within 5 seconds |
| NFR2 | Usability | Intuitive UI accessible to all students |
| NFR3 | Scalability | Backend should handle concurrent requests |
| NFR4 | Security | API keys must be stored securely using environment variables |

## Tech Stack Requirements
- **Backend:** Python 3.x, Flask
- **AI/LLM:** Google Gemini API (`google-generativeai`)
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Deployment:** Netlify (frontend) / Local Flask server
- **Environment:** `python-dotenv` for `.env` management

## Constraints
- Requires active internet connection (Gemini API calls)
- API rate limits apply based on Google Gemini plan
