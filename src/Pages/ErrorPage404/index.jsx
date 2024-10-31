import React from 'react';
import { Link } from 'react-router-dom';


export const ErrorPage404 = () => {
  return (
    <div className="bg-[#0f0a1e] min-h-screen flex items-center justify-center text-white p-4 relative overflow-hidden">
      {/* Stars container */}
      <div className="absolute inset-0">
        {/* Generate multiple stars with different animations */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-1 h-1 bg-white rounded-full
              animate-twinkle
              ${i % 2 === 0 ? 'opacity-60' : 'opacity-90'}
            `}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        {/* Larger stars */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`large-${i}`}
            className={`
              absolute w-2 h-2 bg-purple-300 rounded-full
              animate-twinkle
              ${i % 2 === 0 ? 'opacity-50' : 'opacity-70'}
            `}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-2xl w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h1 className="text-4xl font-bold mb-4">
              Ops, esta página não foi encontrada
            </h1>
            <p className="text-lg mb-6">
              Parece que você se perdeu... Tente voltar para a página anterior
              ou acessar a home.
            </p>
            <div className="flex space-x-4">
              <Link to={'/index'}>
                <button className="bg-[#1f1637] hover:bg-[#2a1d4a] px-6 py-2 rounded-full transition duration-300">
                  IR PARA A HOMEPAGE
                </button>
              </Link>
            </div>
          </div>
          <div className="text-[120px] font-bold flex items-center">
            4
            <span className="inline-block relative">
              <div className="w-24 h-24 bg-purple-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-28 h-28 border-4 border-purple-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <span className="relative z-10">0</span>
            </span>
            4
          </div>
        </div>
      </div>
    </div>
  );
};
