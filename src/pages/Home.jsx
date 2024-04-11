import React, { useState } from 'react';
import '../App.css';
import logo from '../images/logo.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import car1 from '../images/car-1.jpg';
import car2 from '../images/car-2.jpg';
import car3 from '../images/car-3.jpg';
import car4 from '../images/car-4.jpg';
import car5 from '../images/car-5.jpg';
import car6 from '../images/car-6.jpg';
import car7 from '../images/car7.webp';
import car8 from '../images/car8.jpg';
import car9 from '../images/car9.webp';
import qr from '../images/qr.jpeg';


const Home = () => {

    const [model, setModel] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        const featuredCarSection = document.getElementById("featured-car");
        if (featuredCarSection) {
            featuredCarSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const userData = JSON.parse(localStorage.getItem("userData"));
    const car1stat = userData.toyota;
    const car2stat = userData.bmw3;
    const car3stat = userData.volks;
    const car4stat = userData.cadillac;
    const car5stat = userData.bmwgti;
    const car6stat = userData.bmw4;
    const car7stat = userData.benz;
    const car8stat = userData.suzuki;
    const car9stat = userData.jaguar;

    const handleRent = (car, carName) => {
        const email = userData.email;
        const name = userData.name;
        const aadhar = userData.aadhar;
        const res = axios.post('/changeStatus', {
            car: car,
            carName: carName,
            email: email,
            name : name,
            aadhar : aadhar
        });

        const updatedUserData = { ...userData, [car]: 'verify' };
        localStorage.setItem('userData', JSON.stringify(updatedUserData));

        Swal.fire({
            icon: "success",
            title: "Payment Pending",
            imageUrl: qr,
            imageWidth: 200,
            imageHeight: 200,
            text: "Complete the payment and verify !",
            confirmButtonText: "Verify and Complete"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
        });
    }

    const [review, setReview] = useState("");

    const handleReview = (car) => {
        setReview(car);
        const featuredCarSection = document.getElementById("review");
        if (featuredCarSection) {
            featuredCarSection.scrollIntoView({ behavior: "smooth" });
        }

    }

    const randomReviews = [
        "Excellent performance and handling!",
        "Spacious interior with luxurious features.",
        "Impressive fuel efficiency and reliability.",
        "Stylish design and comfortable ride.",
        "Great value for money with advanced technology.",
        "Smooth acceleration and responsive steering.",
        "Intuitive infotainment system with user-friendly interface.",
        "Roomy cargo space perfect for road trips.",
        "Solid build quality with top-notch safety features.",
        "Effortless highway cruising with excellent stability.",
        "Sporty appearance with sleek lines and aerodynamic profile.",
        "Comfortable seating for long journeys.",
        "Innovative driver assistance features for added convenience.",
        "Efficient engine options catering to different driving needs.",
        "Easy-to-use controls and intuitive layout.",
        "Impressive sound system for immersive audio experience.",
        "Luxurious materials and premium craftsmanship throughout.",
        "Advanced connectivity options for seamless integration.",
        "Excellent visibility and minimal blind spots.",
        "Outstanding performance in various weather conditions."
    ];

    const randomReview = randomReviews[Math.floor(Math.random() * randomReviews.length)];

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function padNumber(num) {
        return num.toString().padStart(2, '0');
    }

    function randomDateISOString() {
        const year = getRandomNumber(2020, 2024);
        const month = getRandomNumber(1, 12);
        const day = getRandomNumber(1, 28); 
        return `${year}-${padNumber(month)}-${padNumber(day)}`;
    }
    
    function randomDateString() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const year = getRandomNumber(2000, 2025);
        const month = months[getRandomNumber(0, 11)];
        const day = getRandomNumber(1, 28); 
        return `${month} ${padNumber(day)}, ${year}`;
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
                            {/* <a href="tel:88002345678" className="contact-link">8 800 234 56 78</a> */}
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
                                <h2 className="h1 hero-title">Hello {userData.name} !</h2>
                                <p className="hero-text">Tell us which car are you interested in !</p>
                            </div>
                            <div className="hero-banner" />
                            <form action="" className="hero-form">
                                <div className="input-wrapper">
                                    <label htmlFor="input-1" className="input-label">
                                        Car, model, or brand
                                    </label>
                                    <input
                                        type="text"
                                        name="car-model"
                                        id="input-1"
                                        className="input-field"
                                        placeholder="What car are you looking?"
                                        onChange={(e) => setModel(e.target.value)}
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="input-2" className="input-label">
                                        Max. monthly payment
                                    </label>
                                    <input
                                        type="text"
                                        name="monthly-pay"
                                        id="input-2"
                                        className="input-field"
                                        placeholder="Add an amount in $"
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="input-3" className="input-label">
                                        Make Year
                                    </label>
                                    <input
                                        type="text"
                                        name="year"
                                        id="input-3"
                                        className="input-field"
                                        placeholder="Add a minimal make year"
                                    />
                                </div>
                                <button onClick={handleSearch} className="btn">
                                    Search
                                </button>
                            </form>
                        </div>
                    </section>

                    {/* Featured Cars */}

                    <section className="section featured-car" id="featured-car">
                        <div className="container">
                            <div className="title-wrapper">
                                <h2 className="h2 section-title">Featured cars</h2>
                                <a href="#" className="featured-car-link">
                                    <span>View more</span>
                                    <i class="bi bi-box-arrow-in-right"></i>
                                </a>
                            </div>
                            <ul className="featured-car-list">
                                {
                                    !model || model.toLowerCase().startsWith("toyota") ? (
                                        <li>
                                            <div className="featured-car-card">
                                                <figure className="card-banner">
                                                    <img
                                                        src={car1}
                                                        alt="Toyota RAV4 2021"
                                                        loading="lazy"
                                                        width={440}
                                                        height={300}
                                                        className="w-100"
                                                    />
                                                </figure>
                                                <div className="card-content">
                                                    <div className="card-title-wrapper">
                                                        <h3 className="h3 card-title">
                                                            <a href="#">Toyota RAV4</a>
                                                        </h3>
                                                        <data className="year" value={2021}>
                                                            2021
                                                        </data>
                                                    </div>
                                                    <ul className="card-list">
                                                        <li className="card-list-item">
                                                            <i className="bi bi-people" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">4 People</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-speedometer2" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">110/km Limit</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-fuel-pump" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">6.1km / 1-litre</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-cpu" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">Automatic</span>
                                                        </li>
                                                    </ul>
                                                    <div className="card-price-wrapper">
                                                        <p className="card-price">
                                                            <strong>₹10000</strong> / month
                                                        </p>
                                                        <button
                                                            className="btn fav-btn"
                                                            aria-label="Add to favourite list"
                                                        >
                                                            <i class="bi bi-heart"></i>
                                                        </button>
                                                        {
                                                            car1stat == "verify" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : car1stat == "complete" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : (
                                                                <button className="btn" onClick={() => handleRent("toyota","Toyota RAV4 2021")}>Rent now</button>
                                                            )
                                                        }
                                                    </div>
                                                    <div className='margin-top'>
                                                        <button className='btn review' onClick={() => handleReview("Toyota RAV4 2021")}>
                                                            View Reviews
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ) : (
                                        ""
                                    )
                                }
                                {
                                    !model || model.toLowerCase().startsWith("bmw") ? (
                                        <li>
                                            <div className="featured-car-card">
                                                <figure className="card-banner">
                                                    <img
                                                        src={car2}
                                                        alt="BMW 3 Series 2019"
                                                        loading="lazy"
                                                        width={440}
                                                        height={300}
                                                        className="w-100"
                                                    />
                                                </figure>
                                                <div className="card-content">
                                                    <div className="card-title-wrapper">
                                                        <h3 className="h3 card-title">
                                                            <a href="#">BMW 3 Series</a>
                                                        </h3>
                                                        <data className="year" value={2019}>
                                                            2019
                                                        </data>
                                                    </div>
                                                    <ul className="card-list">
                                                        <li className="card-list-item">
                                                            <i class="bi bi-people" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">4 People</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-speedometer2" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">120/km Limit</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-fuel-pump" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">8.2km / 1-litre</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-cpu" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">Automatic</span>
                                                        </li>
                                                    </ul>
                                                    <div className="card-price-wrapper">
                                                        <p className="card-price">
                                                            <strong>₹30000</strong> / month
                                                        </p>
                                                        <button
                                                            className="btn fav-btn"
                                                            aria-label="Add to favourite list"
                                                        >
                                                            <i class="bi bi-heart"></i>
                                                        </button>
                                                        {
                                                            car2stat == "verify" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : car2stat == "complete" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : (
                                                                <button className="btn" onClick={() => handleRent("bmw3","BMW 3 Series 2019")}>Rent now</button>
                                                            )
                                                        }
                                                    </div>
                                                    <div className='margin-top'>
                                                        <button className='btn review' onClick={() => handleReview("BMW 3 Series 2019")}>
                                                            View Reviews
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ) : (
                                        ""
                                    )

                                }
                                {
                                    !model || model.toLowerCase().startsWith("volkswagen") ? (
                                        <li>
                                            <div className="featured-car-card">
                                                <figure className="card-banner">
                                                    <img
                                                        src={car3}
                                                        alt="Volkswagen T-Cross 2020"
                                                        loading="lazy"
                                                        width={440}
                                                        height={300}
                                                        className="w-100"
                                                    />
                                                </figure>
                                                <div className="card-content">
                                                    <div className="card-title-wrapper">
                                                        <h3 className="h3 card-title">
                                                            <a href="#">Volkswagen T-Cross</a>
                                                        </h3>
                                                        <data className="year" value={2020}>
                                                            2020
                                                        </data>
                                                    </div>
                                                    <ul className="card-list">
                                                        <li className="card-list-item">
                                                            <i class="bi bi-people" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">4 People</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-speedometer2" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">100/km Limit</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-fuel-pump" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">5.3km / 1-litre</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-cpu" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">Automatic</span>
                                                        </li>
                                                    </ul>
                                                    <div className="card-price-wrapper">
                                                        <p className="card-price">
                                                            <strong>₹20000</strong> / month
                                                        </p>
                                                        <button
                                                            className="btn fav-btn"
                                                            aria-label="Add to favourite list"
                                                        >
                                                            <i class="bi bi-heart"></i>
                                                        </button>
                                                        {
                                                            car3stat == "verify" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : car3stat == "complete" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : (
                                                                <button className="btn" onClick={() => handleRent("volks","Volkswagen T-Cross")}>Rent now</button>
                                                            )
                                                        }
                                                    </div>
                                                    <div className='margin-top'>
                                                        <button className='btn review' onClick={() => handleReview("Volkswagen T-Cross")}>
                                                            View Reviews
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ) : (
                                        ""
                                    )
                                }
                                {
                                    !model || model.toLowerCase().startsWith("cadillac") ? (
                                        <li>
                                            <div className="featured-car-card">
                                                <figure className="card-banner">
                                                    <img
                                                        src={car4}
                                                        alt="Cadillac Escalade 2020"
                                                        loading="lazy"
                                                        width={440}
                                                        height={300}
                                                        className="w-100"
                                                    />
                                                </figure>
                                                <div className="card-content">
                                                    <div className="card-title-wrapper">
                                                        <h3 className="h3 card-title">
                                                            <a href="#">Cadillac Escalade</a>
                                                        </h3>
                                                        <data className="year" value={2020}>
                                                            2020
                                                        </data>
                                                    </div>
                                                    <ul className="card-list">
                                                        <li className="card-list-item">
                                                            <i class="bi bi-people" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">4 People</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-speedometer2" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">130/km Limit</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-fuel-pump" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">7.7km / 1-litre</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-cpu" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">Automatic</span>
                                                        </li>
                                                    </ul>
                                                    <div className="card-price-wrapper">
                                                        <p className="card-price">
                                                            <strong>₹18000</strong> / month
                                                        </p>
                                                        <button
                                                            className="btn fav-btn"
                                                            aria-label="Add to favourite list"
                                                        >
                                                            <i class="bi bi-heart"></i>
                                                        </button>
                                                        {
                                                            car4stat == "verify" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : car4stat == "complete" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : (
                                                                <button className="btn" onClick={() => handleRent("cadillac","Cadillac Escalade")}>Rent now</button>
                                                            )
                                                        }
                                                    </div>
                                                    <div className='margin-top'>
                                                        <button className='btn review' onClick={() => handleReview("Cadillac Escalade")}>
                                                            View Reviews
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ) : (
                                        ""
                                    )
                                }
                                {
                                    !model || model.toLowerCase().startsWith("bmw") ? (
                                        <li>
                                            <div className="featured-car-card">
                                                <figure className="card-banner">
                                                    <img
                                                        src={car5}
                                                        alt="BMW 4 Series GTI 2021"
                                                        loading="lazy"
                                                        width={440}
                                                        height={300}
                                                        className="w-100"
                                                    />
                                                </figure>
                                                <div className="card-content">
                                                    <div className="card-title-wrapper">
                                                        <h3 className="h3 card-title">
                                                            <a href="#">BMW 4 Series GTI</a>
                                                        </h3>
                                                        <data className="year" value={2021}>
                                                            2021
                                                        </data>
                                                    </div>
                                                    <ul className="card-list">
                                                        <li className="card-list-item">
                                                            <i class="bi bi-people" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">4 People</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-speedometer2" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">120/km Limit</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-fuel-pump" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">7.6km / 1-litre</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-cpu" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">Automatic</span>
                                                        </li>
                                                    </ul>
                                                    <div className="card-price-wrapper">
                                                        <p className="card-price">
                                                            <strong>₹35000</strong> / month
                                                        </p>
                                                        <button
                                                            className="btn fav-btn"
                                                            aria-label="Add to favourite list"
                                                        >
                                                            <i class="bi bi-heart"></i>
                                                        </button>
                                                        {
                                                            car5stat == "verify" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : car5stat == "complete" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : (
                                                                <button className="btn" onClick={() => handleRent("bmwgti","BMW 4 Series GTI")}>Rent now</button>
                                                            )
                                                        }
                                                    </div>
                                                    <div className='margin-top'>
                                                        <button className='btn review' onClick={() => handleReview("BMW 4 Series GTI")}>
                                                            View Reviews
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ) : (
                                        ""
                                    )
                                }
                                {
                                    !model || model.toLowerCase().startsWith("bmw") ? (
                                        <li>
                                            <div className="featured-car-card">
                                                <figure className="card-banner">
                                                    <img
                                                        src={car6}
                                                        alt="BMW 4 Series 2019"
                                                        loading="lazy"
                                                        width={440}
                                                        height={300}
                                                        className="w-100"
                                                    />
                                                </figure>
                                                <div className="card-content">
                                                    <div className="card-title-wrapper">
                                                        <h3 className="h3 card-title">
                                                            <a href="#">BMW 4 Series</a>
                                                        </h3>
                                                        <data className="year" value={2019}>
                                                            2019
                                                        </data>
                                                    </div>
                                                    <ul className="card-list">
                                                        <li className="card-list-item">
                                                            <i class="bi bi-people" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">4 People</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-speedometer2" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">105/km Limit</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-fuel-pump" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">7.2km / 1-litre</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-cpu" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">Automatic</span>
                                                        </li>
                                                    </ul>
                                                    <div className="card-price-wrapper">
                                                        <p className="card-price">
                                                            <strong>₹38000</strong> / month
                                                        </p>
                                                        <button
                                                            className="btn fav-btn"
                                                            aria-label="Add to favourite list"
                                                        >
                                                            <i class="bi bi-heart"></i>
                                                        </button>
                                                        {
                                                            car6stat == "verify" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : car6stat == "complete" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : (
                                                                <button className="btn" onClick={() => handleRent("bmw4","BMW 4 Series")}>Rent now</button>
                                                            )
                                                        }
                                                    </div>
                                                    <div className='margin-top'>
                                                        <button className='btn review' onClick={() => handleReview("BMW 4 Series")}>
                                                            View Reviews
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ) : (
                                        ""
                                    )
                                }
                                {
                                    !model || model.toLowerCase().startsWith("benz") ? (
                                        <li>
                                            <div className="featured-car-card">
                                                <figure className="card-banner">
                                                    <img
                                                        src={car7}
                                                        alt="Benz GLA"
                                                        loading="lazy"
                                                        width={440}
                                                        height={300}
                                                        className="w-100"
                                                    />
                                                </figure>
                                                <div className="card-content">
                                                    <div className="card-title-wrapper">
                                                        <h3 className="h3 card-title">
                                                            <a href="#">Benz GLA</a>
                                                        </h3>
                                                        <data className="year" value={2019}>
                                                            2019
                                                        </data>
                                                    </div>
                                                    <ul className="card-list">
                                                        <li className="card-list-item">
                                                            <i class="bi bi-people" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">4 People</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-speedometer2" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">105/km Limit</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-fuel-pump" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">7.2km / 1-litre</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-cpu" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">Automatic</span>
                                                        </li>
                                                    </ul>
                                                    <div className="card-price-wrapper">
                                                        <p className="card-price">
                                                            <strong>₹32000</strong> / month
                                                        </p>
                                                        <button
                                                            className="btn fav-btn"
                                                            aria-label="Add to favourite list"
                                                        >
                                                            <i class="bi bi-heart"></i>
                                                        </button>
                                                        {
                                                            car7stat == "verify" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : car7stat == "complete" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : (
                                                                <button className="btn" onClick={() => handleRent("benz","Benz GLA")}>Rent now</button>
                                                            )
                                                        }
                                                    </div>
                                                    <div className='margin-top'>
                                                        <button className='btn review' onClick={() => handleReview("Benz GLA")}>
                                                            View Reviews
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ) : (
                                        ""
                                    )
                                }
                                {
                                    !model || model.toLowerCase().startsWith("suzuki") ? (
                                        <li>
                                            <div className="featured-car-card">
                                                <figure className="card-banner">
                                                    <img
                                                        src={car8}
                                                        alt="Suzuki Baleno"
                                                        loading="lazy"
                                                        width={440}
                                                        height={300}
                                                        className="w-100"
                                                    />
                                                </figure>
                                                <div className="card-content">
                                                    <div className="card-title-wrapper">
                                                        <h3 className="h3 card-title">
                                                            <a href="#">Suzuki Baleno</a>
                                                        </h3>
                                                        <data className="year" value={2019}>
                                                            2019
                                                        </data>
                                                    </div>
                                                    <ul className="card-list">
                                                        <li className="card-list-item">
                                                            <i class="bi bi-people" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">4 People</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-speedometer2" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">100/km Limit</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-fuel-pump" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">8.9km / 1-litre</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-cpu" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">Automatic</span>
                                                        </li>
                                                    </ul>
                                                    <div className="card-price-wrapper">
                                                        <p className="card-price">
                                                            <strong>₹25000</strong> / month
                                                        </p>
                                                        <button
                                                            className="btn fav-btn"
                                                            aria-label="Add to favourite list"
                                                        >
                                                            <i class="bi bi-heart"></i>
                                                        </button>
                                                        {
                                                            car8stat == "verify" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : car8stat == "complete" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : (
                                                                <button className="btn" onClick={() => handleRent("suzuki","Suzuki Baleno")}>Rent now</button>
                                                            )
                                                        }
                                                    </div>
                                                    <div className='margin-top'>
                                                        <button className='btn review' onClick={() => handleReview("Suzuki Baleno")}>
                                                            View Reviews
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ) : (
                                        ""
                                    )
                                }
                                {
                                    !model || model.toLowerCase().startsWith("jaguar") ? (
                                        <li>
                                            <div className="featured-car-card">
                                                <figure className="card-banner">
                                                    <img
                                                        src={car9}
                                                        alt="Jaguar F-Pace"
                                                        loading="lazy"
                                                        width={440}
                                                        height={300}
                                                        className="w-100"
                                                    />
                                                </figure>
                                                <div className="card-content">
                                                    <div className="card-title-wrapper">
                                                        <h3 className="h3 card-title">
                                                            <a href="#">Jaguar F-Pace</a>
                                                        </h3>
                                                        <data className="year" value={2019}>
                                                            2019
                                                        </data>
                                                    </div>
                                                    <ul className="card-list">
                                                        <li className="card-list-item">
                                                            <i class="bi bi-people" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">5 People</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-speedometer2" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">130/km Limit</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-fuel-pump" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">6.2km / 1-litre</span>
                                                        </li>
                                                        <li className="card-list-item">
                                                            <i class="bi bi-cpu" style={{ color: '#12C7F0' }}></i>
                                                            <span className="card-item-text">Automatic</span>
                                                        </li>
                                                    </ul>
                                                    <div className="card-price-wrapper">
                                                        <p className="card-price">
                                                            <strong>₹30000</strong> / month
                                                        </p>
                                                        <button
                                                            className="btn fav-btn"
                                                            aria-label="Add to favourite list"
                                                        >
                                                            <i class="bi bi-heart"></i>
                                                        </button>
                                                        {
                                                            car9stat == "verify" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : car9stat == "complete" ? (
                                                                <button className="btn">Rented</button>
                                                            ) : (
                                                                <button className="btn" onClick={() => handleRent("jaguar","Jaguar F-Pace")}>Rent now</button>
                                                            )
                                                        }
                                                    </div>
                                                    <div className='margin-top'>
                                                        <button className='btn review' onClick={() => handleReview("Jaguar F-Pace")}>
                                                            View Reviews
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ) : (
                                        ""
                                    )
                                }
                            </ul>
                        </div>
                    </section>

                    {/* GET Started */}

                    <section className="section get-start">
                        <div className="container">
                            <h2 className="h2 section-title">Get started with 4 simple steps</h2>
                            <ul className="get-start-list">
                                <li>
                                    <div className="get-start-card">
                                        <div className="card-icon icon-1">
                                            <i class="bi bi-person-add"></i>
                                        </div>
                                        <h3 className="card-title">Create a profile</h3>
                                        <p className="card-text">
                                            If you are going to use a passage of Lorem Ipsum, you need to be
                                            sure.
                                        </p>
                                        <a href="#" className="card-link">
                                            Get started
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="get-start-card">
                                        <div className="card-icon icon-2">
                                            <i class="bi bi-car-front"></i>
                                        </div>
                                        <h3 className="card-title">Tell us what car you want</h3>
                                        <p className="card-text">
                                            Various versions have evolved over the years, sometimes by accident,
                                            sometimes on purpose
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="get-start-card">
                                        <div className="card-icon icon-3">
                                            <i class="bi bi-person-check-fill"></i>
                                        </div>
                                        <h3 className="card-title">Match with seller</h3>
                                        <p className="card-text">
                                            It to make a type specimen book. It has survived not only five
                                            centuries, but also the leap into electronic
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="get-start-card">
                                        <div className="card-icon icon-4">
                                            <i class="bi bi-credit-card"></i>
                                        </div>
                                        <h3 className="card-title">Make a deal</h3>
                                        <p className="card-text" id="review">
                                            There are many variations of passages of Lorem available, but the
                                            majority have suffered alteration
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Reviews */}
                    {
    review &&
    <section className="section blog" >
        <div className="container">
            <h2 className="h2 section-title">Reviews for {review}</h2>
            <ul className="blog-list has-scrollbar">
                {[1, 2, 3, 4, 5].map((index) => (
                    <li key={index}>
                        <div className="blog-card">
                            <figure className="card-banner">
                                <a href="#">
                                    <img
                                        src={review === "Toyota RAV4 2021" ? car1 :
                                            review === "BMW 3 Series 2019" ? car2 :
                                                review === "Volkswagen T-Cross" ? car3 :
                                                    review === "Cadillac Escalade" ? car4 :
                                                        review === "BMW 4 Series GTI" ? car5 :
                                                            review === "BMW 4 Series" ? car6 :
                                                                review === "Benz GLA" ? car7 :
                                                                    review === "Suzuki Baleno" ? car8 :
                                                                        review === "Jaguar F-Pace" ? car9 : ""
                                        }
                                        alt="Opening of new offices of the company"
                                        loading="lazy"
                                        className="w-100"
                                    />
                                </a>
                                <a href="#" className="btn card-badge">
                                    {Math.floor(Math.random() * (5 - 2 + 1)) + 2} Stars
                                </a>
                            </figure>
                            <div className="card-content">
                                <h3 className="h3 card-title">
                                    <a href="#">{randomReviews[index - 1]}</a>
                                </h3>
                                <div className="card-meta">
                                    <div className="publish-date">
                                        <i className="bi bi-calendar"></i>
                                        <time dateTime="2022-01-14">{randomDateString()}</time>
                                    </div>
                                    <div className="comments">
                                        <i className="bi bi-chat-dots"></i>
                                        <data value={114}>{Math.floor(Math.random() * (300 - 100 + 1)) + 2}</data>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
}


                </article>
            </main>

            {/* FOOTER */}

            <footer id='footer' className="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <a href="#" className="logo">
                                <img src={logo} alt="Ridex logo" />
                            </a>
                            <p className="footer-text">
                                Search for cheap rental cars in near you. With a diverse fleet of
                                19,000 vehicles, we offer consumers an attractive and fun
                                selection.
                            </p>
                        </div>
                        <ul className="footer-list">
                            <li>
                                <p className="footer-list-title">Company</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Pricing plans
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Our blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Contacts
                                </a>
                            </li>
                        </ul>
                        <ul className="footer-list">
                            <li>
                                <p className="footer-list-title">Support</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Help center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Ask a question
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Privacy policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Terms &amp; conditions
                                </a>
                            </li>
                        </ul>
                        <ul className="footer-list">
                            <li>
                                <p className="footer-list-title">Neighborhoods in New York</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Manhattan
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Central New York City
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Upper East Side
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Queens
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Theater District
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Midtown
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    SoHo
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Chelsea
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-bottom">
                        <ul className="social-list">
                            <li>
                                <a href="#" className="social-link">
                                    <i class="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <i class="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <i class="bi bi-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <i class="bi bi-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <i class="bi bi-skype"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                    <i class="bi bi-envelope"></i>
                                </a>
                            </li>
                        </ul>
                        <p className="copyright">
                            © 2024 <a href="#">Ridex Car Rentals</a>. All Rights Reserved
                        </p>
                    </div>

                </div>
            </footer>

        </div>
    )
}

export default Home;
