# Netlify Deployment Guide for Eazytaxes.com

This guide provides step-by-step instructions for deploying the Eazytaxes website to Netlify with automatic deployments from Git.

## Prerequisites

1. A Netlify account (sign up at https://netlify.com)
2. Git repository with your code
3. GitHub/GitLab/Bitbucket account (for auto-deployment)

## Environment Variables

The following environment variables need to be configured in Netlify:

### Required Variables

- `NODE_ENV`: Set to `production`
- `EMAIL_USER`: Email address for contact form (e.g., `contact@eazytaxes.com`)
- `EMAIL_APP_PASSWORD`: App-specific password for email service

### Optional Variables (if using database)

- `DATABASE_URL`: PostgreSQL connection string (if using database features)

## Step-by-Step Deployment Instructions

### Step 1: Push Code to Git Repository

1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Ready for Netlify deployment"
   ```

2. Create a repository on GitHub/GitLab/Bitbucket

3. Add remote and push:
   ```bash
   git remote add origin YOUR_REPOSITORY_URL
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect Repository to Netlify

1. Log in to your Netlify account at https://app.netlify.com

2. Click **"Add new site"** → **"Import an existing project"**

3. Choose your Git provider (GitHub, GitLab, or Bitbucket)

4. Authorize Netlify to access your repositories

5. Select the `Eazytaxes.com-next` repository

### Step 3: Configure Build Settings

Netlify should auto-detect the settings from `netlify.toml`, but verify:

- **Base directory**: (leave empty)
- **Build command**: `pnpm install && pnpm run build`
- **Publish directory**: `dist/public`
- **Node version**: 20

### Step 4: Set Environment Variables

1. In your Netlify site dashboard, go to **Site settings** → **Environment variables**

2. Add the following variables:
   - Key: `NODE_ENV`, Value: `production`
   - Key: `EMAIL_USER`, Value: `contact@eazytaxes.com`
   - Key: `EMAIL_APP_PASSWORD`, Value: `your-app-password`

3. Click **Save**

### Step 5: Deploy

1. Click **"Deploy site"**

2. Netlify will:
   - Clone your repository
   - Install dependencies with pnpm
   - Build the project
   - Deploy to their CDN

3. Wait for deployment to complete (usually 2-5 minutes)

### Step 6: Configure Custom Domain (Optional)

1. In **Site settings** → **Domain management**

2. Click **"Add custom domain"**

3. Enter your domain (e.g., `eazytaxes.com`)

4. Follow Netlify's DNS configuration instructions

5. Enable **HTTPS** (automatic with Let's Encrypt)

## Automatic Deployments

Once connected, Netlify will automatically:

- **Deploy on every push** to your main branch
- **Deploy preview** for pull requests
- **Rollback** if needed using deploy history

## Build Configuration

The build is configured in `netlify.toml`:

- **Node Version**: 20
- **Package Manager**: pnpm v9
- **Build Output**: Single Page Application (SPA)
- **Security Headers**: Enabled
- **Cache Strategy**: Optimized for static assets

## Monitoring and Troubleshooting

### Check Build Logs

1. Go to **Deploys** tab in Netlify dashboard
2. Click on any deploy to see detailed logs
3. Look for errors in the build output

### Common Issues

**Build Fails:**
- Check that all environment variables are set correctly
- Verify Node version matches (20.x)
- Review build logs for specific errors

**Site Not Loading:**
- Check that publish directory is `dist/public`
- Verify the build command completed successfully
- Check browser console for errors

**Contact Form Not Working:**
- Verify `EMAIL_USER` and `EMAIL_APP_PASSWORD` are set
- Check that email service allows app passwords
- Review Netlify function logs if using serverless functions

### Build Status Badge

Add this to your README.md to show build status:

```markdown
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)
```

## Performance Optimization

The deployment includes:

1. **Asset Caching**: Static assets cached for 1 year
2. **Security Headers**: XSS protection, frame options, etc.
3. **CDN Distribution**: Global content delivery
4. **Automatic HTTPS**: SSL certificates via Let's Encrypt
5. **Gzip Compression**: Automatic compression enabled

## Useful Commands

```bash
# Local build test (before pushing)
pnpm run build

# Type checking
pnpm run check

# Start production build locally
pnpm start
```

## Next Steps After Deployment

1. ✅ Test all pages and functionality
2. ✅ Verify contact form submission
3. ✅ Check mobile responsiveness
4. ✅ Test all CTAs and links
5. ✅ Set up domain and SSL
6. ✅ Configure DNS records
7. ✅ Monitor analytics and performance

## Support

- **Netlify Docs**: https://docs.netlify.com
- **Netlify Support**: https://answers.netlify.com
- **Status Page**: https://www.netlifystatus.com

---

**Note**: This is a static site deployment. The backend server functionality is not included in this build. If you need server-side features, consider using Netlify Functions or deploying the backend separately.
