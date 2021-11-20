import React from "react"

const Login = () => {
    return (
        <div>
            <div class="card curve">
                <h2>LazyGram</h2>
                <input type="text" placeholder="email" />
                <input type="text" placeholder="password" />
                <button class="btn waves-effect waves-light curve" type="submit" name="action">Login</button>
            </div>
        </div>
    )
}
export default Login