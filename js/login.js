// Note: auth, db are available globally from firebase-config.js

// UI Toggle Logic
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

if (registerBtn && container) {
  registerBtn.addEventListener('click', () => {
    container.classList.add("active");
  });
}

if (loginBtn && container) {
  loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
  });
}

// Check URL hash to auto-switch to register
if (window.location.hash === '#register' && container) {
  container.classList.add("active");
}

// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page refresh

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
      alert("Please fill all login fields");
      return;
    }

    // Compat Syntax
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Logged in:", user);

        // Get existing data to preserve courses
        let existingData = localStorage.getItem("careerSparkUser");
        existingData = existingData ? JSON.parse(existingData) : {};

        // Use Firebase Display Name if available, else fallback to email
        const displayName = user.displayName || email.split("@")[0];

        const userData = {
          ...existingData,
          name: displayName,
          email: user.email,
          uid: user.uid
        };

        localStorage.setItem("careerSparkUser", JSON.stringify(userData));

        // Load remote progress
        if (typeof loadUserProgress === 'function') {
          loadUserProgress(user.uid).then(() => {
            window.location.href = "../pages/dashboard.html";
          });
        } else {
          window.location.href = "../pages/dashboard.html";
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Login Failed: " + errorMessage);
        console.error(errorCode, errorMessage);
      });
  });
}


// REGISTER
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    if (!name || !email || !password) {
      alert("Please fill all registration fields");
      return;
    }

    // Compat Syntax
    auth.createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("Registered:", user);

        // Update Profile with Name
        if (name) {
          await user.updateProfile({
            displayName: name
          });
        }

        const newUserCtx = {
          name: name,
          email: user.email,
          uid: user.uid,
          enrolledCourses: [],
          careerProgress: {},
          gameProgress: {}
        };
        localStorage.setItem("careerSparkUser", JSON.stringify(newUserCtx));

        if (typeof saveUserProgress === 'function') {
          await saveUserProgress(newUserCtx);
        }

        window.location.href = "../pages/dashboard.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Registration Failed: " + errorMessage);
        console.error(errorCode, errorMessage);
      });
  });
}

// GOOGLE LOGIN logic
const googleBtn = document.getElementById("googleLoginBtn");
if (googleBtn) {
  googleBtn.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log("Google Login Success:", user);

        // Get existing data
        let existingData = localStorage.getItem("careerSparkUser");
        existingData = existingData ? JSON.parse(existingData) : {};

        // Use Display Name directly from Google
        // Clean name logic: Remove numbers if present in simple split (though Google usually gives clean names)
        let cleanName = user.displayName;
        if (!cleanName) {
          cleanName = user.email.split("@")[0].replace(/[0-9]+$/, '');
          cleanName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
        }

        const userData = {
          ...existingData,
          name: cleanName,
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL
        };

        localStorage.setItem("careerSparkUser", JSON.stringify(userData));

        // Load remote progress if available, merging/overwriting local
        if (typeof loadUserProgress === 'function') {
          loadUserProgress(user.uid).then(() => {
            window.location.href = "../pages/dashboard.html";
          });
        } else {
          window.location.href = "../pages/dashboard.html";
        }

      }).catch((error) => {
        console.error("Google Login Error:", error);
        alert("Google Sign-In failed: " + error.message);
      });
  });
}