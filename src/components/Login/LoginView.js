import React from 'react'

function LoginView(props) {
    return (
        <React.Fragment>
            {/* <!--login start--> */}
            <div className="container">
                <div className="card mx-auto shadow-lg  bg-body rounded" style={{ width: "39rem", marginTop: 100 , marginBottom: 100 }}>

                    <div className="card-body">
                        <h3 className="card-title">Login</h3>
                        {/* <!--form starts--> */}
                        <form onSubmit={props.handleSubmit} >
                            <div className="row mb-3">
                                <label htmlFor ="userEmail" className="col-sm-2 col-form-label">Email: </label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="userEmail" name="email"
                                        placeholder="abc@abc.com" aria-describedby="emailHelp" onChange ={props.handleChange} value ={props.email} />
                                        <small id="emailHelp" className="form-text text-muted">  <i className="fas fa-info-circle text-primary"></i> We all never share your email with anyone
                                            else.</small>
                        </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor ="userPassword" className="col-sm-2 col-form-label">Password: </label>
                                    <div className="col-sm-10">
                                    <input type="password" className="form-control" id="userPassword" name="password"
                                placeholder="******" aria-describedby="passwordHelp" onChange ={props.handleChange} value ={props.password} />
                                            <small id="passwordHelp" className="form-text text-muted"> <i className="fas fa-info-circle text-primary"></i> Password must be at least 6
                                                characters.</small>
                        </div>
                                    </div>


                                    <button type="submit" className="btn btn-warning w-100 shadow btn-sm rounded">Sign in</button>
                </form>
                                {/* <!--form end--> */}

                                {/* <!--  Seperator --> */}
                                <hr mt-5 />
                                    <p className="text-center text-muted">New to shopify?</p>
                                    <a href="register.html" className="btn btn-sm btn-dark w-100">Create New Account</a>
                                    <a href="#" className="btn btn-outline-dark w-100 mt-2 btn-sm">
                                        <i className="fab fa-google"></i> Sign in With Google
                                    </a>

                                    <a href="#" className="btn btn-outline-dark w-100 mt-2 btn-sm">
                                        <i className="fab fa-facebook"></i> Sign in With Facebook
                                    </a>
            </div>
                            </div>
    </div>
                        {/* <!--login ends--></div> */}

        </React.Fragment>
                    )
}
                    export default LoginView;