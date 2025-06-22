import React, { createContext, useContext } from 'react';

const GoogleMapsContext = createContext();

export const GoogleMapsProvider = ({ children }) => {
  const isLoaded = false; // Will be implemented with actual Google Maps API
  const loadError = null;

  return (
    <GoogleMapsContext.Provider value={{
      isLoaded,
      loadError
    }}>
      {children}
    </GoogleMapsContext.Provider>
  );
};

export const useGoogleMaps = () => {
  const context = useContext(GoogleMapsContext);
  if (!context) {
    throw new Error('useGoogleMaps must be used within a GoogleMapsProvider');
  }
  return context;
};