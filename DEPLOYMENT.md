# Deploy Your Portfolio to Vercel

## Quick Deploy Guide

### Prerequisites
✅ Code pushed to GitHub
✅ Vercel account (sign up at vercel.com)

### Method 1: Vercel Website (Recommended)

1. **Visit**: https://vercel.com
2. **Sign in**: Use your GitHub account
3. **Import**: Click "Add New..." → "Project"
4. **Select**: Choose `Purushottam-Shah-Web`
5. **Deploy**: Click "Deploy" (all settings auto-detected)
6. **Done**: Your site will be live in 2-3 minutes!

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project directory)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? purushottam-shah-web
# - Directory? ./
# - Auto-detected Next.js, continue? Yes
# - Override settings? No

# Deploy to production
vercel --prod
```

### Your Live URLs

After deployment, you'll get:
- **Preview URL**: `https://purushottam-shah-web-xxx.vercel.app`
- **Production URL**: `https://purushottam-shah-web.vercel.app`

### Add Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `purushottamshah.com`)
4. Follow DNS configuration instructions
5. Done! Your portfolio will be at your custom domain

### Automatic Deployments

Now configured! Every time you push to GitHub:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Vercel will automatically:
- ✅ Build your project
- ✅ Run tests
- ✅ Deploy to production
- ✅ Send you a notification

### Environment Variables (If Needed Later)

If you add Sanity.io or other services:
1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Environment Variables"
3. Add variables like:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`

### Performance Tips

Your site will automatically get:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Edge caching
- ✅ DDoS protection

### Troubleshooting

**Build fails?**
- Check build logs in Vercel dashboard
- Ensure `package.json` has all dependencies
- Run `npm run build` locally to test

**Site looks different?**
- Clear browser cache
- Check console for errors
- Verify all assets loaded

**Need help?**
- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs

---

## Quick Reference Commands

```bash
# Commit and push changes
git add .
git commit -m "Your message"
git push origin main

# Deploy via CLI
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs
```

Your portfolio is ready to impress! 🚀
