function useSession() {  // State initialization
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Retrieve the session data from the query parameters
    const userId = searchParams.get('userId');
    console.log(userId);
}

export default useSession;