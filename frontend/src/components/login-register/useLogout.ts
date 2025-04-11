import { useNavigate } from 'react-router-dom';
// import axiosClient from '../axiosClient';

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      // TODO
      // await axiosClient.post('/logout')
      console.log("logging out");
      sessionStorage.setItem("isLogged", "false");
      navigate("/home");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return { logout };
};