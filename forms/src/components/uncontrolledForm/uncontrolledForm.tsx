import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { schema } from '../../utils/schemaYup';
import { ChangeEventHandler, useRef, useState } from 'react';
import PasswordStrength from '../passwordStrength/passwordStrength';
import { getBase64 } from '../../utils/convertBase64';
import { addDataToForm } from '../../store/slice/dataFormsSlice';
import { RootState } from '../../store/store';
import { IFormInput } from '../../types/formType';

type NewErrors = {
  [key: string]: string;
};

function UncontrolledForm() {
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<NewErrors>({});
  const navigate = useNavigate()
  const countrys = useSelector((state: RootState) => state.countryList);
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const onSumbitHandler: ChangeEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    const formData = {
      name: nameRef.current?.value,
      age: Number(ageRef.current?.value),
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
      gender: genderRef.current?.value,
      acceptTerms: acceptTermsRef.current?.checked,
      img: imgRef.current?.files,
      country: countryRef.current?.value,
    } as IFormInput;

    try {
      await schema.validate(formData, { abortEarly: false });
      if (formData.img) {
        const imgBase64 = await getBase64(formData.img[0] as File);
        formData.img = imgBase64 as string;

        dispatch(addDataToForm(formData));
        navigate('/')
      }

      setErrors({});
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const newErrors = {} as NewErrors;
        error.inner.forEach(err => {
          if (err.path) {
            newErrors[err.path] = err.message;
          }
          console.log(`Field: ${err.path}, Error: ${err.message}`);
        });
        setErrors(newErrors);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="controlled-contaier">
      <form className="form" onSubmit={onSumbitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="select" type="text" name="name" ref={nameRef} />
          <p className="error">{errors.name}</p>
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            className="select"
            type="number"
            name="age"
            defaultValue={15}
            ref={ageRef}
          />
          <p className="error">{errors.age}</p>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className="select" type="email" name="email" ref={emailRef} />
          <p className="error">{errors.email}</p>
        </div>

        <div className="form-group form-passwords">
          <label htmlFor="password">Password</label>
          <input
            className="select"
            type="password"
            name="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
            ref={passwordRef}
          />
          <PasswordStrength password={password} />
          <p className="error">{errors.password}</p>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="select"
            type="password"
            name="confirmPassword"
            ref={confirmPasswordRef}
          />
          <p className="error">{errors.confirmPassword}</p>
        </div>

        <div className="form-group">
          <select className="form-gender select" ref={genderRef}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <p className="error">{errors.gender}</p>
        </div>

        <div className="form-group">
          <label htmlFor="acceptTerms">
            Accept Terms and Conditions agreement
          </label>
          <input
            className="select"
            type="checkbox"
            name="acceptTerms"
            ref={acceptTermsRef}
          />
          <p className="error">{errors.acceptTerms}</p>
        </div>

        <div className="form-group">
          <label htmlFor="img">Choose a picture:</label>
          <input
            className="form-img"
            type="file"
            name="img"
            ref={imgRef}
            required
          />
          <p className="error">{errors.img}</p>
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="country"
            name="country"
            className="select"
            autoComplete="country"
            list="country-list"
            ref={countryRef}
          />
          <datalist id="country-list">
            {countrys.map((country, index) => (
              <option key={index} value={country} />
            ))}
          </datalist>
          <p className="error">{errors.country}</p>
        </div>
        <button
          className="form-submit"
          type="submit"
          // disabled={!isDirty || !isValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
