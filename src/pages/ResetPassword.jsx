import React, { useEffect, useState } from 'react'
import './ResetPassword.css'
import smallLogo from "../assets/logo.gif";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function ResetPassword() {
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const uid = searchParams.get("uid");
        const token = searchParams.get("token");

        if (!uid || !token) {
            // Redirect to a 404 or error page if uid or token is missing
            navigate("/error");
        }
    }, [location, navigate]);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validatePassword = () => {
        const confirmPasswordInput = document.getElementById("confirmPassword");
        if (password !== confirmPassword) {
            confirmPasswordInput.setCustomValidity("Passwords Don't Match");
            return false;
        } else {
            confirmPasswordInput.setCustomValidity("");
            return true;
        }
    };

    const enableSubmitButton = () => {
        setIsSubmitting(false);
    };

    const disableSubmitButton = () => {
        setIsSubmitting(true);
    };

    const validateSignupForm = (e) => {
        e.preventDefault();

        const form = document.getElementById("signupForm");

        for (let i = 0; i < form.elements.length; i++) {
            if (
                form.elements[i].value === "" &&
                form.elements[i].hasAttribute("required")
            ) {
                console.log("There are some required fields!");
                return false;
            }
        }

        if (!validatePassword()) {
            return false;
        }

        onSignup();
    };

    const onSignup = async () => {

        const searchParams = new URLSearchParams(location.search);
        const uid = searchParams.get("uid");
        const token = searchParams.get("token");
        try {
            const response = await axios.post(
                `https://api.prometeo.in/accounts/password-reset-confirm/?uid=${uid}&token=${token}`,
                {
                    new_password: password, // Value from the password state
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            toast.success("Password reset successfully!");

            setTimeout(() => {
                navigate("/dashboard");
            }, 3000);
            // console.log("Password reset successfully", response.data);
        } catch (error) {
            // console.error("Error resetting password:", error.response || error.message);
            toast.error("Invalid or expired link Please generate a new link");
            setTimeout(() => {
                navigate("/error")

            }, 3000);
        }



    };


    return (
        <div className="mainDiv">
            <div className="cardStyle">
                <form
                    action=""
                    method="post"
                    name="signupForm"
                    id="signupForm"
                    onSubmit={validateSignupForm}
                >
                    <img
                        id="signupLogo"
                        src={smallLogo}
                    />

                    <h2 className="formTitle">Setup new Password</h2>

                    <div className="inputDivFor">
                        <label className="inputLabel" htmlFor="password">
                            New Password
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                            
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                required
                                className="flex-1 p-2 outline-none text-black bg-white"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={validatePassword}
                            />
                            <div
                                className="p-2 bg-gray-200 flex items-center justify-center cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <VisibilityOffIcon className="text-black" />
                                ) : (
                                    <RemoveRedEyeIcon className="text-black" />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="inputDivFor">
                        <label className="inputLabel" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            style={{ backgroundColor: "white", color: "black" }}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                            onKeyUp={validatePassword}
                        />
                    </div>

                    <div className="buttonWrapper">
                        <button
                            type="submit"
                            id="submitButton"
                            disabled={isSubmitting}
                            className="submitButton pure-button pure-button-primary"
                        >
                            <span>Continue</span>
                            <span
                                id="loader"
                                style={{ display: isSubmitting ? "unset" : "none" }}
                            />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
