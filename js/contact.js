// Note: db is available globally from firebase-config.js

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
        const submitBtn = contactForm.querySelector('input[type="submit"]');

        if (!fname || !lname || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            submitBtn.value = "Sending...";
            submitBtn.disabled = true;

            // Compat Syntax
            await db.collection("contact_messages").add({
                firstName: fname,
                lastName: lname,
                email: email,
                subject: subject,
                message: message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

            alert("Message sent successfully!");
            contactForm.reset();
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error sending message. Please try again later.");
        } finally {
            submitBtn.value = "Send Message";
            submitBtn.disabled = false;
        }
    });
}
