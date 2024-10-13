import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg';
import '../App.css';
import { toast } from "react-hot-toast";
import axios from 'axios';

const Signup = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({
        name : '',
        email: '',
        password: '',
        aadhar : ''
    });

    const signup = async (e) => {
        e.preventDefault();
        let { name, email, password, aadhar } = data;
        email = email.split(" ").join("");
        try {
            const { data } = await axios.post("/signup", {
                name,
                email,
                password,
                aadhar
            });
            if (data.error) {
                toast.error(data.error);
            } else {
                setData({});
                navigate("/");
                toast.success("Signup Successful");
                setTimeout(() => {
                    window.location.reload();
                }, 400);
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred, please try again...");
        }
    };

    return (
        <div style={{ fontFamily: 'Nunito', fontWeight: 400 }}>
            <header className="header" data-header>
                <div className="container">
                    <div className="overlay" data-overlay />
                    <a href="#" className="logo">
                        {/* <img src={logo} alt="Ridex logo" /> */}
                        <h2 className = "black">Travel Trove</h2>
                    </a>
                    <nav className="navbar" data-navbar>
                        <ul className="navbar-list">
                            <li>
                                <a href="#home" className="navbar-link" data-nav-link>Home</a>
                            </li>
                            <li>
                                <a href="#featured-car" className="navbar-link" data-nav-link>Explore guides</a>
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
                            <span id="aria-label-txt">Explore guides</span>
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
                                <h2 className="h1 hero-title">Register Now</h2>
                                <p className="hero-text">Hello user. Register now on traveltrove !</p>
                            </div>
                            <div className="hero-banner" />
                            <form action="" className="login-form">
                            <div className="input-wrapper">
                                    <label htmlFor="input-1" className="input-label">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="input-1"
                                        className="input-field"
                                        placeholder="Enter your name"
                                        onChange={(e) => setData({ ...data, name: e.target.value })}
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="input-1" className="input-label">
                                        Email Id
                                    </label>
                                    <input
                                        type="email"
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
                                <div className="input-wrapper">
                                    <label htmlFor="input-2" className="input-label">
                                        Contact Number
                                    </label>
                                    <input
                                        type="text"
                                        name="aadhar"
                                        id="input-2"
                                        className="input-field"
                                        placeholder="Enter your contact number"
                                        onChange={(e) => setData({ ...data, aadhar: e.target.value })}
                                    />
                                </div>
                                <button onClick={signup} type="submit" className="btn">
                                    Signup
                                </button>
                            </form>
                        </div>
                    </section>
                </article>
            </main>
        </div>
    )
}

export default Signup;