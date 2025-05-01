import React, { useState } from 'react';
import banner from '../assets/bg-banner.jpg';
import Header from './Header';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig.js';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Firebase app initialize kar rahe hain
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const page = location.pathname === '/login' ? true : false;

    // Form ke state variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isEmailUsed, setIsEmailuUsed] = useState(false);
    

    const handleLogin = (e) => {
        
        e.preventDefault();

        if (page) {
            // Login kar rahe hain
            signInWithEmailAndPassword(auth, email, password)
                .then((auth) => {
                    navigate("/dashboard");
                })
                .catch((err) => {
                    console.error('Login error:', err.message);
                    setError('Invalid email or password');
                });
        } else {
            // Register kar rahe hain
            createUserWithEmailAndPassword(auth, email, password)
                .then(auth => {
                    navigate('/dashboard');
                })
                .catch((err) => {
                    console.error("Signup Error:", err.code, err.message);
                    if (err.code === "auth/email-already-in-use") {
                        setIsEmailuUsed(true);
                        setError("Email is already in use");
                    } else if (err.code === "auth/weak-password") {
                        setError("Password should be at least 6 characters");
                    } else {
                        setError("Failed to register. Please try again.");
                    }
                });
        }
    };

    return (
        <>   
        <Header/>
            <div className="relative w-full h-screen overflow-hidden">
                <img
                    src={banner}
                    alt="Banner"
                    className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-0"></div>
                <div className="relative z-10 flex items-center justify-center h-full px-4">
                    <div className="bg-black bg-opacity-80 text-white p-8 rounded-md w-full max-w-md">
                        <h2 className="text-3xl font-bold mb-6">{page ? "Sign in" : "Register"}</h2>

                        {/* Error agar hai to red color me show karo */}
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                        <form onSubmit={handleLogin} className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-gray-800 px-4 py-3 rounded text-white outline-none"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-gray-800 px-4 py-3 rounded text-white outline-none"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 transition py-3 rounded font-semibold"
                            >
                                {page ? "Sign in" : "Register"}
                            </button>

                            {/* Login page ke liye extra options */}
                            {page && (
                                <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="accent-red-600" />
                                        Remember me
                                    </label>
                                    <a href="#" className="hover:underline">Need help?</a>
                                </div>
                            )}
                        </form>

                        {/* Sign in / Sign up toggle with red message if email already used */}
                        <div className="mt-6 text-sm text-gray-400">
                            {page ? "New to Netflix? " : "Existing user "}
                            {isEmailUsed ? (
                                <span className="text-red-500">Already used in </span>
                            ) : (
                                "sign in "
                            )}
                            <Link to={page ? "/register" : "/login"} className="text-white hover:underline">
                                {page ? "Sign up now " : "Sign in "}
                            </Link>.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
