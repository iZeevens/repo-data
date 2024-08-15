import './controlledForm.scss';
import { IFormInput } from '../../types/formType';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import { addDataToForm } from '../../store/slice/dataFormsSlice';
import { RootState } from '../../store/store';
import * as yup from 'yup';

const schema = yup.object({
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
  confirmPassword: yup.string().required('Confirm Password is required'),
  gender: yup.string().oneOf(['male', 'female']).required('Gender is required'),
  acceptTerms: yup
    .boolean()
    .required('The terms and conditions must be accepted.')
    .oneOf([true], 'The terms and conditions must be accepted'),
  img: yup
    .mixed<FileList>()
    .nonNullable()
    .required('Img is required')
    .test(
      'type',
      'Only the following formats are accepted: .png, .jpeg',
      value =>
        !value[0] ||
        (value && ['image/jpeg', 'image/png'].includes(value[0].type)),
    )
    .test(
      'fileSize',
      'File size must be less than 1MB',
      value => !value[0] || (value[0] && value[0].size / 1024 <= 1024),
    ),
  country: yup.string().required('Country is required'),
});

function ControlledForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({ mode: 'onChange', resolver: yupResolver(schema) });
  const countrys = useSelector((state: RootState) => state.countryList);
  const dispatch = useDispatch();

  const onSumbitHandler = (data: IFormInput) => {
    dispatch(addDataToForm({ ...data }));
    reset();
  };

  return (
    <div className="controlled-contaier">
      <form className="form" onSubmit={handleSubmit(onSumbitHandler)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            {...register('name')}
            className="select"
            type="text"
            name="name"
          />
          <p className="error">{errors.name?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            {...register('age')}
            className="select"
            type="number"
            name="age"
            defaultValue={0}
          />
          <p className="error">{errors.age?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            {...register('email')}
            className="select"
            type="email"
            name="email"
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-group form-passwords">
          <label htmlFor="password">Password</label>
          <input
            {...register('password')}
            className="select"
            type="password"
            name="password"
          />
          <p className="error">{errors.password?.message}</p>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            {...register('confirmPassword')}
            className="select"
            type="password"
            name="confirmPassword"
          />
          <p className="error">{errors.confirmPassword?.message}</p>
        </div>

        <div className="form-group">
          <select {...register('gender')} className="form-gender select">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <p className="error">{errors.gender?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="acceptTerms">
            Accept Terms and Conditions agreement
          </label>
          <input
            {...register('acceptTerms')}
            className="select"
            type="checkbox"
            name="acceptTerms"
          />
          <p className="error">{errors.acceptTerms?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="img">Choose a picture:</label>
          <input
            {...register('img')}
            className="form-img"
            type="file"
            name="img"
            accept="image/png, image/jpeg"
          />
          <p className="error">{errors.img?.message}</p>
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            {...register('country')}
            type="country"
            name="country"
            className="select"
            autoComplete="country"
            list="country-list"
          />
          <datalist id="country-list">
            {countrys.map((country, index) => (
              <option key={index} value={country} />
            ))}
          </datalist>
          <p className="error">{errors.country?.message}</p>
        </div>
        <button className="form-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ControlledForm;
