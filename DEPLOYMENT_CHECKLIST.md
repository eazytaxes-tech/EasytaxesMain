# Quick Deployment Checklist for Netlify

## Pre-Deployment Checklist

- [ ] All environment variables documented in `.env.example`
- [ ] Build runs successfully locally (`pnpm run build`)
- [ ] Type checking passes (`pnpm run check`)
- [ ] All images optimized and in correct folders
- [ ] Contact form tested and working
- [ ] All external links verified
- [ ] Responsive design tested on mobile/tablet

## Git Repository Setup

```bash
# 1. Ensure all changes are committed
git status

# 2. Add all files
git add .

# 3. Commit with meaningful message
git commit -m "feat: ready for production deployment"

# 4. Push to main branch
git push origin main
```

## Netlify Configuration

### Site Settings
- Base directory: (empty)
- Build command: `pnpm install && pnpm run build`
- Publish directory: `dist/public`
- Node version: 20

### Environment Variables to Set in Netlify Dashboard
```
NODE_ENV=production
EMAIL_USER=contact@eazytaxes.com
EMAIL_APP_PASSWORD=your_secure_app_password
```

## Post-Deployment Verification

- [ ] Homepage loads correctly
- [ ] All service pages are accessible
- [ ] Navigation works (all links functional)
- [ ] Contact form submits properly
- [ ] "Book a Call" buttons link to Calendly correctly
- [ ] Mobile menu works properly
- [ ] All images load
- [ ] Footer links work
- [ ] SSL certificate is active (HTTPS)
- [ ] Custom domain configured (if applicable)

## Useful Netlify Dashboard Links

- **Deploys**: Monitor build status and history
- **Functions**: Check serverless function logs (if any)
- **Domain settings**: Configure custom domain
- **Build settings**: Modify environment variables
- **Analytics**: Monitor site performance

## Rollback Procedure (if needed)

1. Go to Netlify Dashboard → Deploys
2. Find the last working deployment
3. Click "Publish deploy" on that version

## Support Resources

- Netlify Documentation: https://docs.netlify.com
- Community Forum: https://answers.netlify.com
- Build Minutes: Check usage in Billing section

---

**Ready to deploy?** Follow the guide in `NETLIFY_DEPLOYMENT.md` for detailed instructions.
