# Environment Variables Setup for Vercel

When deploying to Vercel, you'll need to configure the following environment variables in your project settings:

## Required Environment Variables

### Site Configuration
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```
- Description: Your production website URL
- Example: https://marcle.vercel.app

### API Configuration
```
NEXT_PUBLIC_API_URL=https://your-domain.com/api
```
- Description: Your API endpoint base URL
- Example: https://marcle.vercel.app/api
- Note: Usually the same as your site URL + /api

### Newsletter Integration
```
NEWSLETTER_API_KEY=your_api_key_here
```
- Description: API key for your newsletter service
- Required for newsletter subscription functionality
- Get this from your newsletter service provider

## How to Add Environment Variables in Vercel

1. Go to your project in the Vercel dashboard
2. Click on "Settings"
3. Click on "Environment Variables"
4. Add each variable with its corresponding value
5. Select the environments where each variable should be available (Production, Preview, Development)

## Environment Types

### Production Environment
- Used when your site is live
- Set all variables as described above

### Preview Environment
- Used for preview deployments
- Can use the same values as production
- Or use test/staging values if available

### Development Environment
- Used when running locally
- Create a `.env.local` file with these variables
- Never commit `.env.local` to git

## Verifying Environment Variables

After deployment, verify your environment variables are working:

1. Check the deployment logs in Vercel
2. Visit your site and test the newsletter subscription
3. Check the Network tab in browser dev tools for API calls

## Security Notes

- Never expose sensitive keys in client-side code
- Only use NEXT_PUBLIC_ prefix for variables that need to be available in the browser
- Keep your API keys secure and rotate them periodically
- Use different API keys for development and production

## Troubleshooting

If environment variables aren't working:

1. Check if they're properly set in Vercel dashboard
2. Verify the naming matches exactly
3. Redeploy your project after adding new variables
4. Check if the variables are being accessed correctly in your code
5. Look for any error messages in the Vercel deployment logs

Remember to never commit actual values to version control. The `.env.local` file is already in `.gitignore` for local development.
