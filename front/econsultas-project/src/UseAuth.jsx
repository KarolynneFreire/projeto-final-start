// import { useNavigate } from 'react-router-dom';

// interface UseAuthContext {
//   isAuthenticated: boolean;
//   loginRedirect: () => void;
//   logout: () => void;
// }

// export default function useAuth(): UseAuthContext {
//   const navigate = useNavigate();

//   let isAuthenticated = true;

//   const loginRedirect = () => {
//     navigate('/');
//   };

//   const logout = () => {
//     navigate('/');
//   };

//   return {
//     isAuthenticated,
//     loginRedirect,
//     logout,
//   };
// }