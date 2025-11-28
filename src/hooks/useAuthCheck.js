// src/hooks/useAuthCheck.ts
import { useEffect, useState } from "react";

export function useAuthCheck() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRol, setUserRol] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/users/session", {
          method: "GET",
          credentials: "include", // importante para enviar la cookie
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          setIsAuthenticated(false);
          setUserRol(null);
          return;
        }

        const data = await res.json();

        if (data.loggedIn === false) {
          setIsAuthenticated(false);
          setUserRol(null);
        } else {
          setIsAuthenticated(true);
          setUserRol(data.user.rol);
        }
      } catch (err) {
        console.log(err);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { isLoading, isAuthenticated, userRol };
}
