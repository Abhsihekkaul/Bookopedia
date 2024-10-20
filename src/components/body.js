const Body = () => {
    return (
        <>
        <div className="container-1">
            <img src="https://images.unsplash.com/photo-1505063366573-38928ae5567e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1519163219899-21d2bb723b3e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg" alt="front end picture " />
        
            <div className="right-component">
                <h1>Hello Enthusiatic Readers!
                </h1>
                <p className="sub-title"><strong >Welcome to our app, </strong> Here anyone can post 
                whatever they have read so far and keep, share and read your insigths from your readings.</p>

                <div className="UserAuthentication">
                        {/* <label for="email">Email</label> */}
                        <input type="text" id="email" placeholder="Email/Phone" ></input>

                        {/* <label for="password">Password</label> */}
                        <input type="password" id="password" placeholder="password" ></input>

                            <div className="AuthenticationButtons">
                                <button className="SignIn">SingIn</button>
                                <button className="SignUp">SignUp</button>
                            </div>    
                </div>
            </div>
        </div>
        </>
    )
}

export default Body;