# Deploy Portfolio with Hostinger Domain

## 🚀 Recommended: Vercel + Hostinger Domain

This is the **best approach** for your Next.js portfolio:
- ✅ Free Vercel hosting (optimized for Next.js)
- ✅ Use your Hostinger domain
- ✅ Global CDN (super fast worldwide)
- ✅ Auto-deploy on Git push
- ✅ Free SSL certificate

---

## Step 1: Deploy to Vercel

### Via Vercel Website (5 minutes)

1. **Go to**: https://vercel.com
2. **Sign in**: Click "Continue with GitHub"
3. **Import Project**:
   - Click "Add New..." → "Project"
   - Find `Purushottam-Shah-Web`
   - Click "Import"
4. **Deploy**:
   - Framework: Next.js (auto-detected ✓)
   - Click "Deploy"
   - Wait 2-3 minutes
5. **Done!** Your site is live at `https://purushottam-shah-web.vercel.app`

---

## Step 2: Connect Your Hostinger Domain

### A. In Vercel Dashboard

1. Go to your project in Vercel
2. Click **"Settings"** → **"Domains"**
3. Enter your domain (e.g., `purushottamshah.com`)
4. Click **"Add"**
5. Vercel will show you DNS records to configure

### B. In Hostinger Dashboard

1. **Login to Hostinger**: https://www.hostinger.com
2. **Go to Domains**:
   - Click "Domains" in sidebar
   - Find your domain
   - Click "Manage"
3. **DNS Settings**:
   - Click "DNS / Nameservers"
   - Choose "DNS Zone"

4. **Add DNS Records** (from Vercel):

   **For root domain** (`purushottamshah.com`):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www subdomain** (optional):
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

5. **Save Changes**
6. **Wait**: DNS propagation takes 5 minutes to 48 hours (usually 1-2 hours)

### C. Verify in Vercel

1. Go back to Vercel → Domains
2. Wait for status to show "Valid Configuration ✓"
3. Your site is now live at your custom domain!

---

## Alternative: Deploy Directly to Hostinger

**Only use this if you specifically need Hostinger hosting.**

### Requirements
- Node.js support on Hostinger plan
- SSH access (Premium/Business plans)
- More complex setup

### Steps:

1. **Build your site locally**:
```bash
npm run build
```

2. **Upload to Hostinger**:
   - Use FTP/SFTP or Git
   - Upload `.next`, `public`, `node_modules`, etc.
   - Configure Node.js app in Hostinger panel

3. **Configure**:
   - Set entry point: `npm start`
   - Set Node.js version: 18+

**⚠️ Note**: This is more complex and less optimal than Vercel. You'll lose:
- Auto-deployments
- Edge caching
- Optimized performance
- Easy rollbacks

---

## 📝 How to Edit Content

Your portfolio content is stored in a **JSON file**. Here's how to update it:

### Method 1: Edit JSON File (Current Setup)

**File Location**: `data/portfolio.json`

#### Update Your Information:

1. **Open the file**: `data/portfolio.json`

2. **Edit Personal Info**:
```json
"personalInfo": {
  "name": "Your Name",
  "title": "Your Title",
  "tagline": "The Architect of Transformation",
  "subtitle": "MBA & MPM | Your Subtitle",
  "bio": "Your professional bio...",
  "location": "Your Location",
  "email": "your.email@example.com",
  "linkedin": "https://linkedin.com/in/yourprofile",
  "calendly": "https://calendly.com/yourlink"
}
```

3. **Update Projects**:
```json
"projects": [
  {
    "id": "your-project",
    "title": "Your Project Title",
    "featured": true,
    "budget": 1000000,
    "currency": "GBP",
    "duration": "12 months",
    "company": "Company Name",
    "location": "Location",
    "description": "Project description...",
    "teamSize": 30,
    "teamBreakdown": {
      "developers": 15,
      "qualityAssurance": 8,
      "consultants": 4,
      "businessAnalysts": 3
    },
    "technologies": ["Tech 1", "Tech 2"],
    "roiMetrics": {
      "efficiency": "+35%",
      "cost": "-20%"
    },
    "keyAchievements": [
      "Achievement 1",
      "Achievement 2"
    ]
  }
]
```

4. **Update Career Timeline**:
```json
"careerTimeline": [
  {
    "id": "milestone-1",
    "year": "2020-2023",
    "phase": "Your Career Phase",
    "role": "Your Role",
    "companies": ["Company Name"],
    "location": "Location",
    "category": "leadership",
    "description": "Description...",
    "keyAchievements": ["Achievement 1"],
    "skills": ["Skill 1", "Skill 2"]
  }
]
```

5. **Update Skills**:
```json
"skills": [
  {
    "category": "Project Management",
    "items": [
      { "name": "Scrum/Agile", "proficiency": 95 },
      { "name": "Your Skill", "proficiency": 90 }
    ]
  }
]
```

6. **Update Global Metrics**:
```json
"globalMetrics": {
  "budgetManaged": 5000000,
  "currency": "GBP",
  "projectCount": 15,
  "stakeholderCount": 500,
  "maxTeamSize": 38
}
```

#### Push Changes to Live Site:

```bash
# After editing the JSON file:
git add data/portfolio.json
git commit -m "Update portfolio content"
git push origin main

# Vercel will auto-deploy in 2-3 minutes!
```

---

### Method 2: Add Visual Editor (Future Upgrade)

For easier editing with a visual interface, you can integrate Sanity.io:

**Benefits**:
- ✅ Beautiful admin panel
- ✅ No code editing needed
- ✅ Real-time preview
- ✅ Image uploads
- ✅ Free tier available

**Setup** (if interested):
```bash
npm install @sanity/client next-sanity
```

Would you like me to set this up? Let me know!

---

## Quick Reference

### Update Content Flow:

1. **Edit** `data/portfolio.json`
2. **Commit**:
   ```bash
   git add data/portfolio.json
   git commit -m "Update content"
   git push origin main
   ```
3. **Auto-deploy**: Vercel deploys automatically
4. **Live**: Changes appear in 2-3 minutes at your domain

### Common Updates:

| What to Update | File | Section |
|----------------|------|---------|
| Name, email, bio | `data/portfolio.json` | `personalInfo` |
| Projects | `data/portfolio.json` | `projects` |
| Career history | `data/portfolio.json` | `careerTimeline` |
| Skills | `data/portfolio.json` | `skills` |
| Certifications | `data/portfolio.json` | `certifications` |
| Budget/metrics | `data/portfolio.json` | `globalMetrics` |

---

## Troubleshooting

### Domain not working?
- Wait 24-48 hours for DNS propagation
- Check DNS records in Hostinger match Vercel's requirements
- Use https://dnschecker.org to verify propagation

### Changes not showing?
- Wait 2-3 minutes for Vercel deployment
- Hard refresh browser: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- Check deployment status in Vercel dashboard

### Build failing?
- Check build logs in Vercel dashboard
- Ensure JSON is valid (use https://jsonlint.com)
- Run `npm run build` locally to test

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **DNS Help**: https://support.hostinger.com/en/articles/1583227-how-to-change-dns-records
- **JSON Validator**: https://jsonlint.com

Your portfolio is ready to go live! 🚀
