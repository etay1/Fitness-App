import { useEffect, useState } from "react";
import { supabase } from "../../supabase/client";

export function useAccountSettingsRegistry(userId) {
  const [accountSettings, setAccountSettings] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAccountSettings() {
      try {
        let { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", userId)
          .single();

        if (error) {
          setError(error);
        } else {
          setAccountSettings(data);
        }
      } catch (error) {
        setError(error);
      }
    }

    if (userId) {
      fetchAccountSettings();
    }
  }, [userId]);

  return { accountSettings, error };
}

export default useAccountSettingsRegistry;
