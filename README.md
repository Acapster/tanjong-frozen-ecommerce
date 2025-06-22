# 🧊 Tanjong Frozen E-Commerce & Delivery Platform

A comprehensive, full-stack e-commerce platform specifically designed for frozen goods delivery business. Features a modern React frontend, Supabase backend, real-time order tracking, and integrated Google Maps for location services.

## 🌟 Key Features

### 🛒 Customer Experience
- **Product Catalog**: Browse and search frozen products with detailed information
- **Smart Shopping Cart**: Add/remove items, adjust quantities with real-time price updates
- **Location-Based Checkout**: Secure checkout with Google Maps address picker
- **Real-Time Order Tracking**: Live order status updates and driver location tracking
- **User Profile Management**: Personal information, order history, and preferences
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 👨‍💼 Admin Dashboard
- **Comprehensive Order Management**: View, update, and manage all customer orders
- **Product Management**: Add, edit, remove products with image upload
- **User Management**: View and manage customer accounts and profiles
- **System Announcements**: Post updates and notifications for customers
- **Analytics & Reporting**: Order statistics and business insights
- **Real-Time Notifications**: Instant alerts for new orders and updates

### 🚀 Technical Architecture
- **Frontend**: React 18 with modern hooks and context API
- **Backend**: Supabase (PostgreSQL) with Row Level Security
- **Authentication**: Supabase Auth with email/password and Google OAuth
- **Real-Time**: Hybrid system using Supabase real-time + WebSocket server
- **Maps Integration**: Google Maps API for location services
- **State Management**: React Context API with local storage persistence
- **Styling**: Modern CSS with responsive design patterns

## 🛠️ Technology Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **React Router DOM**: Client-side routing and navigation
- **React Context API**: Global state management
- **React Icons**: Comprehensive icon library
- **React Toastify**: Toast notifications
- **React Slick**: Image carousel component
- **Framer Motion**: Smooth animations and transitions

### Backend & Database
- **Supabase**: Backend-as-a-Service with PostgreSQL database
- **Supabase Auth**: Authentication and user management
- **Row Level Security**: Database-level security policies
- **Real-time Subscriptions**: Live data updates

### APIs & Services
- **Google Maps API**: Location services and mapping
- **WebSocket Server**: Custom real-time communication
- **Express.js**: WebSocket server framework
- **Socket.IO**: Real-time bidirectional communication

### Development Tools
- **Create React App**: Development environment
- **ESLint**: Code linting and formatting
- **Jest**: Testing framework
- **Web Vitals**: Performance monitoring

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js** (v16 or later)
- **npm** or **yarn**
- **Supabase Account** ([supabase.com](https://supabase.com))
- **Google Cloud Account** with Maps API enabled

### 1. Clone & Install
```bash
# Clone the repository
git clone https://github.com/Acapster/tanjong-frozen-ecommerce.git
cd tanjong-frozen-ecommerce

# Install frontend dependencies
npm install

# Install server dependencies
cd server
npm install
cd ..
```

### 2. Environment Configuration
Create a `.env` file in the root directory:
```env
# Supabase Configuration
REACT_APP_SUPABASE_URL=your-supabase-project-url
REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key

# Google Maps API
REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key

# WebSocket Server (optional, defaults to localhost:3001)
REACT_APP_WEBSOCKET_URL=ws://localhost:3001
```

### 3. Database Setup
1. Create a new Supabase project
2. Run the database migration scripts (see Database Schema section)
3. Configure Row Level Security policies
4. Update environment variables with your Supabase credentials

### 4. Google Maps Setup
1. Enable the following APIs in Google Cloud Console:
   - Maps JavaScript API
   - Places API
   - Geocoding API
2. Create an API key and add it to your `.env` file
3. Configure API key restrictions for security

### 5. Start Development Servers
```bash
# Start the React development server (Terminal 1)
npm start

# Start the WebSocket server (Terminal 2)
cd server
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **WebSocket Server**: http://localhost:3001

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Acapster/tanjong-frozen-ecommerce)

1. Click the deploy button above
2. Connect your GitHub account
3. Configure environment variables (see [Deployment Guide](./DEPLOYMENT_GUIDE.md))
4. Deploy!

## 📁 Project Structure

```
tanjong-frozen-ecommerce/
├── public/                     # Static assets
│   ├── images/                # Product and UI images
│   ├── index.html            # Main HTML template
│   └── manifest.json         # PWA configuration
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Login.js         # User authentication
│   │   ├── Dashboard.js     # User dashboard
│   │   ├── OrderTracking.js # Real-time order tracking
│   │   ├── OrderManagement.js # Admin order management
│   │   └── ...              # Other components
│   ├── pages/               # Page-level components
│   │   ├── HomePage.js      # Landing page
│   │   ├── ProductsPage.js  # Product catalog
│   │   ├── CartPage.js      # Shopping cart
│   │   ├── CheckoutPage.js  # Checkout process
│   │   ├── admin/           # Admin pages
│   │   └── ...              # Other pages
│   ├── context/             # React Context providers
│   │   ├── CartContext.js   # Shopping cart state
│   │   └── GoogleMapsContext.js # Maps API provider
│   ├── services/            # API and business logic
│   │   ├── supabaseService.js # Supabase operations
│   │   ├── OrderService.js  # Order management
│   │   ├── AdminService.js  # Admin operations
│   │   ├── RealtimeService.js # Real-time updates
│   │   └── ...              # Other services
│   ├── styles/              # CSS stylesheets
│   │   ├── Login.css        # Component-specific styles
│   │   ├── Dashboard.css    # Dashboard styling
│   │   └── ...              # Other styles
│   ├── supabase/            # Supabase configuration
│   │   └── config.js        # Supabase client setup
│   ├── utils/               # Utility functions
│   │   ├── migrationValidator.js # Database migration tools
│   │   └── telegramNotifications.js # Notification service
│   └── App.js               # Main application component
├── server/                  # WebSocket server
│   ├── config/              # Server configuration
│   ├── index.js            # Server entry point
│   └── package.json        # Server dependencies
├── package.json            # Frontend dependencies
└── README.md               # This file
```

## 🗄️ Database Schema

### Supabase Tables
The application uses the following PostgreSQL tables:

#### Core Tables
- **`users`** - User profiles and authentication data
- **`products`** - Product catalog with categories and pricing
- **`orders`** - Order management and tracking
- **`order_items`** - Individual items within orders (normalized)
- **`order_status_timeline`** - Order status history tracking

#### Supporting Tables
- **`notifications`** - User notifications and alerts
- **`announcements`** - System-wide announcements
- **`feedbacks`** - Customer feedback and reviews

### Key Features
- **Row Level Security (RLS)** - Database-level security policies
- **Real-time Subscriptions** - Live data updates
- **Full-text Search** - Product search capabilities
- **JSONB Fields** - Flexible data storage for complex objects

## 🔧 Available Scripts

### Frontend Scripts
```bash
# Development
npm start              # Start development server (localhost:3000)
npm test              # Run test suite
npm run build         # Build for production

# Combined Development
npm run dev           # Start both frontend and server concurrently

# Deployment
npm run deploy:vercel # Deploy to Vercel (production)
npm run preview:vercel # Create Vercel preview deployment
```

### Server Scripts
```bash
cd server

# Development
npm run dev           # Start with nodemon (auto-restart)
npm start            # Start production server
```

## 🔐 Authentication & Security

### Authentication Methods
- **Email/Password** - Traditional login with Supabase Auth
- **Google OAuth** - Social login integration
- **Session Management** - Secure token-based sessions

### Security Features
- **Row Level Security** - Database-level access control
- **API Rate Limiting** - Prevent abuse and spam
- **Input Validation** - Sanitize all user inputs
- **CORS Configuration** - Secure cross-origin requests
- **Environment Variables** - Secure credential management

### User Roles
- **Customer** - Browse products, place orders, track deliveries
- **Admin** - Full system access, order management, analytics

## 🗺️ Google Maps Integration

### Required APIs
Enable these APIs in Google Cloud Console:
- **Maps JavaScript API** - Display interactive maps
- **Places API** - Address autocomplete and search
- **Geocoding API** - Convert addresses to coordinates

### Features
- **Address Autocomplete** - Smart address input during checkout
- **Location Picker** - Interactive map for delivery address
- **Real-time Tracking** - Live driver location updates
- **Distance Calculation** - Delivery fee estimation

## 📱 Real-time Features

### Hybrid Real-time System
The application uses a combination of:

1. **Supabase Real-time** - Database change subscriptions
   - Order status updates
   - Product inventory changes
   - User notifications

2. **WebSocket Server** - Custom real-time events
   - Driver location updates
   - Live chat support
   - System announcements

## 🚀 Deployment Guide

### Frontend Deployment (Vercel)
```bash
# Build the application
npm run build

# Deploy using Vercel CLI
npm run deploy:vercel
```

### Server Deployment (Railway/Heroku)
```bash
cd server

# Install production dependencies
npm install --production

# Configure environment variables
# Deploy using platform-specific commands
```

### Environment Variables for Production
```env
# Supabase (Production)
REACT_APP_SUPABASE_URL=https://your-project.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-production-anon-key

# Google Maps (Production)
REACT_APP_GOOGLE_MAPS_API_KEY=your-production-maps-key

# WebSocket Server (Production)
REACT_APP_WEBSOCKET_URL=wss://your-server.com
```

## 🧪 Testing

### Test Coverage
- **Unit Tests** - Component and service testing
- **Integration Tests** - API and database operations
- **E2E Tests** - Complete user workflows
- **Migration Tests** - Database schema validation

### Running Tests
```bash
# Run all tests
npm test

# Run specific test suites
npm test -- --testPathPattern=components
npm test -- --testPathPattern=services

# Generate coverage report
npm test -- --coverage
```

## 📊 Performance Optimization

### Frontend Optimizations
- **Code Splitting** - Lazy load components
- **Image Optimization** - Compressed and responsive images
- **Caching Strategy** - Service worker for offline support
- **Bundle Analysis** - Monitor and optimize bundle size

### Backend Optimizations
- **Database Indexing** - Optimized query performance
- **Connection Pooling** - Efficient database connections
- **Caching Layer** - Redis for frequently accessed data
- **CDN Integration** - Fast static asset delivery

## 🔍 Monitoring & Analytics

### Application Monitoring
- **Error Tracking** - Real-time error reporting
- **Performance Metrics** - Core Web Vitals monitoring
- **User Analytics** - Usage patterns and behavior
- **Server Monitoring** - Uptime and performance tracking

### Business Analytics
- **Order Analytics** - Sales trends and patterns
- **Product Performance** - Popular items and categories
- **User Engagement** - Customer behavior insights
- **Revenue Tracking** - Financial performance metrics

## 🤝 Contributing

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards
- **ESLint** - Follow established linting rules
- **Prettier** - Consistent code formatting
- **Conventional Commits** - Structured commit messages
- **Component Documentation** - Document complex components

## 📞 Support & Documentation

### Additional Documentation
- **[Deployment Guide](./DEPLOYMENT_GUIDE.md)** - Comprehensive deployment instructions
- **[Order Tracking Guide](./ORDER_TRACKING_README.md)** - Real-time tracking setup
- **[Map Testing Guide](./MAP_TESTING_GUIDE.md)** - Google Maps integration testing

### Getting Help
- **GitHub Issues** - Bug reports and feature requests
- **Documentation** - Comprehensive guides and API references
- **Community** - Join our developer community

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Supabase** - For the powerful backend-as-a-service platform
- **Google Maps** - For comprehensive mapping services
- **Open Source Community** - For the countless libraries and tools

---

*Built with ❤️ for the frozen goods delivery industry*