document.addEventListener("DOMContentLoaded", () => {

    // Elements
    const loginBtn = document.getElementById("nav-login");
    const dashBtn = document.getElementById("nav-dashboard");
    const logoutBtn = document.getElementById("nav-logout");
    const dashLogoutBtn = document.getElementById("dashboardLogout");

    // Check Firebase Auth State
    if (typeof auth !== 'undefined') {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                console.log("Auth State: User is logged in", user.email);
                document.querySelectorAll('[id="nav-login"]').forEach(el => el.style.display = "none");
                document.querySelectorAll('[id="nav-dashboard"]').forEach(el => el.style.display = "inline-block");
                document.querySelectorAll('[id="nav-logout"]').forEach(el => el.style.display = "inline-block");
            } else {
                // No user is signed in.
                console.log("Auth State: User is logged out");
                document.querySelectorAll('[id="nav-login"]').forEach(el => el.style.display = "inline-block");
                document.querySelectorAll('[id="nav-dashboard"]').forEach(el => el.style.display = "none");
                document.querySelectorAll('[id="nav-logout"]').forEach(el => el.style.display = "none");
            }
        });
    } else {
        console.warn("Auth object not found. Make sure firebase-config.js is loaded.");
    }

    // Logout Logic
    const handleLogout = (e) => {
        e.preventDefault();
        if (typeof auth !== 'undefined') {
            auth.signOut().then(() => {
                localStorage.removeItem("careerSparkUser");
                if (window.location.pathname.includes("/pages/")) {
                    window.location.href = "../index.html";
                } else {
                    window.location.href = "index.html";
                }
            }).catch((error) => {
                console.error("Sign out error", error);
                // Force logout even if firebase fails
                localStorage.removeItem("careerSparkUser");
                window.location.href = "../index.html";
            });
        } else {
            // Fallback if auth is missing
            localStorage.removeItem("careerSparkUser");
            window.location.href = "../index.html";
        }
    };

    if (logoutBtn) {
        document.querySelectorAll('[id="nav-logout"]').forEach(btn => btn.addEventListener("click", handleLogout));
        document.querySelectorAll('[id="logoutBtn"]').forEach(btn => btn.addEventListener("click", handleLogout));
    }
    if (dashLogoutBtn) {
        document.querySelectorAll('[id="dashboardLogout"]').forEach(btn => btn.addEventListener("click", handleLogout));
    }
});
