import './controlledForm.scss';

function ControlledForm() {
  return (
    <div className="controlledForm-contaier">
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" name="age" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>

        <div className="form-group passwords">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" />
        </div>

        <div className="form-group form-gender">
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" value="male" />

          <label htmlFor="female">Female</label>
          <input type="radio" name="gender" value="female" />
        </div>

        <div className="form-group">
          <label htmlFor="acceptTerms">
            Accept Terms and Conditions agreement
          </label>
          <input type="checkbox" name="acceptTerms" />
        </div>

        <div className="form-group">
          <label htmlFor="avatar">Choose a profile picture:</label>
          <input type="file" name="avatar" accept="image/png, image/jpeg" />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select name="country">
            <option value="KZ">KZ</option>
            <option value="RU">RU</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default ControlledForm;
