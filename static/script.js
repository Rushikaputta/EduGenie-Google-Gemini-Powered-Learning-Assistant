// ---------- Q&A ----------
document.getElementById("qaForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const question = document.getElementById("question").value;
    const resultDiv = document.getElementById("qaResult");
    resultDiv.innerText = "Thinking...";
 
    const res = await fetch(`/qa?question=${encodeURIComponent(question)}`);
    const data = await res.json();
    resultDiv.innerText = data.answer || data.error;
});
 
// ---------- Explanation ----------
document.getElementById("explainForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const topic = document.getElementById("topic").value;
    const resultDiv = document.getElementById("explanationResult");
    resultDiv.innerText = "Generating explanation...";
 
    const res = await fetch("/explain/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic })
    });
    const data = await res.json();
    resultDiv.innerText = data.explanation || data.error;
});
 
// ---------- Summary ----------
document.getElementById("summaryForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = document.getElementById("summaryText").value;
    const resultDiv = document.getElementById("summaryResult");
    resultDiv.innerText = "Summarizing...";
 
    const res = await fetch("/summarize/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });
    const data = await res.json();
    resultDiv.innerText = data.summary || data.error;
});
 
let currentQuizData = [];

// ---------- Quiz ----------
document.getElementById("quizForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = document.getElementById("quizText").value;
    const resultDiv = document.getElementById("quizResult");
    resultDiv.innerHTML = '<div class="loading-status">Generating quiz...</div>';
 
    const res = await fetch("/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });
    const data = await res.json();
 
    if (Array.isArray(data.quiz)) {
        currentQuizData = data.quiz;
        resultDiv.innerHTML = data.quiz.map((q, i) => `
            <div class="quiz-question-container">
                <p class="quiz-question-title"><strong>Q${i + 1}: ${q.question}</strong></p>
                <div class="quiz-options-list">
                    ${(q.options || []).map((opt, j) => `
                        <div class="quiz-option-item">
                            <input type="radio" name="q-${i}" id="q-${i}-opt-${j}" value="${opt.replace(/"/g, '&quot;')}" class="quiz-radio">
                            <label for="q-${i}-opt-${j}" class="quiz-label">${opt}</label>
                        </div>
                    `).join("")}
                </div>
                <button type="button" class="check-btn" data-index="${i}">Check Answer</button>
                <div id="feedback-${i}" class="quiz-feedback"></div>
            </div>
        `).join("");
    } else {
        resultDiv.innerText = JSON.stringify(data.quiz);
    }
});

// Handle checking answers via event delegation
document.getElementById("quizResult").addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("check-btn")) {
        const index = parseInt(e.target.getAttribute("data-index"));
        const resultDiv = document.getElementById("quizResult");
        const selectedOption = resultDiv.querySelector(`input[name="q-${index}"]:checked`);
        const feedbackDiv = resultDiv.querySelector(`#feedback-${index}`);
        
        if (!selectedOption) {
            feedbackDiv.innerHTML = `<span class="warning-text">⚠️ Please select an option first!</span>`;
            return;
        }
        
        const userAnswer = selectedOption.value;
        const correctAnswer = currentQuizData[index].answer;
        
        // Find which option matches correct answer for high-fidelity highlighting
        const optionsList = resultDiv.querySelectorAll(`input[name="q-${index}"]`);
        optionsList.forEach(opt => {
            const label = resultDiv.querySelector(`label[for="${opt.id}"]`);
            // Reset styles
            label.style.fontWeight = "normal";
            label.style.color = "";
        });

        if (userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
            feedbackDiv.innerHTML = `<span class="correct-text">✅ Correct!</span>`;
            // Highlight chosen correct option in green
            const chosenLabel = resultDiv.querySelector(`label[for="${selectedOption.id}"]`);
            chosenLabel.style.fontWeight = "bold";
            chosenLabel.style.color = "#16a34a";
        } else {
            feedbackDiv.innerHTML = `<span class="incorrect-text">❌ Incorrect! The correct answer is: <strong>${correctAnswer}</strong></span>`;
            // Highlight chosen incorrect in red, and correct in green
            const chosenLabel = resultDiv.querySelector(`label[for="${selectedOption.id}"]`);
            chosenLabel.style.fontWeight = "bold";
            chosenLabel.style.color = "#dc2626";
            
            optionsList.forEach(opt => {
                if (opt.value.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
                    const correctLabel = resultDiv.querySelector(`label[for="${opt.id}"]`);
                    correctLabel.style.fontWeight = "bold";
                    correctLabel.style.color = "#16a34a";
                }
            });
        }
    }
});
 
// ---------- Learning Path ----------
document.getElementById("learnForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const topic = document.getElementById("learnTopic").value;
    const resultDiv = document.getElementById("learnResult");
    resultDiv.innerHTML = '<div class="loading-status">Building your learning path...</div>';
 
    const res = await fetch(`/learn/recommendations?topic=${encodeURIComponent(topic)}`);
    const data = await res.json();
    
    if (data.recommendation) {
        resultDiv.innerHTML = `
            <div class="recommendation-container">
                <div class="recommendation-title">Learning Recommendations for "${topic}":</div>
                <pre class="recommendation-text">${data.recommendation}</pre>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div class="recommendation-container">
                <div class="recommendation-title">Error:</div>
                <pre class="recommendation-text" style="color: #dc2626;">${data.error || 'Unknown error occurred'}</pre>
            </div>
        `;
    }
});
