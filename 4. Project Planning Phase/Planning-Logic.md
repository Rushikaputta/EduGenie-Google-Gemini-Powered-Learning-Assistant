# Planning Logic
**Project:** EduGenie – Google Gemini Powered Learning Assistant

---

## Planning Methodology

EduGenie follows an **Agile-inspired iterative approach** with weekly sprints.

---

## Sprint Planning

### Sprint 1 – Project Foundation (Week 1)
**Goal:** Set up the project structure and environment

| Task | Owner | Effort | Status |
|------|-------|--------|--------|
| Create GitHub repository | Team | 1 hr | ✅ Done |
| Set up Python virtual environment | Team | 30 min | ✅ Done |
| Install all dependencies | Team | 30 min | ✅ Done |
| Obtain Gemini API key | Team | 30 min | ✅ Done |
| Create Flask boilerplate `main.py` | Dev | 2 hr | ✅ Done |

---

### Sprint 2 – Core Modules (Weeks 2–3)
**Goal:** Implement all 5 AI-powered backend modules

| Task | Module | Effort | Status |
|------|--------|--------|--------|
| Summary generation | `summary_module.py` | 3 hr | ✅ Done |
| Quiz generation | `quiz_module.py` | 4 hr | ✅ Done |
| Learning path generation | `learning_path.py` | 3 hr | ✅ Done |
| Q&A module | `qna.py` | 2 hr | ✅ Done |
| Explanation module | `explanation_module.py` | 2 hr | ✅ Done |

---

### Sprint 3 – Frontend (Week 4)
**Goal:** Build a clean, functional web interface

| Task | File | Effort | Status |
|------|------|--------|--------|
| HTML page structure | `index.html` | 2 hr | ✅ Done |
| CSS styling | `style.css` | 3 hr | ✅ Done |
| JavaScript API calls | `script.js` | 3 hr | ✅ Done |
| Tab navigation logic | `script.js` | 1 hr | ✅ Done |

---

### Sprint 4 – Testing & Integration (Week 5)
**Goal:** End-to-end testing and bug fixes

| Task | Tool | Effort | Status |
|------|------|--------|--------|
| Test all API endpoints | Browser DevTools | 2 hr | ✅ Done |
| Test error handling | Manual | 2 hr | ✅ Done |
| UI responsiveness testing | Chrome DevTools | 1 hr | ✅ Done |
| Performance testing | Manual timing | 1 hr | ✅ Done |

---

### Sprint 5 – Documentation & Demo (Weeks 6–7)
**Goal:** Complete documentation and prepare presentation

| Task | Effort | Status |
|------|--------|--------|
| Write README.md | 2 hr | ✅ Done |
| Create project phase documentation | 3 hr | ✅ Done |
| Prepare demo scenarios | 1 hr | ✅ Done |
| Final GitHub push | 30 min | ✅ Done |

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Gemini API rate limit exceeded | Medium | High | Use caching; limit requests during demo |
| API key exposed in git | Low | Critical | `.gitignore` + `.env` file |
| Slow API responses | Medium | Medium | Add loading spinners in UI |
| Gemini model deprecation | Low | High | Use latest stable model name |
| Internet connectivity issues | Low | High | Test offline fallback messages |

---

## Resource Allocation

| Resource | Allocation |
|----------|-----------|
| Python Developer | 70% backend, 30% integration |
| Frontend Developer | 100% HTML/CSS/JS |
| AI/Prompt Engineer | 100% Gemini prompt design |
| Documentation | Shared across team |
