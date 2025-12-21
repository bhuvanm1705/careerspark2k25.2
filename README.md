# CareerSpark Demo

A comprehensive career guidance platform featuring course tracking, AI chat, and gamified learning.

## Features
- **User Authentication**: Login/Register with Email or Google (Firebase Auth).
- **Dashboard**: Track enrolled courses, quiz progress, and certificates.
- **Career Chatbot**: AI-powered assistant for career advice.
- **Contact Form**: Real-time message storage using Firestore.

## How to Run Locally

This project uses Firebase Authentication, which requires running on a local web server (not directly from file system).

### Prerequisites
- [Python 3](https://www.python.org/downloads/) (Installed on most computers)

### Steps
1.  **Clone/Download** this repository.
2.  Double-click the **`start_server.bat`** file in the root folder.
3.  A console window will open. **Keep it open.**
4.  Open your browser and navigate to: [http://localhost:8000](http://localhost:8000)

## Deploying to the Web

If you host this site on **GitHub Pages**, **Vercel**, or **Netlify**:

1.  Go to your [Firebase Console](https://console.firebase.google.com/).
2.  Navigate to **Authentication** > **Settings** > **Authorized Domains**.
3.  Click **Add Domain** and enter your new website URL (e.g., `yourusername.github.io`).

*Without this step, Google Sign-In will fail on the live site.*

## Project Structure
- `index.html`: Landing page.
- `pages/`: Contains Login, Dashboard, Profile, etc.
- `js/`: JavaScript logic (Auth, Database, UI).
- `css/`: Stylesheets.
- `firebase-config.js`: Firebase API configuration.
