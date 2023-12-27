import { User, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firestore';
import { LoadingWrapper, PrincipalWrapper } from './styled';

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      console.log(user);

      if (user && user.refreshToken) {
        // Si user no es nulo y tiene la propiedad accessToken
        navigate("/home");
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
      {loading ? (
        <LoadingWrapper>
          cargando ...
        </LoadingWrapper>
      ) : (
        <PrincipalWrapper>
          Hola, puedes iniciar sesion o registrarte 
          <button>Registrarse</button>
          <button>Iniciar sesion</button>
        </PrincipalWrapper>
      )}
    </>
  );
};
