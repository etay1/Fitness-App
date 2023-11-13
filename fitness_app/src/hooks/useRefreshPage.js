import React from "react";

function useRefreshPage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return handleRefresh;
}

export default useRefreshPage;
