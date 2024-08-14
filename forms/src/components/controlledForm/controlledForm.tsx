import './controlledForm.scss';

function ControlledForm() {
  return (
    <div className="controlled-contaier">
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="select" type="text" name="name" />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input className="select" type="number" name="age" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className="select" type="email" name="email" />
        </div>

        <div className="form-group form-passwords">
          <label htmlFor="password">Password</label>
          <input className="select" type="password" name="password" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input className="select" type="password" name="confirmPassword" />
        </div>

        <div className="form-group form-gender">
          <div>
            <label htmlFor="male">Male</label>
            <input className="select" type="radio" name="gender" value="male" />
          </div>
          <div>
            <label htmlFor="female">Female</label>
            <input className="select" type="radio" name="gender" value="female" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="acceptTerms">
            Accept Terms and Conditions agreement
          </label>
          <input className="select" type="checkbox" name="acceptTerms" />
        </div>

        <div className="form-group">
          <label htmlFor="avatar">Choose a profile picture:</label>
          <input
          className='form-avatar'
            type="file"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select name="country" className="select">
            <option value="KZ">KZ</option>
            <option value="RU">RU</option>
          </select>
        </div>
        <button className='form-submit' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ControlledForm;
