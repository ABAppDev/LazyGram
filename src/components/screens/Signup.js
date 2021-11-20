import React from "react"
import { Link } from "react-router-dom"


const Signup = () => {
    return (
        <div className="bg-card">
            <div className="card auth-card">
                <h2 className="lazygram brand-logo element-space">Welcome to LazyGram</h2>
                <div class="row input-field col s6">
                    <input id="name" type="text" class="validate" />
                    <label htmlFor="name">Your Name</label>
                </div>
                <div className="row input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="row input-field col s12">
                    <input id="password" type="password" className="validate" />
                    <label htmlFor="password">Password</label>
                </div>
                <button className="btn waves-effect waves-light element-space black" type="submit" name="action">S I G N&nbsp;&nbsp;U P</button>
                <h6 className="smalltext">Already have an account?<Link to="/login" className="boldtext">&nbsp;Sign In</Link></h6>
            </div>
        </div >
    )
}
export default Signup