import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { mindpath } from '../assets';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in Successfully.");
            navigate("/dashboard"); // Redirect to the dashboard page
        } catch (error) {
            console.error("Error logging in: ", error);
            // Optionally, show an error message to the user
        }
    };

    return (
        <>
            <div className="w-full overflow-hidden">
                <div className="text-center mt-[150px]">
                    <img 
                        src={mindpath} 
                        alt="MindPath" 
                        className="w-[200px] object-contain mx-auto mb-12" 
                    />
                    <p className="font-poppins font-light text-gray-100 text-black ss:text-[18px] text-[16px] mt-10">
                        Welcome Admin <span className="text-1xl wave"> &#128075; </span>
                    </p>
                    <h1 className="font-poppins font-bold ss:text-[40px] text-[30px] text-black">
                        Sign In Now
                    </h1>
                </div>

                {/* Login Form */}
                <div className="flex flex-col items-center dirtyWhite">
                    <div className="card bg-white max-w-md shrink-0">                
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">  
                                <label className="label">
                                    <span className="block font-poppins text-gray-700 font-medium">Email</span>
                                </label>
                                <input
                                    type="email"
                                    className="input input-bordered font-poppins"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="block font-poppins text-gray-700 font-medium">Password</span>
                                </label>
                                <input
                                    type="password"
                                    className="input input-bordered font-poppins"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-wide font-poppins font-bold bg-blue text-white rounded-md px-[160px] mt-4">
                                Login
                            </button>
                            
                            {/* Forgot Password Link */}
                            <div className="text-center mt-4">
                                <a href="/forgot-password" className="font-poppins text-blue-500 hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
