import { useNavigate } from "react-router-dom";

export const useApp = () => {

  const navigate = useNavigate();

  const navigateGoBack = () => {
    navigate(-1);
  };

  const navigateGoForward = () => {
    navigate(1);
  };

  return {
    navigateGoForward,
    navigateGoBack,
  };
};
