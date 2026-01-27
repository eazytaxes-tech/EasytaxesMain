# Complete Setup Guide

## ✅ Changes Made:
1. Fixed phone regex in JobApplication.tsx
2. Created Express backend in `/backend` folder
3. Updated contact form to use VITE_API_URL
4. Job application already uses VITE_API_URL

## 🚀 Deployment Steps:

### 1. Deploy Backend to Render:

```bash
cd backend
npm install
```

- Go to https://render.com
- Click "New +" → "Web Service"
- Connect your GitHub repo
- Settings:
  - **Root Directory:** `backend`
  - **Build Command:** `npm install`
  - **Start Command:** `npm start`
  
- Add Environment Variables:
  - `EMAIL_USER` = `contact@eazytaxes.com`
  - `EMAIL_APP_PASSWORD` = `wcsfiybjkbqbcnvi`

- Copy your Render URL (e.g., `https://eazytaxes-backend.onrender.com`)

### 2. Update Cloudflare Pages:

- Go to Cloudflare Pages dashboard
- Select your project
- Settings → Environment Variables
- Add: `VITE_API_URL` = `https://eazytaxes-backend.onrender.com`
- Redeploy

### 3. Push to Git:

```bash
git add .
git commit -m "Add Express backend and fix forms"
git push
```

## ✅ What Works Now:

- **Contact Form:** Sends to Render backend → Gmail
- **Job Application:** Sends to Render backend → Gmail with attachments
- **No MailChannels issues:** Using Gmail SMTP directly

## 🧪 Test:

After deployment:
- Test contact form: https://your-site.pages.dev/contact
- Test job application: https://your-site.pages.dev/careers/[job]/apply
- Check backend health: https://your-backend.onrender.com/health

## 📝 Note:

Render free tier sleeps after 15 min inactivity. First request may take 30-60 seconds.
