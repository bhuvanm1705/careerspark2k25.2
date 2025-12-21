
document.addEventListener("DOMContentLoaded", () => {

    // Check Auth
    const userStr = localStorage.getItem("careerSparkUser");
    if (!userStr) {
        window.location.href = "login.html";
        return;
    }

    // Hardcoded Groq Key as requested
    const GROQ_API_KEY = "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";

    // Build the UI elements
    const form = document.getElementById("careerForm");
    const resultBox = document.getElementById("resultContainer");
    const loader = document.getElementById("loader");

    // Hide the API key row if it exists, as we are hardcoding it
    const apiKeyRow = document.getElementById("apiKeyRow");
    if (apiKeyRow) apiKeyRow.style.display = "none";

    const generateBtn = document.getElementById("generateBtn");

    generateBtn.addEventListener("click", async (e) => {
        // e.preventDefault() is implicitly not needed for type="button" but good practice if it were inside a form that could submit. 
        // We will keep it out of precaution though type="button" does not submit.
        e.preventDefault();

        const education = document.getElementById("education").value;
        const skills = document.getElementById("skills").value;
        const internships = document.getElementById("internships").value;
        const interests = document.getElementById("interests").value;

        if (!education || !skills || !internships || !interests) {
            alert("Please fill in all fields.");
            return;
        }

        // UI State
        loader.style.display = "block";
        resultBox.innerHTML = "<p>Analyzing your profile with Gemma on Groq...</p>";

        try {
            const prompt = `
                You are a highly knowledgeable career advisor. Create a detailed, actionable career plan tailored to the following user inputs:
                - Engineering Education: ${education}
                - Skills: ${skills}
                - Internships/Experience: ${internships}
                - Interests: ${interests}

                Structure the plan as follows:
                1. Short-term steps: Break this section down into:
                   a. Immediate actions (0–3 months): Quick wins or high-impact tasks based on their current skills.
                   b. Mid-term steps (5–8 months): Actions to deepen expertise, expand network, or build relevant experience.
                   c. Longer short-term (1–2 years): Projects, certifications, or job transitions to solidify the foundation.
                2. Long-term steps (3–5 years): Steps to advance their career based on interests and background.
                3. Job roles to target: Relevant positions based on their profile.
                4. Skills to learn: New skills to acquire for success.
                5. Resources: Recommended courses, books, or tools (be specific).

                Ensure the plan is concise, practical, and directly reflects the user's inputs. Use Markdown formatting.
            `;

            // Call Groq API
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${GROQ_API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messages: [
                        {
                            role: "user",
                            content: prompt
                        }
                    ],
                    model: "gemma2-9b-it" // Using Google's Gemma model hosted on Groq
                })
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error?.message || "API request failed");
            }

            const data = await response.json();
            const markdownText = data.choices[0]?.message?.content || "No plan generated.";

            // Render Markdown
            resultBox.innerHTML = marked.parse(markdownText);

        } catch (error) {
            console.error("Groq/Gemini Error:", error);
            resultBox.innerHTML = `<div class="alert alert-danger">Error generating plan: ${error.message}</div>`;
        } finally {
            loader.style.display = "none";
        }
    });

});
