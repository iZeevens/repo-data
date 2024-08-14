import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <main className="main">
      <nav className="forms-container">
        <Link to={'/controlled'} className='link'>
          <button className="form first-form">Controlled Form</button>
        </Link>
        <Link to={'/uncontrolled'} className='link'>
          <button className="form second-form">Uncontrolled Form</button>
        </Link>
      </nav>
    </main>
  );
}

export default App;
