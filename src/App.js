import React, { useEffect, useState } from 'react';
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { GoogleMapsProvider } from './context/GoogleMapsContext';
import LoginPage from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import AdminLayout from './layouts/AdminLayout';
import AdminRoute from './components/AdminRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './components/ErrorBoundary';
import CheckoutPage from './pages/CheckoutPage';
import WelcomePage from './pages/WelcomePage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import webSocketService from './services/WebSocketService';

const App = () => {
  const [currentUser, setCurrentUser] = useState(() => {
    const stored = localStorage.getItem('currentUser');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    // Connect as soon as the app loads
    webSocketService.connect();

    // Listen for localStorage changes (for logout detection)
    const handleStorageChange = () => {
      const stored = localStorage.getItem('currentUser');
      setCurrentUser(stored ? JSON.parse(stored) : null);
    };

    // Listen for storage events (when localStorage changes in other tabs)
    window.addEventListener('storage', handleStorageChange);

    // Also listen for custom events (when localStorage changes in same tab)
    window.addEventListener('userLoggedOut', handleStorageChange);

    // Optional: disconnect when the app unmounts
    return () => {
      webSocketService.disconnect();
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userLoggedOut', handleStorageChange);
    };
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<ErrorBoundary />}>
        <Route 
          path="/" 
          element={
            currentUser ? (
              currentUser.isAdmin ? 
              <Navigate to="/admin" replace /> :
              <Navigate to="/dashboard" replace />
            ) : (
              <WelcomePage />
            )
          } 
        />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route 
          path="/dashboard/*" 
          element={
            currentUser ? <Dashboard /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        />
        <Route
          path="/checkout"
          element={<CheckoutPage />}
          errorElement={<ErrorBoundary />}
        />
        <Route
          path="/payment-success"
          element={<PaymentSuccessPage />}
          errorElement={<ErrorBoundary />}
        />
      </Route>
    ),
    {
      future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }
    }
  );

  return (
    <CartProvider>
      <GoogleMapsProvider>
        <RouterProvider router={router} />
      </GoogleMapsProvider>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </CartProvider>
  );
};

export default App;