import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track whether the authentication check is still loading

  useEffect(() => {
    const checkAuthentication = () => {
      // Check if a valid JWT token is stored in local storage
      const token = localStorage.getItem('token');

      if (token) {
        try {
          const decodedToken = jwt_decode(token);

          if (decodedToken && decodedToken.username) {
            console.log("Malithhhhhhhhhhhhhhhhhhhhhh");
            setIsAuthenticated(true);
          } else {
            // Token is invalid, so clear it
            localStorage.removeItem('token');
            setIsAuthenticated(false);
          }
        } catch (error) {
          // Token decoding failed, so clear it
          console.error('Error decoding token:', error);
          localStorage.removeItem('token');
          setIsAuthenticated(false);
        }
      } else {
        // No token found
        setIsAuthenticated(false);
      }

      // Set loading to false once the authentication check is complete
      setIsLoading(false);
    };

    checkAuthentication();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Return loading state if the authentication check is still in progress
  if (isLoading) {
    return null; // or any loading indicator you prefer
  }

  return isAuthenticated;
};
