import { useState } from 'react';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberPassword: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="min-h-screen bg-[#4A5B4A] flex items-center justify-center p-4">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg space-y-6">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="bg-black rounded-lg p-3 inline-block">
            <span className="text-2xl font-bold text-orange-500">SOS</span>
            <span className="text-xl text-orange-500">auto</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-white text-sm">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-white text-sm">Sua senha</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5 opacity-50">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5 opacity-50">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="rounded border-white/20 bg-white/10 text-orange-500 focus:ring-orange-500"
            />
            <label htmlFor="remember" className="ml-2 text-white text-sm">
              Lembrar senha
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
          >
            Entrar
          </button>

          <div className="text-center">
            <a href="#" className="text-white text-sm hover:underline">
              Esqueci a senha
            </a>
          </div>

          <div className="pt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#4A5B4A] text-white">Entrar com</span>
              </div>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <button className="p-2 rounded-full bg-white hover:bg-white/90 transition-colors">
                <img src="./google.svg" alt="Google" className="w-6 h-6" />
              </button>
              <button className="p-2 rounded-full bg-white hover:bg-white/90 transition-colors">
                <img src="./facebook.svg" alt="Facebook" className="w-6 h-6" />
              </button>
            </div>
          </div>

          
          <div className="text-center pt-4">
            <Link to={"/signup"} className="text-white text-sm hover:underline">
              Primeiro acesso
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
