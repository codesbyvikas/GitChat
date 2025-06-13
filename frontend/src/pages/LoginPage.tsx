import React from 'react';

const LoginPage = () => {
  const handleLogin = () => {
     window.location.href = `${import.meta.env.VITE_API_BASE_URL}/auth/google`;
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4 bg-[#0d1117] text-white'>
        <div className='border border-gray-800 rounded-lg shadow-md px-6 py-3 hover:shadow-lg transition bg-[#1d2124]'>
             <div className='text-center'>
        <div className='flex justify-center items-center mb-6 '>
          <img src="/src/assets/logo.png" alt="GitChat Logo" className=" h-40 mr-2" />
          {/* <h1 className='text-3xl font-bold'>GitChat</h1> */}
          
        </div>
        <h2 className='text-xl mb-6'>Welcome to GitChat</h2>

        <div className='flex flex-col justify-center item-center px-10'>
            <button
            onClick={handleLogin}
            className="bg-white text-black flex items-center justify-center gap-2 px-6 py-3 rounded-md hover:bg-gray-100 transition cursor-pointer font-bold"
            >
            {/* GitHub SVG Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 
                11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
                -.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.083-.729.083-.729 1.205.084 
                1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605
                -2.665-.3-5.467-1.334-5.467-5.931 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 
                0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 
                3.295-1.23 3.295-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.911 
                1.233 3.221 0 4.609-2.807 5.628-5.48 5.922.43.372.823 1.102.823 2.222 
                0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.298 24 
                12c0-6.627-5.373-12-12-12z" />
            </svg>

            Continue with GitHub
            </button>
            {/* horizontal line */}
        </div>
        <div className="flex items-center py-2 ">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-400">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className='flex flex-col justify-center item-center px-10 '>
            <button
            onClick={handleLogin}
            className="bg-white text-black flex items-center justify-center gap-2 px-6 py-3 rounded-md hover:bg-gray-100 transition cursor-pointer font-bold"
            >
            {/* GitHub SVG Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 533.5 544.3"
                >
                <path fill="#4285F4" d="M533.5 278.4c0-17.7-1.6-34.7-4.6-51.2H272v96.9h147.2c-6.3 34-25.3 62.8-53.8 82l87 67.6c50.7-46.8 80.1-115.7 80.1-195.3z"/>
                <path fill="#34A853" d="M272 544.3c72.6 0 133.6-24.1 178.2-65.4l-87-67.6c-24.1 16.2-54.8 25.9-91.2 25.9-69.9 0-129.2-47.2-150.4-110.7l-89.6 69.3c43.5 85.4 132.5 148.5 239 148.5z"/>
                <path fill="#FBBC05" d="M121.6 326.5c-10.1-30.1-10.1-62.4 0-92.5l-89.6-69.3C4.6 207.1-5.7 241.4-5.7 278s10.3 70.9 26.3 113.3l89.6-69.3z"/>
                <path fill="#EA4335" d="M272 107.7c39.5 0 75 13.6 103.1 40.2l77.4-77.4C405.6 25.7 344.6 0 272 0 165.5 0 76.6 63.1 33.1 148.5l89.6 69.3C142.8 154.9 202.1 107.7 272 107.7z"/>
                </svg>

            Continue with Google
            </button>
        </div>
       


        <p className='text-sm text-gray-400 mt-6 max-w-xs mx-auto'>
          By continuing, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Need help? <a href="#" className="underline">Contact support</a>.
        </p>
      </div>
        </div>
     
    </div>
  );
};

export default LoginPage;
