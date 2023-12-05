import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useUser } from './contexts/UserContext';


export default function PrivateRouter() {
  const location = useLocation();
  const { isLoggedIn } = useUser();


  return isLoggedIn ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}
 

