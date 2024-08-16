import './App.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

function App() {
  const data = useSelector((state: RootState) => state.data);

  console.log(data);
  return (
    <main className="main">
      <nav className="forms-container">
        <Link to={'/controlled'} className="link">
          <button className="form first-form">Controlled Form</button>
        </Link>
        <Link to={'/uncontrolled'} className="link">
          <button className="form second-form">Uncontrolled Form</button>
        </Link>
      </nav>
      <div className="forms-data">
        <h2>Form data:</h2>
        {data.length > 0 ? (
          <div className="forms-data-wrapper">
            {data.map((info, index) => (
              <div
                className={`form-data-container ${data.length === index + 1 ? 'form-data-container-active' : ''}`}
                key={index}
              >
                <div>{}</div>
                <img
                  className="form-data-img form-data"
                  src={info.img as string}
                  alt="image"
                />
                <span className="form-data-name form-data">
                  name: {info.name}
                </span>
                <span className="form-data-country form-data">
                  country: {info.country}
                </span>
                <span className="form-data-age form-data">age: {info.age}</span>
                <span className="form-data-email form-data">
                  email: {info.email}
                </span>
                <span className="form-data-password form-data">
                  password: {info.password}
                </span>
                <span className="form-data-gender form-data">
                  gender: {info.gender}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <span>Form data not exist yet</span>
        )}
      </div>
    </main>
  );
}

export default App;
