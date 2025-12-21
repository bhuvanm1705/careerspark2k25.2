// Firestore Synchronization Logic
// Assumes firebase-config.js is loaded and 'db' / 'auth' are available

/**
 * Saves the given user object to Firestore under the current user's UID.
 * @param {Object} user - The user object from localStorage
 */
async function saveUserProgress(user) {
    if (typeof auth === 'undefined' || !auth.currentUser) {
        console.warn("Firestore Sync: No authenticated user found. Progress saved locally only.");
        return;
    }

    try {
        const uid = auth.currentUser.uid;
        // Basic validation
        if (!uid) return;

        // Save to 'users' collection
        await db.collection("users").doc(uid).set(user, { merge: true });
        console.log("Firestore Sync: Progress saved successfully for", uid);
    } catch (error) {
        console.error("Firestore Sync Error:", error);
    }
}

/**
 * Loads user progress from Firestore and updates localStorage.
 * @param {string} uid - The Firebase User ID
 * @returns {Promise<Object|null>} - The user data or null
 */
async function loadUserProgress(uid) {
    if (typeof db === 'undefined') {
        console.error("Firestore Sync: DB not initialized");
        return null;
    }

    try {
        const doc = await db.collection("users").doc(uid).get();
        if (doc.exists) {
            const data = doc.data();
            console.log("Firestore Sync: Data loaded", data);

            // Update Local Storage
            localStorage.setItem("careerSparkUser", JSON.stringify(data));
            return data;
        } else {
            console.log("Firestore Sync: No remote data found for this user.");
            return null;
        }
    } catch (error) {
        console.error("Firestore Sync Load Error:", error);
        return null;
    }
}

// Listen for global storage changes (optional, mostly for debugging across tabs)
window.addEventListener('storage', (e) => {
    if (e.key === 'careerSparkUser') {
        console.log("Lcocal storage updated in another tab");
    }
});
