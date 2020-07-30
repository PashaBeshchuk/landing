import React from 'react'
import './Header.css'
const Header2 = (props) => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a href="#" className="navbar-brand">TESTTASK</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav " aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse nav-right" id="navbarNav">
                <ul className="navbar-nav ml-auto menu">
                    <li className="dropdown-divider active mr-3"></li>
                    <li className="nav-item active mr-3">
                        <a className="nav-link text-dark" href="#">About me</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link text-dark" href="#">Relationships</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link text-dark" href="#">Users</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link text-dark" href="#">Sign Up</a>
                    </li>
                </ul>
                <div className="collapsing collapse nav-right" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="dropdown-divider active mr-3"></li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="#">How it works</a>
                        </li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="#">Partnership</a>
                        </li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="#">Help</a>
                        </li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="#">Leav testimonial</a>
                        </li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="#">Contact us</a>
                        </li>
                        <li className="dropdown-divider active mr-3"></li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="#">Articles</a>
                        </li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="#">Our news</a>
                        </li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="#">Testimonials</a>
                        </li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="#">Licenses</a>
                        </li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)

export default Header2