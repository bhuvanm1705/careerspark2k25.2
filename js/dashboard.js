document.addEventListener("DOMContentLoaded", () => {

    const user = JSON.parse(localStorage.getItem("careerSparkUser"));
    if (!user) {
        window.location.href = "../pages/login.html";
        return;
    }

    // Dashboard Logout Handler
    const dashLogoutBtn = document.getElementById("dashboardLogout");
    if (dashLogoutBtn) {
        dashLogoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (typeof auth !== 'undefined') {
                auth.signOut().then(() => {
                    localStorage.removeItem("careerSparkUser");
                    window.location.href = "../index.html";
                });
            } else {
                localStorage.removeItem("careerSparkUser");
                window.location.href = "../index.html";
            }
        });
    }

    // Sync with Firebase Auth
    if (typeof auth !== 'undefined') {
        auth.onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                // Determine name from Firebase OR LocalStorage
                const displayName = firebaseUser.displayName || user.name || firebaseUser.email.split("@")[0];

                // Update UI
                const dashUser = document.getElementById("dashUser");
                if (dashUser) dashUser.textContent = displayName;

                const navUsername = document.querySelector('.nav-username');
                if (navUsername) navUsername.textContent = displayName;

                // Sync back to local storage if missing
                if (!user.name || user.name !== displayName) {
                    user.name = displayName;
                    localStorage.setItem("careerSparkUser", JSON.stringify(user));
                    if (typeof saveUserProgress === 'function') saveUserProgress(user);
                }
            }
        });
    } else {
        // Fallback for offline/local only
        if (user.name) {
            document.getElementById("dashUser").textContent = user.name;
            const navUsername = document.querySelector('.nav-username');
            if (navUsername) navUsername.textContent = user.name;
        }
    }

    const enrolled = user.enrolledCourses || [];

    /* =========================
       COUNTS (TOP CARDS)
    ========================== */

    document.getElementById("courseCount").innerText = enrolled.length;

    // Quiz completed = at least one quiz done
    document.getElementById("quizCount").innerText =
        enrolled.filter(c =>
            c.beginner?.quiz ||
            c.intermediate?.quiz ||
            c.advanced?.quiz
        ).length;

    document.getElementById("certCount").innerText =
        enrolled.filter(c => c.certificateIssued).length;

    /* =========================
       ENROLLED COURSES LIST
    ========================== */

    const container = document.getElementById("enrolledCourses");
    container.innerHTML = "";

    if (enrolled.length === 0) {
        container.innerHTML =
            `<p class="text-center">No courses enrolled yet.</p>`;
        return;
    }

    enrolled.forEach(entry => {
        const progress = calculateProgress(entry);

        container.innerHTML += `
            <div class="col-md-4">
                <div class="course-card">
                    <h4>${entry.course}</h4>

                    <p>Progress: ${progress}%</p>

                    <div class="progress">
                        <div class="progress-bar"
                             style="width:${progress}%">
                        </div>
                    </div>

                    <a href="../course.html?course=${encodeURIComponent(entry.course)}"
                        class="btn btn-primary btn-sm">
                        Continue
                    </a>

                </div>
            </div>
        `;
    });
});

/* =========================
   PROGRESS CALCULATION
========================== */
function calculateProgress(entry) {
    let completed = 0;

    ["beginner", "intermediate", "advanced"].forEach(level => {
        if (entry[level]?.course) completed++;
        if (entry[level]?.game) completed++;
        if (entry[level]?.quiz) completed++;
    });

    if (entry.practiceCompleted) completed++;
    if (entry.certificateIssued) completed++;

    return Math.round((completed / 11) * 100);
}
