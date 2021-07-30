import React from 'react'

function Navbarview(props) {
    return (
        <React.Fragment>
            {/* <!--navbar start--> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <!--Drawer starts--> */}
                <button className="btn btn-outline-light" data-toggle="drawer" data-target="#shopifyDrawer">
                    <i className="fas fa-sliders-h fa-2x "></i></button>
                <div className="drawer drawer-left slide" tabIndex="-1" role="dialog" aria-labelledby="drawer-demo-title"
                    aria-hidden="true" id="shopifyDrawer">
                    <div className="drawer-content drawer-content-scrollable" role="document">
                        <div className="drawer-header bg-dark text-light">
                            <h4 className="drawer-title" id="drawer-demo-title"><i className="fas fa-user-circle fa-2x mr-2"></i> Hello,
                                Sign In</h4>
                        </div>
                        <div className="drawer-body">
                            <h6 className="text-muted">HELP & SETTINGS</h6>
                            <a href="your_account.html" className="btn btn-dark btn-sm my-2">Your Account</a>
                            <a href="login.html" className="btn btn-dark btn-sm my-2">Sign In</a>
                        </div>
                        <div className="drawer-footer">
                            <button type="button" className="btn btn-warning btn-block " style={{paddingBottom:3}}
                                data-dismiss="drawer" aria-label="Close">
                                <h4>Close <i className="fas fa-times-circle  "></i> </h4>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!--drawer end--> */}
                <a className="navbar-brand mx-3" href="#"><img src="assets/img/shopify2.png" height="65" width="100" alt="logo" /></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingLeft:25}}>
                    {/* <!--searchbar starts--> */}
                    <form className="form-inline" noValidate method="GET">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="btncategorydropdownMenu"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        All
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="btncategorydropdownMenu">
                                        <a className="dropdown-item" href="#">All</a>
                                        <a className="dropdown-item" href="#">Electronics</a>
                                        <a className="dropdown-item" href="#">Clothing and accessories</a>
                                        <a className="dropdown-item" href="#">Computer and accessories</a>
                                        <a className="dropdown-item" href="#">Beauty</a>
                                        <a className="dropdown-item" href="#">Books</a>
                                        <a className="dropdown-item" href="#">Smartphones</a>
                                        <a className="dropdown-item" href="#">Car and MotorBike</a>
                                        <a className="dropdown-item" href="#">Baby</a>
                                    </div>
                                </div>
                            </div>
                            <input type="text" name="query" id="query" className="form-control " size="90" />
                            <input type="text" name="category" id="category" hidden value="books" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-warning ">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* <!--searchbar ends--> */}
                    {/* <!--language starts--> */}

                    <li className="nav-item dropdown mx-3" style={{listStyle:'none'}}>
                        <a className="nav-link" href="#" id="prefLanguageDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-language fa-2x text-light"></i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="prefLanguageDropdown">
                            <form className="p-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="prefLang" id="englishLang" value="en"
                                        checked />
                                    <label className="form-check-label" htmlfor="englishLang">
                                        English <img src="assets/img/flag/english.jpg" style={{marginLeft:7}} height="35"
                                            width="40" alt="uk flag" />
                                    </label>

                                </div>
                                <div className="dropdown-divider"></div>


                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="prefLang" id="hindiLang" value="hn"
                                        checked />
                                    <label className="form-check-label" htmlfor="hindiLang">
                                        Hindi <img src="assets/img/flag/india.png" style={{marginLeft:20}} height="25" width="40"
                                            alt="uk flag" />
                                    </label>

                                </div>
                                <div className="dropdown-divider"></div>

                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="prefLang" id="marathiLang" value="mr"
                                        checked />
                                    <label className="form-check-label" htmlfor="marathiLang">
                                        Marathi <img src="assets/img/flag/india.png" style={{marginLeft:2}} height="25" width="40"
                                            alt="uk flag" />
                                    </label>

                                </div>


                            </form>

                        </div>
                    </li>

                    {/* <!--language ends-->*/}
                    {/*<!--login form--> */}
                    <li className="nav-item dropdown mx-3" style={{listStyle:'none'}}>
                        <a className="nav-link " href="#" id="userAccount" role="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <i className="fas fa-user-circle fa-2x text-light"></i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="userAccount">
                            <div className="d-flex flex-column justify-content-center">
                                <a href="login.html" className=" btn btn-warning w-75 btn-md mx-auto"><b>Sign In</b></a>

                                <small>New Customer?
                                    <a href="register.html">Start Here.</a>
                                </small>

                            </div>
                        </div>
                    </li>


                    {/* <!--login ends--> */}
                    {/* <!--cart start--> */}
                    <li className="nav-item mx-3"  style={{paddingLeft:30 , listStyle:'none'}}>
                        <a className="nav-link" href="shopping_cart.html" aria-disabled="true">
                            <i className="fas fa-2x fa-shopping-cart text-light"></i>
                            <span className="badge rounded-pill bg-warning text-dark">0</span>
                        </a>
                    </li>
                    {/* <!--cart ends--> */}


                </div>
            </nav>

            {/* <!--navbar end--> */}


        </React.Fragment>
    )
}
export default Navbarview;