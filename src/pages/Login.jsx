import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg';
import '../App.css';
import { toast } from "react-hot-toast";
import axios from 'axios';
import Signup from './SignUp';

const Login = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const login = async (e) => {
        e.preventDefault();
        let { email, password } = data;
        email = email.split(" ").join("");
        try {
            const { data } = await axios.post("/loginUser", {
                email,
                password,
            });
            if (data.error) {
                toast.error(data.error);
            } else {
                setData({});
                navigate("/home");
                localStorage.setItem("userData", JSON.stringify(data));
                toast.success("Login Successful");
                setTimeout(() => {
                    window.location.reload();
                }, 400);
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred, please try again...");
        }
    };

    const handleSignUp = () => {
        navigate('/signup');
    }

    return (
        <div style={{ fontFamily: 'Nunito', fontWeight: 400 }}>
            <header className="header" data-header>
                <div className="container">
                    <div className="overlay" data-overlay />
                    <a href="#" className="logo">
                        <img src={logo} alt="Ridex logo" />
                    </a>
                    <nav className="navbar" data-navbar>
                        <ul className="navbar-list">
                            <li>
                                <a href="#home" className="navbar-link" data-nav-link>Home</a>
                            </li>
                            <li>
                                <a href="#featured-car" className="navbar-link" data-nav-link>Explore cars</a>
                            </li>
                            <li>
                                <a href="#footer" className="navbar-link" data-nav-link>About us</a>
                            </li>
                            <li>
                                <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-actions">
                        <div className="header-contact">
                            <a href="tel:88002345678" className="contact-link">8 800 234 56 78</a>
                            <span className="contact-time">Mon - Sat: 9:00 am - 6:00 pm</span>
                        </div>
                        <a href="#featured-car" className="btn" aria-labelledby="aria-label-txt">
                            <span id="aria-label-txt">Explore cars</span>
                        </a>
                        <a href="#" className="btn user-btn" aria-label="Profile">
                            <i class="bi bi-person-fill-gear"></i>
                        </a>
                        <button className="nav-toggle-btn" data-nav-toggle-btn aria-label="Toggle Menu">
                            <span className="one" />
                            <span className="two" />
                            <span className="three" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Home Screen */}

            <main>
                <article>
                    <section className="section hero" id="home">
                        <div className="container">
                            <div className="hero-content">
                                <h2 className="h1 hero-title">Login Authentication</h2>
                                <p className="hero-text">Hello user. Login to continue!</p>
                            </div>
                            <div className="hero-banner" />
                            <form action="" className="login-form">
                                <div className="input-wrapper">
                                    <label htmlFor="input-1" className="input-label">
                                        Email Id
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="input-1"
                                        className="input-field"
                                        placeholder="Enter your email id"
                                        onChange={(e) => setData({ ...data, email: e.target.value })}
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="input-2" className="input-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="input-2"
                                        className="input-field"
                                        placeholder="Enter your password"
                                        onChange={(e) => setData({ ...data, password: e.target.value })}
                                    />
                                </div>
                                <button onClick={login} type="submit" className="btn">
                                    Login
                                </button>
                                
                                <button onClick={handleSignUp} type="submit" className="btn">
                                    New user ? Sign up
                                </button>
                            </form>
                        </div>
                    </section>
                </article>
            </main>

        </div>
    )
}

export default Login