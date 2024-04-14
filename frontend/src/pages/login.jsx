import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../pages/style.module.scss'
import regstration from '../assets/regstration.gif'
import axios from 'axios';


const Login = () => {
  // State for storing input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // State for displaying error message
  const [errorMessage, setErrorMessage] = useState('');
  // Access the router history
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {

    try {
      e.preventDefault();
      const data = {
        email: username,
        password: password
      };
    if(data.email && data.password){
    axios
      .post('https://inderbook-5xqc.vercel.app/auth/login',data)
      .then((response) => {
        if(response){
        navigate('/dashbord');
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
    } catch (error) {
      setErrorMessage('Invalid username or password');
    }
  };

  // Function to navigate to the registration page
  const handleRegistrationClick = () => {
    navigate('/registration'); // Navigate to the registration route
  };

  return (
    <div className={styles.container}>
      <div>
        <img
          src={regstration}
          width={500}
          height={500}
          alt="Registration GIF"
        />
      </div>

      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg shadow-gray-500/50 ">
          <h2 className="text-2xl mb-4 text-center">Login</h2>
          {errorMessage && (
            <div className="text-red-500 mb-4 text-center">{errorMessage}</div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
              className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-black text-white py-2 rounded-lg hover:bg-black-600 transition-colors"
            >
              Login
            </button>
            <div>
              <p
                className="cursor-pointer text-[14px] text-center"
                onClick={handleRegistrationClick}
              >
                Create New Account
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
