# 🚀 Quick Start - Tanjong Frozen E-Commerce Platform

## 📦 What's Included

This repository contains a complete, production-ready e-commerce platform for frozen goods delivery:

### ✅ **Ready for Deployment**
- **Vercel Configuration**: `vercel.json` configured for static deployment
- **Environment Variables**: `.env.example` template with all required variables
- **GitHub Actions**: Automated CI/CD pipeline for testing and deployment
- **Security**: `.gitignore` configured to protect sensitive data

### ✅ **Core Features**
- **React 18** frontend with modern hooks and routing
- **Supabase** backend integration for database and authentication
- **Google Maps** integration for location services
- **Real-time** order tracking with WebSocket server
- **Admin Dashboard** for order and product management
- **Mobile-responsive** design

## 🚀 Deploy to Vercel (1-Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Acapster/tanjong-frozen-ecommerce)

### Quick Deployment Steps:

1. **Click the Deploy button above**
2. **Connect your GitHub account** to Vercel
3. **Configure environment variables** in Vercel dashboard:
   ```
   REACT_APP_SUPABASE_URL = your-supabase-project-url
   REACT_APP_SUPABASE_ANON_KEY = your-supabase-anon-key
   REACT_APP_GOOGLE_MAPS_API_KEY = your-google-maps-api-key
   ```
4. **Deploy!** Your app will be live in 2-3 minutes

## 🛠️ Local Development

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Supabase account
- Google Cloud account (for Maps API)

### Setup
```bash
# Clone the repository
git clone https://github.com/Acapster/tanjong-frozen-ecommerce.git
cd tanjong-frozen-ecommerce

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Edit .env with your actual API keys
# Then start development server
npm start
```

## 🔑 Required API Keys

### 1. Supabase Setup
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Get your project URL and anon key from Settings → API
4. Add to environment variables

### 2. Google Maps Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Enable Maps JavaScript API, Places API, and Geocoding API
3. Create an API key
4. Add domain restrictions for security
5. Add to environment variables

## 📱 Features Overview

### Customer Features
- 🛒 **Product Catalog** - Browse frozen products
- 🛍️ **Shopping Cart** - Add/remove items with real-time updates
- 📍 **Location Picker** - Google Maps integration for delivery address
- 📱 **Order Tracking** - Real-time order status and driver location
- 👤 **User Profile** - Account management and order history

### Admin Features
- 📊 **Dashboard** - Order statistics and analytics
- 📦 **Order Management** - View and update all orders
- 🏪 **Product Management** - Add/edit/remove products
- 👥 **User Management** - Customer account overview
- 📢 **Announcements** - System-wide notifications

### Technical Features
- ⚡ **Real-time Updates** - WebSocket + Supabase real-time
- 🔐 **Authentication** - Email/password + Google OAuth
- 🗄️ **Database** - PostgreSQL with Row Level Security
- 📱 **Responsive** - Mobile-first design
- 🚀 **Performance** - Optimized for Core Web Vitals

## 🔧 Configuration

### Environment Variables
```env
# Required for basic functionality
REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_ANON_KEY=your-supabase-key
REACT_APP_GOOGLE_MAPS_API_KEY=your-maps-key

# Optional features
REACT_APP_TELEGRAM_BOT_TOKEN=your-telegram-token
REACT_APP_TELEGRAM_CHAT_ID=your-chat-id
```

### Vercel Deployment
The project includes `vercel.json` with optimized settings:
- Static build configuration
- Caching headers for performance
- Environment variable mapping
- SPA routing support

## 📚 Documentation

- **[Deployment Guide](./DEPLOYMENT_GUIDE.md)** - Comprehensive deployment instructions
- **[README.md](./README.md)** - Full project documentation
- **[Order Tracking Guide](./ORDER_TRACKING_README.md)** - Real-time features setup
- **[Map Testing Guide](./MAP_TESTING_GUIDE.md)** - Google Maps integration

## 🆘 Need Help?

### Common Issues
1. **Build Failures** - Check environment variables are set correctly
2. **API Errors** - Verify Supabase and Google Maps credentials
3. **Deployment Issues** - Check Vercel build logs for details

### Support
- 📧 **Issues**: [GitHub Issues](https://github.com/Acapster/tanjong-frozen-ecommerce/issues)
- 📖 **Documentation**: Comprehensive guides included
- 🌐 **Community**: Join our developer community

## 🎯 Next Steps

After deployment:

1. **Configure your Supabase database** with the required tables
2. **Set up Google Maps API restrictions** for security
3. **Test the complete user flow** from product browsing to order completion
4. **Configure admin accounts** for order management
5. **Set up monitoring** with Vercel Analytics

---

**🎉 Your e-commerce platform is ready to serve customers!**

Built with ❤️ for the frozen goods delivery industry.