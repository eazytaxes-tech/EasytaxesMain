# Deploy Backend to Render

## Steps:

1. **Push backend folder to Git**

2. **Create Web Service on Render:**
   - Go to https://render.com
   - Click "New +" → "Web Service"
   - Connect your GitHub repo
   - Configure:
     - **Name:** eazytaxes-backend
     - **Root Directory:** backend
     - **Build Command:** npm install
     - **Start Command:** npm start

3. **Add Environment Variables in Render:**
   - EMAIL_USER=contact@eazytaxes.com
   - EMAIL_APP_PASSWORD=wcsfiybjkbqbcnvi

4. **Get Backend URL:**
   - After deployment, copy the URL (e.g., https://eazytaxes-backend.onrender.com)

5. **Update Frontend Environment Variable:**
   - In Cloudflare Pages dashboard, add:
     - VITE_API_URL=https://eazytaxes-backend.onrender.com

6. **Redeploy Cloudflare Pages**

## Test Endpoints:

- Health check: https://your-backend.onrender.com/health
- Contact: POST https://your-backend.onrender.com/api/contact
- Job Application: POST https://your-backend.onrender.com/api/job-application

## Note:
Render free tier may sleep after inactivity. First request might be slow.
