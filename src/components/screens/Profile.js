import React from "react"

const Profile = () => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around", margin: "18px 0px", borderBottom: "1px solid grey" }}>
                <div><img style={{ width: "160px", height: "160px", borderRadius: "80px" }} src="https://images.unsplash.com/photo-1541911087797-f89237bd95d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" /></div>
                <div><h4>Abhishek Bhalerao</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "90%" }}>
                        <h6>40 Posts</h6>
                        <h6>420 followers</h6>
                        <h6>785 following</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile