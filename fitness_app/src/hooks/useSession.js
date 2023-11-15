import { useLocation } from "react-router-dom";

function useQueryParams() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const getQueryParam = (paramName) => searchParams.get(paramName);

  return {
    getQueryParam,
  };
}

export default useQueryParams;
