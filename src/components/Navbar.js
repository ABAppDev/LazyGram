import React from "react"
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper white">
                <a href={process.env.PUBLIC_URL + '/'} className="brand-logo left">LazyGram</a>
                <ul id="nav-mobile" className="right">
                    <li><a href={process.env.PUBLIC_URL + '/login'}>Login</a></li>
                    <li><a href={process.env.PUBLIC_URL + '/signup'}>Sign Up</a></li>
                    <li><a href={process.env.PUBLIC_URL + '/profile'}>Profile</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar