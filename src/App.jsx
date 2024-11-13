import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';

import { LoginForm } from './Pages/Login';
import { SignupForm } from './Pages/SignupForm';
import { ErrorPage404 } from './Pages/ErrorPage404';
import { Layout } from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
     
       
        
     
        <Route element={<Layout />}>
          
           <Route path="/" element={<LoginForm />} /> 
          <Route path="/signup" element={<SignupForm />} />
          <Route path="*" element={<ErrorPage404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;