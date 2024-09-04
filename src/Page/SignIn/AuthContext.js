import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from './firebase'; // Adjust path as needed
import { onAuthStateChanged } from 'firebase/auth';

// Create a Context for authentication
const AuthContext = createContext();

// Provide Auth Context to children components
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, timeActive, setTimeActive }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuthValue = () => useContext(AuthContext);
