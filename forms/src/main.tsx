import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import App from './App.tsx';
import UncontrolledForm from './components/uncontrolledForm/uncontrolledForm.tsx';
import ControlledForm from './components/controlledForm/controlledForm.tsx';
import './index.css';
import 'normalize.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/controlled" element={<ControlledForm />}></Route>
          <Route path="/uncontrolled" element={<UncontrolledForm />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
