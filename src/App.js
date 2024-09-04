import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './Page/SignIn/Register';
import Login from './Page/SignIn/Login';
import Profile from './Page/SignIn/Profile'; // Example additional page that requires auth
import { AuthProvider, useAuthValue } from './Page/SignIn/AuthContext'; // Adjust path as needed
import Index from './Page/MainPage/Index';
import InputOptionsPage from './Page/otherpages/InputOptionsPage';

// Component to protect routes
const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuthValue();

  return currentUser ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Default route to redirect to the Register page */}
          <Route path="/" element={<Navigate to="/Register" />} />
          
          {/* Register page route */}
          <Route path="/Register" element={<Register />} />
          
          {/* Login page route */}
          <Route path="/Login" element={<Login />} />
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Index' element={<Index/>}/>
          <Route path='/CommandCenter' element={<InputOptionsPage/>}/>
          
          {/* Example of a protected route */}
          <Route path="/Profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
