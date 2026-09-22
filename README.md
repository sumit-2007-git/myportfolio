# Sumit Kumar - Modern Portfolio Website ⚡

[![Portfolio Deployed](https://img.shields.io/badge/Status-Live%20Ready-success?style=for-the-badge)](https://sumit-2007-git.github.io/portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-sumit--2007--git-181717?style=for-the-badge&logo=github)](https://github.com/sumit-2007-git)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sumit%20Kumar-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sumit-kumar-2a4793327/)
[![LeetCode](https://img.shields.io/badge/LeetCode-Sumit123__kumar-FFA116?style=for-the-badge&logo=leetcode)](https://leetcode.com/u/Sumit123_kumar/)

A fast, dynamic, single-page portfolio website for **Sumit Kumar** (B.Tech Computer Engineering @ Marwadi University, AICTE & IBM SkillsBuild Intern, Software Engineer).

---

## ✨ Features

- **Floating Pill Dock Navigation**: Sleek glassmorphic floating pill bar with 7 dynamic tabs (Home, About, Experience, Projects, Certificates, Stats, Contact).
- **Dedicated Stats Tab**: Live GitHub statistics, language analytics, contribution streak, and LeetCode performance cards.
- **Zero-Database Direct Dispatch**: Contact form sends messages directly to `sumitkeshri.1237373@gmail.com` with zero database or backend servers.
- **Form Reset & Multiple Messages**: Built-in Reset Form button and "Send Another Message" feature.
- **Interactive Footer**: Live IST clock in Rajkot, quick 1-click email copy, fast jump links, and project showcases.
- **100% Responsive & Fast**: Optimized pure HTML5, CSS3, and Vanilla JavaScript with 0 heavy frameworks.

---

## 📩 Activating the Contact Form (One-Time Setup)

The contact form uses **FormSubmit** which delivers messages directly to `sumitkeshri.1237373@gmail.com`.
1. The first time you (or anyone) submits the form, FormSubmit sends an activation email with the subject: **"FormSubmit: Activate Form"** to `sumitkeshri.1237373@gmail.com`.
2. Open your Gmail, check **Inbox** or **Spam**, and click **Activate Form** once.
3. Done! From then on, every message submitted will instantly land in your Gmail inbox.

---

## 💻 Console Commands to Push to GitHub

Open your terminal or VS Code console in this folder (`C:\Users\SUMIT\.gemini\antigravity\scratch\sumit-portfolio`):

```bash
# 1. Check git status
git status

# 2. Add your GitHub repository as remote (create a new empty repo named 'portfolio' on GitHub first)
git remote add origin https://github.com/sumit-2007-git/portfolio.git

# 3. Push to GitHub
git push -u origin main
```

---

## 🚀 How to Deploy on Vercel

### Method 1: Via Vercel Dashboard (Easiest)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **Add New...** > **Project**.
3. Select your `portfolio` repository from GitHub.
4. Keep the default settings (Framework Preset: *Other*, Root Directory: `./`).
5. Click **Deploy**! Your portfolio will be live in 15 seconds.

### Method 2: Via Vercel CLI (Console)
```bash
# Install Vercel CLI globally (if not installed)
npm i -g vercel

# Deploy directly from terminal
vercel
```

---

## 🛠️ Project Structure

```
sumit-portfolio/
├── assets/
│   └── profile.jpg       # Sumit's high-res portrait
├── index.html            # Main markup with 7 dynamic tab sections
├── style.css             # Glassmorphism, animations & responsive styling
├── script.js             # Dynamic tab router, typewriter, form submit & live clock
├── vercel.json           # Vercel deployment configuration
├── .gitignore            # Git ignored files
└── README.md             # Documentation and deployment guide
```

---
Developed by **Sumit Kumar** © 2026.
