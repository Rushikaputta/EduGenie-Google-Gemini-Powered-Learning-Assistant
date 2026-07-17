# User Acceptance Testing (UAT)
**Project:** EduGenie – Google Gemini Powered Learning Assistant

---

## Overview
UAT verifies that EduGenie meets real-world user expectations and all functional requirements are satisfied from a student's perspective.

---

## UAT Test Environment
- **URL:** `http://localhost:5000`
- **Browser:** Google Chrome (latest)
- **Tester Role:** Student / End User
- **Gemini API:** Active key configured in `.env`

---

## UAT Test Cases

### Module 1: Topic Summarization

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| UAT-1.1 | Valid topic | Enter "Machine Learning" → Click Summarize | Displays 150–300 word summary | ✅ Pass |
| UAT-1.2 | Short topic | Enter "Python" → Click Summarize | Displays relevant summary | ✅ Pass |
| UAT-1.3 | Empty input | Leave blank → Click Summarize | Shows error message | ✅ Pass |
| UAT-1.4 | Special characters | Enter "C++" → Click Summarize | Handles gracefully | ✅ Pass |

---

### Module 2: Quiz Generation

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| UAT-2.1 | 5 questions | Enter "AI", 5 → Generate Quiz | 5 MCQs displayed with answers | ✅ Pass |
| UAT-2.2 | 1 question | Enter "Python", 1 → Generate Quiz | 1 MCQ displayed | ✅ Pass |
| UAT-2.3 | 10 questions | Enter "Data Science", 10 → Generate | 10 MCQs displayed | ✅ Pass |
| UAT-2.4 | Invalid count | Enter 0 or negative number | Shows validation error | ✅ Pass |

---

### Module 3: Learning Path

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| UAT-3.1 | 4-week plan | Enter "Python", "4 weeks" | Structured 4-week plan | ✅ Pass |
| UAT-3.2 | 8-week plan | Enter "Machine Learning", "8 weeks" | Detailed 8-week roadmap | ✅ Pass |
| UAT-3.3 | Beginner topic | Enter "HTML", "2 weeks" | Beginner-appropriate plan | ✅ Pass |

---

### Module 4: Q&A

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| UAT-4.1 | Simple question | Topic: "ML", Q: "What is overfitting?" | Clear, accurate answer | ✅ Pass |
| UAT-4.2 | Complex question | Topic: "NLP", Q: "Explain attention mechanism" | Detailed response | ✅ Pass |
| UAT-4.3 | Unrelated question | Topic: "Python", Q: "What is photosynthesis?" | Handles gracefully | ✅ Pass |

---

### Module 5: Concept Explanation

| Test ID | Test Case | Steps | Expected Result | Status |
|---------|-----------|-------|-----------------|--------|
| UAT-5.1 | Technical concept | Enter "Backpropagation" | Simple, analogy-based explanation | ✅ Pass |
| UAT-5.2 | Common concept | Enter "Algorithm" | Beginner-friendly explanation | ✅ Pass |
| UAT-5.3 | Jargon term | Enter "Gradient Descent" | Clear explanation with example | ✅ Pass |

---

### UI/UX Tests

| Test ID | Test Case | Expected Result | Status |
|---------|-----------|-----------------|--------|
| UAT-6.1 | Page loads | App loads in < 2 seconds | ✅ Pass |
| UAT-6.2 | Tab switching | All tabs work correctly | ✅ Pass |
| UAT-6.3 | Loading state | Spinner shown during API call | ✅ Pass |
| UAT-6.4 | Mobile view | Responsive on 375px width | ✅ Pass |
| UAT-6.5 | Error display | User-friendly error on API failure | ✅ Pass |

---

## UAT Sign-off

| Role | Name | Sign-off Status |
|------|------|-----------------|
| Developer | Team | ✅ Approved |
| Tester | Team | ✅ Approved |
| Project Lead | Team | ✅ Approved |

**Overall UAT Result: ✅ PASSED**
