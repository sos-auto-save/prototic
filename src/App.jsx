import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import { Index } from './Pages/Index'
import { LoginForm } from './Pages/Login'
import{ SignupForm} from './Pages/SignupForm'
import { Layout } from './Layout'
import { ErrorPage404 } from './Pages/ErrorPage404'




function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Index />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='*' element={<ErrorPage404 />} />

      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
