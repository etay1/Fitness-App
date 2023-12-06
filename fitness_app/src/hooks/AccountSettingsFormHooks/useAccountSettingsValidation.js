import * as Yup from 'yup';

const useAccountSettingsValidation = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Must be 6 characters or more').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    dateofBirth: Yup.string()
     .transform((curr, orig) => {
        const parseDate = new Date(curr);
        if(!isNaN(parseDate.getTime())){
            return `${parseDate.getMonth() + 1}/${parseDate.getDate()}/${parseDate.getFullYear()}`;
        }
             return orig;
        
     })
      .matches(/^(0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/](19|20)\d\d$/, 'Invalid date'),  
    phoneNumber: Yup.string().matches(/^\d+$/, 'Invalid phone number').required('Required'),
    address: Yup.object({
      street: Yup.string(),
      city: Yup.string(),
      state: Yup.string(),
      zip: Yup.string().matches(/^\d+$/, 'Invalid zip code')
    }),
  });

  return { validationSchema };
};

export default useAccountSettingsValidation;
