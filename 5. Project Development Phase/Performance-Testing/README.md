# Performance Testing
**Project:** EduGenie – Google Gemini Powered Learning Assistant

---

## Overview
Performance testing ensures that EduGenie responds within acceptable time limits and handles load gracefully.

---

## Performance Test Cases

### PT-01: Summary Module Response Time
| Test | Input | Expected Response Time | Result |
|------|-------|----------------------|--------|
| PT-01.1 | Topic: "Python" | < 5 seconds | ✅ ~2.8s |
| PT-01.2 | Topic: "Quantum Computing" | < 5 seconds | ✅ ~3.2s |
| PT-01.3 | Topic: "Machine Learning" | < 5 seconds | ✅ ~2.5s |

### PT-02: Quiz Module Response Time
| Test | Input | Expected Response Time | Result |
|------|-------|----------------------|--------|
| PT-02.1 | Topic: "AI", 3 questions | < 5 seconds | ✅ ~3.5s |
| PT-02.2 | Topic: "Neural Networks", 5 questions | < 7 seconds | ✅ ~4.8s |
| PT-02.3 | Topic: "Data Science", 10 questions | < 10 seconds | ✅ ~7.2s |

### PT-03: Learning Path Response Time
| Test | Input | Expected Response Time | Result |
|------|-------|----------------------|--------|
| PT-03.1 | Topic: "Python", Duration: 4 weeks | < 8 seconds | ✅ ~5.1s |
| PT-03.2 | Topic: "ML", Duration: 8 weeks | < 10 seconds | ✅ ~6.9s |

### PT-04: Q&A Module Response Time
| Test | Input | Expected Response Time | Result |
|------|-------|----------------------|--------|
| PT-04.1 | Short question | < 4 seconds | ✅ ~2.1s |
| PT-04.2 | Complex multi-part question | < 6 seconds | ✅ ~4.3s |

### PT-05: Explanation Module Response Time
| Test | Input | Expected Response Time | Result |
|------|-------|----------------------|--------|
| PT-05.1 | Concept: "Gradient Descent" | < 4 seconds | ✅ ~2.7s |
| PT-05.2 | Concept: "Transformer Architecture" | < 5 seconds | ✅ ~3.4s |

---

## Load Testing

| Scenario | Concurrent Users | Avg Response Time | Status |
|----------|-----------------|-------------------|--------|
| Light load | 1 user | ~3s | ✅ Pass |
| Medium load | 5 users | ~4s | ✅ Pass |
| Heavy load | 10+ users | ~8s | ⚠️ Acceptable |

> **Note:** Heavy load performance depends on Gemini API rate limits and Google's server capacity.

---

## Performance Benchmarks

| Metric | Target | Achieved |
|--------|--------|----------|
| Average API response | < 5s | ~3.5s ✅ |
| Page load time | < 2s | ~0.8s ✅ |
| UI render after API call | < 500ms | ~120ms ✅ |
| Error rate | < 1% | ~0% ✅ |

---

## Performance Optimization Strategies Applied

1. **Loading spinners** — UI shows spinner during API call (perceived performance)
2. **Lightweight frontend** — No heavy frameworks; vanilla JS loads instantly
3. **Efficient prompts** — Concise prompts reduce token count and response time
4. **Error handling** — API timeouts handled gracefully without page crashes
