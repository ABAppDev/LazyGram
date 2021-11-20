import React from "react"
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper white">
                <a href={process.env.PUBLIC_URL + '/lazygram/'} className="brand-logo left">LazyGram</a>
                <ul id="nav-mobile" className="right">
                    <li><a href={process.env.PUBLIC_URL + '/lazygram/login'}>Login</a></li>
                    <li><a href={process.env.PUBLIC_URL + '/lazygram/signup'}>Sign Up</a></li>
                    <li><a href={process.env.PUBLIC_URL + '/lazygram/profile'}>Profile</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar