# Firebase + Railway Deployment Guide

This guide explains how to deploy your full-stack application with:
- **Frontend**: Firebase Hosting (static files, CDN)
- **Backend**: Railway (Node.js + PostgreSQL)

## Prerequisites

1. **Firebase CLI**: `npm install -g firebase-tools`
2. **Railway Account**: https://railway.app/
3. **Firebase Project**: Created in Firebase Console

## Part 1: Deploy Backend to Railway

### Step 1: Create Railway Project

1. Go to https://railway.app/ and login
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway will auto-detect the Node.js app

### Step 2: Configure Environment Variables

In Railway dashboard, go to **Variables** tab and add:

```
NODE_ENV=production
PORT=5000
EMAIL_USER=contact@eazytaxes.com
EMAIL_APP_PASSWORD=your_app_password_here
DATABASE_URL=postgresql://user:pass@host:5432/dbname
FIREBASE_HOSTING_URL=https://your-project.web.app
FRONTEND_URL=https://your-project.firebaseapp.com
```

### Step 3: Add PostgreSQL Database

1. In Railway project, click "New" → "Database" → "PostgreSQL"
2. Railway will automatically add `DATABASE_URL` to your service

### Step 4: Deploy

Railway will automatically deploy. Once done, copy your Railway URL:
```
https://your-app-name.up.railway.app
```

## Part 2: Deploy Frontend to Firebase

### Step 1: Update Environment Configuration

Create/update `client/.env.production`:

```env
VITE_API_URL=https://your-app-name.up.railway.app
```

Replace `your-app-name.up.railway.app` with your actual Railway URL.

### Step 2: Build the Frontend

```bash
pnpm build
```

This builds the client to `dist/public/`.

### Step 3: Initialize Firebase (First Time Only)

```bash
firebase login
firebase init hosting
```

When prompted:
- **Public directory**: `dist/public`
- **Single-page app**: Yes
- **Overwrite index.html**: No

### Step 4: Deploy to Firebase

```bash
firebase deploy --only hosting
```

Or use the npm script:
```bash
pnpm run deploy:firebase
```

### Step 5: Update Railway Environment

Go back to Railway and update the environment variables with your Firebase URL:

```
FIREBASE_HOSTING_URL=https://your-project.web.app
FRONTEND_URL=https://your-project.firebaseapp.com
```

Click "Redeploy" in Railway to apply the CORS changes.

## Verification

1. **Frontend**: Visit your Firebase URL (e.g., `https://your-project.web.app`)
2. **Backend**: Test API at `https://your-app-name.up.railway.app/api/health`
3. **Integration**: Try submitting a job application form

## Local Development

For local development, the app works without environment variables:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`
- API calls use relative paths when `VITE_API_URL` is not set

## Troubleshooting

### CORS Errors

If you see CORS errors in the browser console:
1. Verify `FIREBASE_HOSTING_URL` is set correctly in Railway
2. Check that Railway has been redeployed after adding the variable
3. Ensure your Firebase URL matches exactly (with/without `www`)

### API Not Found (404)

1. Verify `VITE_API_URL` in `client/.env.production`
2. Rebuild the frontend: `pnpm build`
3. Redeploy to Firebase: `firebase deploy --only hosting`

### Email Not Sending

1. Check `EMAIL_USER` and `EMAIL_APP_PASSWORD` in Railway
2. Verify the app password is correct (not your regular Gmail password)
3. Check Railway logs for error messages

## Cost Estimate

- **Firebase Hosting**: Free (up to 10GB storage, 360MB/day transfer)
- **Railway**: Free tier available ($5/month credit)
  - Includes 500 hours/month
  - PostgreSQL database included
- **Total**: $0-5/month depending on usage

## Custom Domain (Optional)

### Firebase Hosting
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow DNS configuration steps

### Railway
1. Go to Railway project → Settings → Networking
2. Add custom domain
3. Update DNS records as instructed
