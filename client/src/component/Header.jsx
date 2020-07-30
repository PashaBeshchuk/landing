import React from 'react'
import './Header.css'
const Header = (props) => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a href="/" className="navbar-brand">TESTTASK</a>
            <button className="navbar-toggler" type="button" data-toggle="modal"  data-target="#exempelModal " aria-controls="navbarNav"  >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="modal" tabIndex="-1" id='exempelModal' role="dialog">
                <div className="modal-dialog menu-modal" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">TETSTTASK</h5>
                    </div>
                    <div className="modal-body">
                        <ul className="navbar-nav ml-auto menu">
                            <li className="nav-item active mr-3">
                                <a className="nav-link text-dark" href="/">About me</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link text-dark" href="/">Relationships</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link text-dark" href="/">Users</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link text-dark" href="/">Sign Up</a>
                            </li>
                            <li className="dropdown-divider active mr-3"></li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="/">How it works</a>
                        </li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="/">Partnership</a>
                        </li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="/">Help</a>
                        </li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="/">Leav testimonial</a>
                        </li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="/">Contact us</a>
                        </li>
                        <li className="dropdown-divider active mr-3"></li>
                        <li className="nav-item active mr-3">   
                            <a className="nav-link text-dark" href="/">Articles</a>
                        </li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="/">Our news</a>
                        </li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="/">Testimonials</a>
                        </li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="/">Licenses</a>
                        </li>
                        <li className="nav-item active mr-3">
                            <a className="nav-link text-dark" href="/">Privacy Policy</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            
            <div className="collapse navbar-collapse nav-right " id="navbarNav">
                <ul className="navbar-nav ml-auto menu">
                    <li className="dropdown-divider active mr-3"></li>
                    <li className="nav-item active mr-3">
                        <a className="nav-link text-dark" href="/">About me</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link text-dark" href="/">Relationships</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link text-dark" href="/">Users</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link text-dark" href="/">Sign Up</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
)

export default Header