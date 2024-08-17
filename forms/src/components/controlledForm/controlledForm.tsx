import './controlledForm.scss';
import { schema } from '../../utils/schemaYup';
import { useState } from 'react';
import { IFormInput } from '../../types/formType';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import { addDataToForm } from '../../store/slice/dataFormsSlice';
import { RootState } from '../../store/store';
import PasswordStrength from '../passwordStrength/passwordStrength';
import { getBase64 } from '../../utils/convertBase64';
import { useNavigate } from 'react-router';


function ControlledForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<IFormInput>({ mode: 'onChange', resolver: yupResolver(schema) });
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate()
  const countrys = useSelector((state: RootState) => state.countryList);
  const dispatch = useDispatch();

  const onSumbitHandler = async (data: IFormInput) => {
    const imgBase64 = await getBase64(data.img[0] as File);
    data.img = imgBase64 as string;

    dispatch(addDataToForm({ ...data }));
    reset();
    navigate('/')
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
            defaultValue={15}
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
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <PasswordStrength password={password} />
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
            required
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
        <button
          className="form-submit"
          type="submit"
          disabled={!isDirty || !isValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ControlledForm;
