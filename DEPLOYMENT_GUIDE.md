# 🚀 Deployment Guide - Tanjong Frozen E-Commerce Platform

This guide provides step-by-step instructions for deploying the Tanjong Frozen e-commerce platform to production using GitHub and Vercel.

## 📋 Prerequisites

Before deploying, ensure you have:

- ✅ **GitHub Account** - For code repository hosting
- ✅ **Vercel Account** - For frontend hosting (free tier available)
- ✅ **Supabase Project** - For database and backend services
- ✅ **Google Cloud Account** - For Maps API (with billing enabled)
- ✅ **Domain Name** (Optional) - For custom domain setup

## 🔧 Pre-Deployment Setup

### 1. Environment Variables Setup

The project uses environment variables for configuration. **Never commit actual API keys to the repository.**

#### Required Environment Variables:
```env
# Supabase Configuration
REACT_APP_SUPABASE_URL=your-supabase-project-url
REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key

# Google Maps API Key
REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key

# Optional: Telegram Notifications
REACT_APP_TELEGRAM_BOT_TOKEN=your-telegram-bot-token
REACT_APP_TELEGRAM_CHAT_ID=your-telegram-chat-id
```

### 2. Build Configuration

The project is configured for static deployment with:
- **Build Command**: `npm run build`
- **Output Directory**: `build/`
- **Node Version**: 18.x (recommended)

## 🌐 Vercel Deployment Steps

### Step 1: Prepare Repository
1. Ensure `.env` is in `.gitignore` (already configured)
2. Use `.env.example` as a template for environment variables
3. Commit all changes to your repository

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Select the repository containing this project

### Step 3: Configure Build Settings
Vercel should automatically detect the React app. Verify these settings:

- **Framework Preset**: Create React App
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

### Step 4: Environment Variables
In Vercel dashboard, go to Project Settings → Environment Variables and add:

```
REACT_APP_SUPABASE_URL = your-supabase-project-url
REACT_APP_SUPABASE_ANON_KEY = your-supabase-anon-key  
REACT_APP_GOOGLE_MAPS_API_KEY = your-google-maps-api-key
```

**Important**: Add these for all environments (Production, Preview, Development)

### Step 5: Deploy
1. Click "Deploy" to start the deployment
2. Wait for the build to complete (usually 2-3 minutes)
3. Your app will be available at `https://your-project-name.vercel.app`

## 🔒 Security Configuration

### Google Maps API Security
1. Go to Google Cloud Console → APIs & Services → Credentials
2. Edit your API key
3. Add your Vercel domain to "HTTP referrers (web sites)"
4. Example: `https://your-project-name.vercel.app/*`

### Supabase Security
1. Go to Supabase Dashboard → Settings → API
2. Add your Vercel domain to "Site URL"
3. Add to "Additional redirect URLs" if using authentication

## 🌍 Custom Domain Setup (Optional)

### Step 1: Add Domain in Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Step 2: Update Environment Variables
Update your API configurations to use the custom domain:
- Google Maps API restrictions
- Supabase redirect URLs
- Any CORS configurations

## 📊 Post-Deployment Checklist

After successful deployment, verify:

- [ ] **Homepage loads correctly**
- [ ] **Product catalog displays**
- [ ] **User authentication works**
- [ ] **Google Maps integration functions**
- [ ] **Order placement process**
- [ ] **Real-time features work**
- [ ] **Admin dashboard accessible**
- [ ] **Mobile responsiveness**

## 🔧 Troubleshooting

### Common Issues:

#### Build Failures
```bash
# Check for missing dependencies
npm install

# Verify build locally
npm run build
```

#### Environment Variable Issues
- Ensure all required variables are set in Vercel
- Variables must start with `REACT_APP_` for client-side access
- Check for typos in variable names

#### API Connection Issues
- Verify Supabase URL and key are correct
- Check CORS settings in Supabase
- Ensure Google Maps API key has correct restrictions

#### Performance Issues
- Enable Vercel Analytics for monitoring
- Check bundle size with `npm run build`
- Optimize images and assets

## 🔄 Continuous Deployment

The project is configured for automatic deployment:

1. **Push to main branch** → Automatic production deployment
2. **Push to other branches** → Preview deployments
3. **Pull requests** → Preview deployments with unique URLs

## 📈 Monitoring & Analytics

### Vercel Analytics
Enable in Project Settings → Analytics for:
- Page views and user sessions
- Core Web Vitals monitoring
- Performance insights

### Error Monitoring
Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Google Analytics for user behavior

## 🔄 Updates & Maintenance

### Regular Updates
1. Keep dependencies updated
2. Monitor Vercel build logs
3. Check Supabase usage and limits
4. Review Google Maps API usage

### Backup Strategy
- Supabase provides automatic backups
- Export important data regularly
- Keep environment variables documented

## 📞 Support

If you encounter issues:

1. **Check Vercel Build Logs** - Detailed error information
2. **Supabase Logs** - Database and API issues
3. **Browser Console** - Client-side errors
4. **Network Tab** - API request failures

## 🎯 Production Optimization

### Performance
- Enable Vercel Edge Network
- Optimize images with Vercel Image Optimization
- Use Vercel Analytics for monitoring

### Security
- Regular dependency updates
- API key rotation
- Monitor for security vulnerabilities

---

**🎉 Congratulations!** Your Tanjong Frozen e-commerce platform is now live and ready to serve customers!

For additional support, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)