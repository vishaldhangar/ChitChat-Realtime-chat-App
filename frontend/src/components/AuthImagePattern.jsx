import React from 'react'


const AuthImagePattern = ({ title ,subtitle  }) => {
    return (
      <div className="flex items-center justify-center bg-gray-900 p-5 min-h-screen">
        <div className="max-w-sm text-center">
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={` aspect-square rounded-2xl bg-blue-950   ${
                  i % 2 === 0 ? "animate-pulse" : ""
                }`}
              />
            ))}
          </div>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-gray-600 text-sm mb-2">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default AuthImagePattern;
  
  