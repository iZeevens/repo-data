import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z]/, 'Name should have first uppercased letter'),
  age: yup
    .number()
    .nullable()
    .required('Age is required')
    .positive('Age should be positive'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid Email format'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], "Passwords don't match"),
  gender: yup.string().oneOf(['male', 'female']).required('Gender is required'),
  acceptTerms: yup
    .boolean()
    .required('The terms and conditions must be accepted.')
    .oneOf([true], 'The terms and conditions must be accepted'),
  img: yup
    .mixed<FileList | string>()
    .nonNullable()
    .required('Img is required')
    .test(
      'type',
      'Only the following formats are accepted: .png, .jpeg',
      value => {
        if (typeof value === 'string') return true;

        return (
          !value[0] ||
          (value && ['image/jpeg', 'image/png'].includes(value[0].type))
        );
      },
    )
    .test('fileSize', 'File size must be less than 1MB', value => {
      if (typeof value === 'string') return true;

      return !value[0] || (value[0] && value[0].size / 1024 <= 1024);
    }),
  country: yup.string().required('Country is required'),
});

export { schema };
