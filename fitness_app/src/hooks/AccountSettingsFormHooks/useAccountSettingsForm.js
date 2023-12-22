import { useState } from 'react';
import { supabase } from '../../supabase/client';
import { useSession } from '../../supabase/sessionContext';

export function useAccountSettingsForm(updateSuccessMessage) {
  const { session } = useSession();

  const [isSuccess, setIsSuccess] = useState(false);

  const userId = session.user.id;

  const handleProfileUpdate = async (values) => {
    try {
      
      const { firstName, lastName, email, phoneNumber, password, dob, gender, address } = values;

      const tableName = 'users'; // Update with your user profile table name
      const { data, error } = await supabase.from(tableName).upsert(
        [
          {
            id: userId,
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            dob,
            gender,
            address,
          },
        ],
        { onConflict: ['email'] }
      );

      if (error) {
        throw error;
      }

      setIsSuccess(true);
      updateSuccessMessage('Profile updated successfully');
    } catch (e) {
      console.error('DB error', e);
      updateSuccessMessage('Failed to update profile');
      setIsSuccess(false);
    }
  };

  return {
    isSuccess,
    handleProfileUpdate,
  };
}

export default useAccountSettingsForm;
