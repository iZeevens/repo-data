import './controlledForm.scss';
import formInput from '../../types/formType';
import { useForm } from 'react-hook-form';

function ControlledForm() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm<formInput>();

  const onSumbitHandler = (data: formInput) => {
    console.log(data);
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
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            {...register('age')}
            className="select"
            type="number"
            name="age"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            {...register('email')}
            className="select"
            type="email"
            name="email"
          />
        </div>

        <div className="form-group form-passwords">
          <label htmlFor="password">Password</label>
          <input
            {...register('password')}
            className="select"
            type="password"
            name="password"
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            {...register('confirmPassword')}
            className="select"
            type="password"
            name="confirmPassword"
          />
        </div>

        <div className="form-group">
          <select {...register('gender')} className="form-gender select">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
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
        </div>

        <div className="form-group">
          <label htmlFor="img">Choose a picture:</label>
          <input
            {...register('avatar')}
            className="form-img"
            type="file"
            name="img"
            accept="image/png, image/jpeg"
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select {...register('country')} name="country" className="select">
            <option value="KZ">KZ</option>
            <option value="RU">RU</option>
          </select>
        </div>
        <button className="form-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ControlledForm;
