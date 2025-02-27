# Deployment Guide: GitHub to Vercel

## Prerequisites
1. GitHub account
2. Vercel account
3. Repository pushed to GitHub
4. Vercel CLI installed locally (`npm i -g vercel`)

## Setting up GitHub Actions with Vercel

1. Get Vercel Tokens and IDs:
```bash
# Login to Vercel CLI
vercel login

# Link your project
vercel link

# Note down the following values:
# - VERCEL_TOKEN (from Vercel dashboard > Settings > Tokens)
# - VERCEL_ORG_ID (from .vercel/project.json)
# - VERCEL_PROJECT_ID (from .vercel/project.json)
```

2. Add GitHub Secrets:
- Go to GitHub repository > Settings > Secrets and Variables > Actions
- Add the following secrets:
  - VERCEL_TOKEN
  - VERCEL_ORG_ID
  - VERCEL_PROJECT_ID

3. GitHub Actions Workflow:
- Already configured in `.github/workflows/vercel-deploy.yml`
- Handles both production and preview deployments
- Runs type checking and linting
- Comments on PRs with preview URLs

## Step-by-Step Deployment

### 1. Prepare Your Repository
```bash
# Ensure all changes are committed
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### 2. Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Choose "Import Git Repository"
4. Select your GitHub repository
5. Click "Import"

### 3. Configure Project Settings

#### General Settings
- Framework Preset: Next.js
- Root Directory: ./
- Node.js Version: 18.x

#### Environment Variables
Add these in Vercel's Environment Variables section:
```
NEXT_PUBLIC_SITE_URL=https://your-project-name.vercel.app
NEXT_PUBLIC_API_URL=https://your-project-name.vercel.app/api
NEWSLETTER_API_KEY=your_api_key_here (if using newsletter feature)
```

### 4. Deploy Settings

Ensure these settings are configured:

1. Build Command: `npm run build`
2. Output Directory: `.next`
3. Install Command: `npm install`

### 5. Git Branch Settings

1. Production Branch: main
2. Preview Branches: Enable for all branches
3. Deployment Type: Serverless

## Troubleshooting Common Issues

### Build Failures

1. Check build logs in Vercel dashboard
2. Verify all dependencies are in package.json
3. Ensure environment variables are set
4. Check Node.js version compatibility

### Runtime Errors

1. Check browser console for errors
2. Verify API routes are working
3. Test environment variables access
4. Check file paths and imports

### Environment Variable Issues

1. Verify variables are set in Vercel dashboard
2. Check for typos in variable names
3. Ensure NEXT_PUBLIC_ prefix for client-side variables
4. Redeploy after adding new variables

## Monitoring Deployment

1. Watch deployment progress in Vercel dashboard
2. Check deployment status in GitHub actions
3. Verify preview deployments for pull requests
4. Monitor build and runtime logs

## Post-Deployment Checklist

1. Visit the deployed site
2. Test all navigation links
3. Verify API functionality
4. Check newsletter subscription
5. Test theme switching
6. Verify responsive design
7. Check loading performance
8. Test all interactive features

## Automatic Deployments

- Every push to main branch triggers production deployment
- Pull requests create preview deployments
- Branch deployments are isolated

## Security Notes

1. Never commit sensitive data
2. Use environment variables for secrets
3. Enable branch protection rules
4. Review deployment logs regularly

## Rollback Procedure

If issues occur:
1. Go to Vercel dashboard
2. Find last working deployment
3. Click "..." > "Promote to Production"

## Custom Domain Setup (Optional)

1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS settings
4. Wait for DNS propagation
5. Update environment variables with new domain

Remember to update the environment variables if you switch to a custom domain later.
