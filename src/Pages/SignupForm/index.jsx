import React, { useState } from 'react'
import { registerUser } from '../../services/user.js'
import { Link } from 'react-router-dom'

const Button = ({ children, className, variant, ...props }) => {
  const baseStyle = "px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
  }
  
  return (
    <button 
      className={`${baseStyle} ${variantStyles[variant] || variantStyles.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

const Input = ({ className, ...props }) => {
  return (
    <input 
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  )
}

const Icons = {
  eye: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  eyeOff: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
  ),
  google: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/><path d="M1 1h22v22H1z" fill="none"/></svg>
  ),
  facebook: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
  )
}

export const SignupForm = ()=> {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccessMessage('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      const newUser = registerUser(formData.nome, 0, formData.email, formData.password)
      console.log('User registered:', newUser)
      setSuccessMessage('User registered successfully!')
      setFormData({ nome: '', email: '', password: '', confirmPassword: '' })
    } catch (err) {
      setError('Failed to register user')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#2C4C3B] p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="inline-block rounded-lg bg-black p-2">
            <h2 className="text-3xl font-bold text-[#FF8C00]">SOS</h2>
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
          <div>
            <Input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Escreva seu nome completo"
              className="bg-white/10 text-white placeholder:text-gray-400"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Escreva seu Email"
              className="bg-white/10 text-white placeholder:text-gray-400"
              required
            />
          </div>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Escreva sua Senha"
              className="bg-white/10 text-white placeholder:text-gray-400"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Icons.eyeOff className="h-4 w-4 text-gray-400" />
              ) : (
                <Icons.eye className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Escreva sua Senha novamente"
              className="bg-white/10 text-white placeholder:text-gray-400"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <Icons.eyeOff className="h-4 w-4 text-gray-400" />
              ) : (
                <Icons.eye className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
          <Button type="submit" className="w-full bg-[#FF8C00] text-white hover:bg-[#E67E00]">
            Registrar
          </Button>
        </form>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" className="bg-white p-2">
            <Icons.google className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="bg-white p-2">
            <Icons.facebook className="h-5 w-5 text-blue-600" />
          </Button>
        </div>
        <p className="text-center text-sm text-gray-300">
          Já tem uma conta?{" "}
          <Link to={"/"} className="font-semibold text-white hover:underline">
          Entre
          </Link>
      
        </p>
      </div>
    </div>
  )
}