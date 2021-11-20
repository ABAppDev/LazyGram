import React from "react"
import { Link } from "react-router-dom"


const Login = () => {
    return (
        <div className="bg-card">
            <div className="card auth-card">
                <h2 className="lazygram brand-logo element-space">Login to LazyGram</h2>
                <div className="row input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="row input-field col s12">
                    <input id="password" type="password" className="validate" />
                    <label htmlFor="password">Password</label>
                </div>
                <button className="btn waves-effect waves-light element-space black" type="submit" name="action">S I G N&nbsp;&nbsp;I N</button>
                <h5 className="smalltext">Don't had an account?<Link to="/signup" className="boldtext">&nbsp;Sign Up</Link></h5>

            </div>
        </div >
    )
}
export default Login