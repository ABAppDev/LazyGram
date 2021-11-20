import React from "react"
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper white">
                <a href="/lazygram/" className="brand-logo left">LazyGram</a>
                <ul id="nav-mobile" className="right">
                    <li><a href="/lazygram/login">Login</a></li>
                    <li><a href="/lazygram/signup">Sign Up</a></li>
                    <li><a href="/lazygram/profile">Profile</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar