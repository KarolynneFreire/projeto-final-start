import { useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useUser } from './contexts/UserContext';


export default function PrivateRouter() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn } = useUser();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [location]);

  return <Outlet />;
}